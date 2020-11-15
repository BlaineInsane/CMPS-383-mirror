import React from "react";
import { useState } from "react";
import "./styles.css";
import { Form, Button } from "react-bootstrap";
import ApiLogin from "../ApiCalls/ApiLogin";

function AdminPortal() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleEmailChange = (event) => {
    setemail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      let res = await ApiLogin(email, password);
      if (res.status === "200") {
        alert("did the login");
      }
      console.log(res);
    } catch {
      alert("didn't login");
    }
  };

  return (
    <>
      <div class="bg">
        <div class="out">
          <div class="mid">
            <div class="in">
              <div class="backadmin">
                <h1>Admin Login</h1>
              </div>
              <Form onSubmit={handleLogin}>
                <br></br>
                <label style={{ color: "white" }}>
                  Username:<br></br>
                  <input type="text" onChange={handleEmailChange}></input>
                </label>
                <br></br>
                <label style={{ color: "white" }}>
                  Password:<br></br>
                  <input
                    type="password"
                    onChange={handlePasswordChange}
                  ></input>
                </label>
                <br></br>
                <Button block bsSize="large" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPortal;
