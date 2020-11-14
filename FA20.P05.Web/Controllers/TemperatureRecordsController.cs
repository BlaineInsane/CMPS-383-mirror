using System;
using System.Linq;
using System.Threading.Tasks;
using FA20.P05.Web.Data;
using FA20.P05.Web.Features.Authentication;
using FA20.P05.Web.Features.TemperatureRecords;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FA20.P05.Web.Controllers
{
    [ApiController]
    [Route("api/temperature-records")]
    public class TemperatureRecordsController : ControllerBase
    {
        private readonly DataContext dataContext;

        public TemperatureRecordsController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpPost]
        [Authorize(Roles = Roles.PrincipalStaff)]
        public async Task<ActionResult<TemperatureRecordDto>> Create(TemperatureRecordDto targetValue)
        {
            var username = User.Identity.Name;

            // don't allow a staff to specify a school they are not a staff member at
            var schoolStaff = await dataContext.Set<User>()
                .Where(x => x.UserName == username)
                .SelectMany(x => x.Staff.Schools)
                .Where(x => x.SchoolId == targetValue.SchoolId)
                .FirstOrDefaultAsync();

            if (schoolStaff == null)
            {
                return NotFound();
            }

            // TODO: what validation rules might you want to add here?
            var result = dataContext.Set<TemperatureRecord>().Add(new TemperatureRecord
            {
                SchoolId = schoolStaff.SchoolId,
                StaffId = schoolStaff.StaffId,
                TemperatureKelvin = targetValue.TemperatureKelvin,
                MeasuredUtc = DateTimeOffset.UtcNow
            });
            await dataContext.SaveChangesAsync();
            targetValue.Id = result.Entity.Id;

            //hmm, maybe we need more endpoints later?
            return Created($"/api/temperature-records/{targetValue.Id}", targetValue);
        }

        [HttpGet("{id}/{date}")]
        public ActionResult<SchoolTempRecordsDto> GetTempsBySchoolId(int id, DateTime date)
        {
            // returns the number of healthy/unhealthy temperatures of a school on
            // a selected day.

            TimeZoneInfo centralTime = TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time");

            // temps of selected school. Match school and day
            var temps = dataContext
                .Set<TemperatureRecord>()
                .Where(x => x.SchoolId == id && (TimeZoneInfo.ConvertTimeFromUtc(x.MeasuredUtc.DateTime, centralTime).Day) == date.Day)
                .ToList();

            var healthyTemps = 0;
            var unhealthyTemps = 0;
            foreach (var tempRecord in temps)
            {
                if (tempRecord.TemperatureKelvin < 100.4)
                {
                    healthyTemps++;
                } 
                else if (tempRecord.TemperatureKelvin >= 100.4)
                {
                    unhealthyTemps++;
                }
            }

            var schoolTempRecordsDto = new SchoolTempRecordsDto
            {
                numHealthyTemps = healthyTemps,
                numUnhealthyTemps = unhealthyTemps
            };

            return schoolTempRecordsDto;
        }
}
}