import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import moment from "moment";

import ApiGetTempsBySchoolId from "../ApiCalls/ApiGetTempsBySchoolId";
import { activeSchoolsContext } from "../Context/ActiveSchoolsContext";

export default function ViewPublicData() {
  const { activeSchools } = useContext(activeSchoolsContext);
  const [datePicked, setDatePicked] = useState("");
  const [schoolId, setId] = useState();
  const [healthyTemps, setHealthyTemps] = useState("");
  const [unhealthyTemps, setUnhealthyTemps] = useState("");
  const [schoolPickedValue, setSchoolPickedValue] = useState();

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

  const handleSchoolId = () => {
    setId(
      schoolPickedValue != null ? schoolPickedValue : parseFloat(idBySchool)
    );
  };

  const handleDateChange = (date) => {
    if (moment(date).isAfter(moment(Date.now()), "day")) {
      alert("Error", "Please select a non-future date.");
    } else {
      setDatePicked(date);
    }
  };

  const handleConfirm = async () => {
    try {
      let res = await ApiGetTempsBySchoolId(schoolId, datePicked);
      if (res.status === 200) {
        setHealthyTemps(res.data.numHealthyTemps);
        setUnhealthyTemps(res.data.numUnhealthyTemps);
        console.log(res.status);
        alert("hiya buddy");
      }
    } catch {}
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
              <input
                type="date"
                id="start"
                name="trip-start"
                onChange={handleDateChange}
              />
              <br></br>
              <label style={{ color: "white" }} htmlFor="school">
                Choose a School:
              </label>
              <br></br>
              <select name="school" id="cars" onChange={handleSchoolId}>
                {SchoolDropBoxList}
              </select>
              <br></br>
              <Button block bsSize="large" type="submit">
                Search
              </Button>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
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
