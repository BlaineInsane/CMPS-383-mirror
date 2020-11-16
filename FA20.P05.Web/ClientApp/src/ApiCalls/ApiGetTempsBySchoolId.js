import axios from "axios";
import moment from "moment";

function ApiGetTempsBySchoolId(schoolId, date) {
  let theDate = moment(date).format();
  const url = `/api/temperature-records/${schoolId}/${theDate}`;

  return axios.get(url, { schoolId, theDate });
}

export default ApiGetTempsBySchoolId;
