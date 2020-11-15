import React from "react";

const HomePage = () => (
  <body>
    <div class="bg">
      <div class="out">
        <div class="mid">
          <div class="in">
            <div class="backhome">
              <h1>HealthShare</h1>
            </div>
            <p
              style={{
                color: "white",
                margin: "auto",
                fontSize: 21,
              }}
            >
              With COVID-19 procedures being adopted throughout the school
              systems new technologies can be deployed to help keep information
              available to the public. Our process does not store any student
              personally identifiable information (PII) in a database, in
              accordance with the Health Insurance Portability and
              Accountability Act (HIPAA).
              <br></br>
              <br></br>This process involves staff using non-contact
              thermometers to check every student’s temperature prior to letting
              the student into the school. As this occurs, the system allows
              staff to record temperatures very quickly for the hundreds of
              students every day. Those temperatures are not tied to a student
              name or identifiable to them in any sort of central database.
              <br></br>
              <br></br>Administrators can see reported numbers and highlighted
              cases with a fever over 100 Fahrenheit. Those students who test
              over 100 F will be asked to sit to the side and wait 10 minutes
              and will be retested. If their fever persists after that 10 minute
              cool-down then they are sent home. Likewise, members of the public
              will be able to see an overview of reported information on a per
              school basis on a near-real time basis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
);

export default HomePage;
