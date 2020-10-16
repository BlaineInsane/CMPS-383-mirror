import React from "react";
import axios from "axios";
import { configuration } from "../BaseUrl";
import Staff from "../Screens/Staff";
import { NavigationHelpersContext } from "@react-navigation/native";

function ApiLogin(username, password) {
  const Username = username;
  const Password = password;
  const loginUrl = `${configuration.BASE_URL}/api/authentication/login/`;

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
