using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FA20.P05.Web.Features.TemperatureRecords
{
    public class SchoolTempRecordsDto
    {
        // What is healthy and unhealthy temps are set in the TemperatureRecordsController
        public int numHealthyTemps { get; set; }
        public int numUnhealthyTemps { get; set; }
    }
}
