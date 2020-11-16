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

  const idBySchool = activeSchools.map((school) => {
    return school.id;
  });

  const handleDateChange = (data, value) => {
    data.preventDefault();

    //setDatePicked(date);
    console.log(data);
    console.log(value);
  };

  const handleSchoolChange = (event) => {
    event.preventDefault();

    setSchoolPickedValue(event.target.value);
    console.log(event.target.value);
  };

  const handleConfirm = async (event) => {
    event.preventDefault();
    setSchoolPickedValue(
      schoolPickedValue != null ? schoolPickedValue : parseInt(idBySchool)
    );

    try {
      let res = await ApiGetTempsBySchoolId(
        parseInt(schoolPickedValue),
        datePicked
      );
      if (res.status === 200) {
        console.log(res.status);

        setHealthyTemps(res.data.numHealthyTemps);
        setUnhealthyTemps(res.data.numUnhealthyTemps);
      }
    } catch {
      // didn't get data
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
                  console.log(datePicked);
                }}
              />
              {/*
              <input
                type="date"
                name="trip-start"
                value={datePicked}
                onChange={handleDateChange}
              />
              */}
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
