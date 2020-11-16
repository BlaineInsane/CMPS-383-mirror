import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import ApiGetTempsBySchoolId from "../ApiCalls/ApiGetTempsBySchoolId";
import { activeSchoolsContext } from "../Context/ActiveSchoolsContext";

export default function ViewPublicData() {
  const { activeSchools } = useContext(activeSchoolsContext);
  const [datePicked, setDatePicked] = useState(new Date());
  const [healthyTemps, setHealthyTemps] = useState("");
  const [unhealthyTemps, setUnhealthyTemps] = useState("");
  const [schoolPickedValue, setSchoolPickedValue] = useState("");

  const SchoolDropBoxList = activeSchools.map((school) => {
    return (
      <option value={school.id} key={school.id}>
        {school.name}
      </option>
    );
  });

  const handleSchoolChange = (event) => {
    event.preventDefault();
    setSchoolPickedValue(event.target.value);
  };

  const handleConfirm = async (event) => {
    event.preventDefault();

    // check if user selected a future(invalid) date
    if (moment(datePicked).isAfter(moment(), "day")) {
      alert("Please select a non-future date.");
      setDatePicked(new Date()); // reset date(feels nice)
    } else {
      try {
        // if school hasn't been selected set default value
        let schoolId =
          typeof schoolPickedValue === "string"
            ? schoolPickedValue
            : activeSchools[0].id;

        let res = await ApiGetTempsBySchoolId(schoolId, datePicked);
        if (res.status === 200) {
          setHealthyTemps(res.data.numHealthyTemps);
          setUnhealthyTemps(res.data.numUnhealthyTemps);
        }
      } catch {
        alert("Failed to contact server. Please try again.");
      }
    }
  };

  return (
    <div className="bg">
      <div className="out">
        <div className="mid">
          <div className="in">
            <div className="backpublic">
              <h1>View Public Data</h1>
            </div>
            <Form onSubmit={handleConfirm}>
              <br></br>
              <label style={{ color: "white" }} htmlFor="start">
                {" "}
                Date:
              </label>{" "}
              <br></br>
              <DatePicker
                selected={datePicked}
                onChange={(date) => {
                  setDatePicked(date);
                }}
              />
              <br></br>
              <label style={{ color: "white" }} htmlFor="school">
                Choose a School:
              </label>
              <br></br>
              <select
                name="school"
                value={schoolPickedValue}
                onChange={handleSchoolChange}
              >
                {SchoolDropBoxList}
              </select>
              <br></br>
              <Button block bsSize="large" type="submit">
                Search
              </Button>
              <br></br>
              <br></br>
              <label style={{ color: "white" }}>
                Unhealthy Temperatures: {unhealthyTemps}
              </label>
              <br></br>
              <br></br>
              <label style={{ color: "white" }}>
                Healthy Temperatures: {healthyTemps}
              </label>
              {/* <Button block bsSize="large" type="submit">
        View All
        </Button>*/}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
