import axios from 'axios';
import { BASE_URL } from '../env.js';

export function ApiLogin(props) {

    const Username = props.Username;
    const Password = props.Password;
    const loginUrl = `${BASE_URL}/api/authentication/login/`;

    axios.post(loginUrl, { Username, Password }, {
        headers: {
            'content-type': 'application/json',
        },
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}