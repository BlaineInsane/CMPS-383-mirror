import React from "react";
import { Form, Button } from "react-bootstrap";
const ViewPublicData = () => (
  <div>
    <h1 style={{ color: "white" }}>View Public Data</h1>
    <Form class="PublicData">
      <label style={{ color: "white" }}>
        Day(mm/dd/year) : <br></br> &nbsp;<input type="text"></input>
      </label>
      <br></br>
      <label style={{ color: "white" }}>
        School : <br></br> &nbsp;<input type="text"></input>
      </label>
      <br></br>
      <Button block bsSize="large" type="submit">
        Search
      </Button>
    </Form>
    <div
      align="center"
      style={{
        backgroundColor: "blue",
        width: "23%",
      }}
    >
      <Button block bsSize="large" type="submit">
        View All
      </Button>
    </div>
  </div>
);
export default ViewPublicData;
