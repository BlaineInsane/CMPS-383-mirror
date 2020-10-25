import axios from "axios";
import { configuration } from "../BaseUrl";

function ApiGetUserSchools() {
  const url = `${configuration.BASE_URL}/api/schools/userEmployed`;

  return axios.get(url);
}

export default ApiGetUserSchools;
