import React from "react";
import { useState } from "react";
import "./styles.css";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
function AdminPortal() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function login(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "/api/",
      data: {
        email: email,
        password: password,
      },
      config: { headers: { "Content-Type": "/json" } },
    })
      .then(function () {
        alert("Successful login.");
      })
      .catch(function (error) {
        alert("Failed to login.");
        console.log(error);
      });
  }
  return (
    <body className="subBody">
      <p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          class="loginForm"
        >
          <h1>Login</h1>

          <Form.Group controlID="email">
            <Form.Label>
              <div className="">Email:</div>
            </Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setemail(e.target.value)}
              name="email"
              type="email"
              placeholder="Enter Email Address"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlID="password">
            <Form.Label>
              <div className="">Password:</div>
            </Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Enter Password"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            onClick={(e) => {
              login(e);
            }}
            type="submit"
          >
            Login
          </Button>
        </form>
      </p>
    </body>
  );
}

export default AdminPortal;
