import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../../assets/login/Image.png";
// import { Form, Button, CardGroup, Card } from "react-bootstrap";
import LoginForm from "../../forms/login/LoginForm";

const Login = () => {
  return (
    <div className="bg-image d-flex justify-content-center align-items-center">
      <div
        className="card mb-3"
        style={{ maxWidth: 940, maxHeight: 900, backgroundColor: "#0000002B" }}
      >
        <div className="row g-0">
          <div className="col-md-8">
            <img src={image} className="img-fluid rounded-start " />
            {/* <div class="card-img-overlay">
              <h1
                className="txt-white  text-left"
                style={{ marginTop: "24rem" }}
              >
                Good things on
              </h1>{" "}
              <h1 className="txt-white  text-left"> your way!</h1>
            </div> */}
          </div>

          <div className="col-md-4" style={{ backgroundColor: "#000000A2" }}>
            <div className="card-body">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
