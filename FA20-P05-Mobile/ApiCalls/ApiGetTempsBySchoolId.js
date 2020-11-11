import axios from "axios";
import { configuration } from "../BaseUrl";
import moment from "moment";

function ApiGetTempsBySchoolId(schoolId, date) {
  let theDate = moment(date).format();
  const url = `${configuration.BASE_URL}/api/temperature-records/${schoolId}/${theDate}`;

  return axios.get(url, { schoolId, theDate });
}

export default ApiGetTempsBySchoolId;
