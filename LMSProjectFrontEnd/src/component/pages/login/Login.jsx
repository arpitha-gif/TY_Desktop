import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../../assets/login/Image.png";
// import { Form, Button, CardGroup, Card } from "react-bootstrap";
import LoginForm from "../../forms/login/LoginForm";
import { Card } from "@mui/material";

const Login = () => {
  return (
    <div>
      <div
        className="bgImg"
        style={{ paddingTop: "6vh", paddingBottom: "7vh" }}
      >
        <Card
          sx={{ maxWidth: 1000, minHeight: 500, padding: 0, paddingBottom: 0 }}
          className="row m-auto"
        >
          <div className="col-md-8  bgReal d-inline-block">
            <p
              id="loginLeft"
              className="text-left mb-0 mt-0 "
              style={{ letterSpacing: "0px", marginLeft: "10px" }}
            >
              Good things on
              <p className="mt-0 mb-0">your way!</p>
            </p>
          </div>

          <div className="col-md-4 d-inline-block formBg">
            <LoginForm />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
