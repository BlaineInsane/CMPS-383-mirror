import axios from "axios";
import { configuration } from "../BaseUrl";

function ApiGetTempsBySchoolId(schoolId, date) {
  const url = `${configuration.BASE_URL}/api/temperature-records/${schoolId}`;
  let dateTime = date.toJSON(); // JavaScript date as a c# DateTime

  return axios.get(url, { schoolId, dateTime });
}

export default ApiGetTempsBySchoolId;
