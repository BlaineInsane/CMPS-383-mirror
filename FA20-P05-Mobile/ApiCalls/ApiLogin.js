import axios from "axios";
import { configuration } from "../BaseUrl";

async function ApiLogin(username, password) {
  const Username = username;
  const Password = password;
  const loginUrl = `${configuration.BASE_URL}/api/authentication/login/`;

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
