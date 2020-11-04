import React from "react";
import { Form, Button } from "react-bootstrap";
const ViewPublicData = () => (
  <div>
    <h1>View Public Data</h1>
    <form class="PublicData">
      <label>
        Day(mm/dd/year) : &nbsp;<input type="text"></input>
      </label>
      <br></br>
      <label>
        School : &nbsp;<input type="text"></input>
      </label>
      <br></br>
      <Button block bsSize="large" type="submit">
        Search
      </Button>
    </form>
  </div>
);
export default ViewPublicData;
