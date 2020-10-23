import React from "react";
import { useState } from "react";
import "./styles.css";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import ApiLogin from "../ApiCalls/ApiLogin";

function AdminPortal() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleEmailChange = (event) => {
    setemail(event.target.value);
    console.log(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
    console.log(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      let res = await ApiLogin(email, password);
      if (res.status == "200") {
        alert("did the login");
      }
      console.log(res);
    } catch {
      alert("didn't login");
    }
  };

  return (
    <>
      <Form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="text" onChange={handleEmailChange}></input>
        </label>
        <label>
          Password:
          <input type="text" onChange={handlePasswordChange}></input>
        </label>
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}

export default AdminPortal;
