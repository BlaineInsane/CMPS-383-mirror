import axios from "axios";
import { BASE_URL } from "../env.js";

async function ApiLogin(username, password) {
  const Username = username;
  const Password = password;
  const loginUrl = `${BASE_URL}/api/authentication/login/`;

  axios
    .post(
      loginUrl,
      { Username, Password },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default ApiLogin;
