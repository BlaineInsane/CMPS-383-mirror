import axios from "axios";
import { configuration } from "../BaseUrl";

function ApiTemps(SchoolId, TemperatureKelvin) {
  const schoolId = SchoolId;
  const temperatureKelvin = TemperatureKelvin;
  const tempURL = `${configuration.BASE_URL}/api/temperature-records`;

  return axios.post(
    tempURL,
    { schoolId, temperatureKelvin },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

export default ApiTemps;
