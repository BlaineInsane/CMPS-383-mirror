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
    }
}