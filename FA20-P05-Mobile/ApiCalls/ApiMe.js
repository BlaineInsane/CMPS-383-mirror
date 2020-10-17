import axios from "axios";
import { configuration } from "../BaseUrl";

function ApiMe() {
  const loginUrl = `${configuration.BASE_URL}/api/authentication/me/`;

  return axios.get(loginUrl);
}

export default ApiMe;
