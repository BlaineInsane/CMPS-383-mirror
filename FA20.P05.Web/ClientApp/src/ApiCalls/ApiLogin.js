import axios from "axios";

function ApiLogin(username, password) {
  const Username = username;
  const Password = password;
  const loginUrl = `/api/authentication/login/`;

  return axios.post(
    loginUrl,
    { Username, Password },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

export default ApiLogin;
