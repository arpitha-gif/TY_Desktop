import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { reducerAction } from "../redux/reducer";
import logo from "./logo1.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  //   const state = useSelector((state) => state);
  //   const dispatch = useDispatch();
  //   const loginTog = state.loginButton;
  //   const cancelTog = state.cancelButton;
  //   const eyeTog = state.passEye;
  //   const passTog = state.passType;

  //   const handleLogin = () => {
  //     if (loginTog === "#000000A2") {
  //       dispatch(reducerAction.loginBtn("#FFAA17"));
  //       dispatch(reducerAction.cancelBtn("#000000A2"));
  //     }
  //   };

  //   const handleCancel = () => {
  //     if (cancelTog === "#000000A2") {
  //       dispatch(reducerAction.cancelBtn("#FFAA17"));
  //       dispatch(reducerAction.loginBtn("#000000A2"));
  //     }
  //   };

  //   const handleEye = () => {
  //     dispatch(reducerAction.passEye(!eyeTog));

  //     if (eyeTog) {
  //       dispatch(reducerAction.passType("text"));
  //     } else {
  //       dispatch(reducerAction.passType("password"));
  //     }
  //   };

  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="logo" width={"200px"} className="m-auto" />
        <h5 id="loginTitle">Login</h5>
      </div>

      <div>
        <label className="text-white logLable labMar">Employee Id</label>
        <br />
        <input
          type={"text"}
          className="logInp form-control"
          placeholder="Enter Employee Id"
        />
        <br />

        <label className="text-white logLable">Password</label>
        <br />

        <div className="d-flex justify-content-end">
          <input className="logInp form-control" placeholder="Enter Password" />
          {/* {eyeTog ? (
            <>
              <RemoveRedEyeIcon className="eyeBtn" />
              <br />
            </>
          ) : (
            <>
              <VisibilityOffIcon className="eyeBtn" />
              <br />
            </>
          )} */}
        </div>

        <div className=" col-11 d-inline-block rounded mt-4 text-center">
          <button
            className="btn text-white col-6"
            // style={{ backgroundColor: loginTog }}
          >
            Login
          </button>

          <button
            className="btn text-white col-6"
            // style={{ backgroundColor: cancelTog }}
          >
            Cancel
          </button>
        </div>

        <div id="logFoot">
          <p className="text-white chnagePass">Change Password</p>
          <hr style={{ backgroundColor: "white" }} />

          <div className="col-12 footPad">
            <p className="col-6 text-white copyRight d-inline-block">
              Copyright © 2018 Aleercio.com
            </p>
            <p className="col-6 text-white copyRight d-inline-block">
              Terms & Conditions | Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
