import axios from "axios";
import { configuration } from "../BaseUrl";

function ApiGetAllActiveSchools() {
  const url = `${configuration.BASE_URL}/api/schools/active`;

  return axios.get(url);
}

export default ApiGetAllActiveSchools;
