import axios from "axios";

function ApiMe() {
  const loginUrl = `/api/authentication/me/`;

  return axios.get(loginUrl);
}

export default ApiMe;
