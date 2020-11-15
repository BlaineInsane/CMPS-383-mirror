import React from "react";
import { Form, Button } from "react-bootstrap";
const ViewPublicData = () => (
  <div className="bg">
    <div className="out">
      <div className="mid">
        <div className="in">
          <div className="backpublic">
            <h1>View Public Data</h1>
          </div>
          <Form>
            <br></br>
            <label style={{ color: "white" }} for="start">
              {" "}
              Date:
            </label>{" "}
            <br></br>
            <input type="date" id="start" name="trip-start" />
            <br></br>
            <label style={{ color: "white" }} for="school">
              Choose a School:
            </label>
            <br></br>
            <select name="school" id="cars">
              <option value="school1">School1</option>
              <option value="school2">School2</option>
              <option value="school3">School3</option>
              <option value="school4">School4</option>
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
export default ViewPublicData;
