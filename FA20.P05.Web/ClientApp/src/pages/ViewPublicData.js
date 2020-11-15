import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";

import { activeSchoolsContext } from "../Context/ActiveSchoolsContext";

function ViewPublicData() {
  const { activeSchools } = useContext(activeSchoolsContext);

  const SchoolDropBoxList = activeSchools.map((school) => {
    return (
      <option value={school.id} key={school.id}>
        {school.name}
      </option>
    );
  });

  return (
    <div className="bg">
      <div className="out">
        <div className="mid">
          <div className="in">
            <div className="backpublic">
              <h1>View Public Data</h1>
            </div>
            <Form>
              <br></br>
              <label style={{ color: "white" }} htmlFor="start">
                {" "}
                Date:
              </label>{" "}
              <br></br>
              <input type="date" id="start" name="trip-start" />
              <br></br>
              <label style={{ color: "white" }} htmlFor="school">
                Choose a School:
              </label>
              <br></br>
              <select name="school" id="cars">
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
export default ViewPublicData;
