import axios from "axios";

function ApiGetAllActiveSchools() {
  const url = `/api/schools/active`;

  return axios.get(url);
}

export default ApiGetAllActiveSchools;
