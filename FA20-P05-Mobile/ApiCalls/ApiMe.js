import axios from "axios";
import { useState } from "react";
import { configuration } from "../BaseUrl";

async function ApiMe() {
    const loginUrl = `${configuration.BASE_URL}/api/authentication/me/`;

    axios.get(loginUrl)
        .then(res => {
            console.log(res);   
        });

    return statusCode;
}

export default ApiMe;