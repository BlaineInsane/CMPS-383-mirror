import React from "react";

const HomePage = () => (
  <div>
    <h1 style={{ color: "white" }}>Home Page</h1>
    <p style={{ color: "white", margin: "auto" }}>
      With COVID-19 procedures being adopted throughout the school systems new
      technologies can be deployed to help keep information available to the
      public. Our process does not store any student PII (personally
      identifiable information) on the server because of HIPAA considerations.
      The main data being collected is student temperature readings as students
      arrive to school.
      <br></br>
      <br></br>This process involves staff using non-contact thermometers to
      check every student’s temperature prior to letting the student into the
      school. As this occurs, the system allows staff to record temperatures
      veryquickly for the hundreds of students every day. Those temperatures are
      not tied to a student name or identifiable to them in any sort of central
      database. However, through the use of a randomly generated QR Code, by
      each student, students are able to use the app themselves to see
      historical data related to themselves if their randomized ID was scanned
      each day.
      <br></br>
      <br></br>Administrators can see reported numbers and highlighted cases
      with a fever over 100 Fahrenheit. Those students who test over 100 F will
      be asked to sit to the side and wait 10 minutes and will be retested. If
      their fever persists after that 10 minute cooldown then they are sent
      home. Likewise, members of the public will be able to see an overview of
      reported information on a per school basis on a near-real time basis.
      <br></br>
    </p>
  </div>
);

export default HomePage;
