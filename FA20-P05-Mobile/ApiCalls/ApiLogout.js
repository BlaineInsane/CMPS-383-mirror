import axios from "axios";
import { configuration } from "../BaseUrl";

function ApiLogout(username, staffid) {
  const Username = username;
  const staffId = staffid;
  const logoutUrl = `${configuration.BASE_URL}/api/authentication/logout/`;

  //console.log(Username, staffId);

  axios.post(
    logoutUrl,
    { Username, staffId },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

export default ApiLogout;
