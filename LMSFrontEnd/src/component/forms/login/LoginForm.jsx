import InputComponent from "../../atom/InputComponent";
import ButtonComponent from "../../atom/ButtonComponent";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/utils/login/Login";

import { Visibility, VisibilityOff } from "@mui/icons-material";

function LoginForm() {
  const [defaultFormData, setDefaultFormData] = useState({
    empId: "",
    password: "",
    showPassword: "",
    showPassword: false,
  });
  const [error, setError] = useState({
    empId: false,
    validempId: false,
    password: false,
  });
  // const jwt = useSelector((state)=> state.product)

  const [empIdErr, setempIdErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [click, setClick] = useState({
    clickMail: false,
    clickPass: false,
  });
  const history = useNavigate();

  let { clickMail, clickPass } = click;
  const handleChange = (prop) => (event) => {
    setDefaultFormData({ ...defaultFormData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setDefaultFormData({
      ...defaultFormData,
      showPassword: !defaultFormData.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let errorObj = {
    empId: false,
    password: false,
    validempId: false,
  };
  const handleError = () => {
    const { empId, password } = defaultFormData;
    if (
      empId === "" ||
      !empId ||
      empId.charAt(0) === " " ||
      empId.charAt(empId.length - 1) === " "
    ) {
      errorObj.empId = true;
    }
    if (
      password === "" ||
      !password ||
      password.charAt(0) === " " ||
      password.charAt(password.length - 1) === " "
    ) {
      errorObj.password = true;
      setPasswordErr("Password required");
    }
    return errorObj;
  };

  const handleSave = async () => {
    // const errorObj = handleError();
    // setError(errorObj);
    // let validempId = true;
    // errorObj &&
    //   Object.keys(errorObj).length > 0 &&
    //   Object.entries(errorObj).forEach(([_, value]) => {
    //     if (value) {
    //       validempId = false;
    //       return false;
    //     }
    //   });

    const payload = {
      empId: defaultFormData.empId,
      password: defaultFormData.password,
    };

    let { dataRes, errRes } = await login(payload);

    console.log(dataRes.data.data.role);

    if (dataRes) {
      // dispatch(userAction(dataRes.header.token));
      let data = dataRes.data.data.token;
      console.log(data);
      localStorage.setItem("token", data);
      localStorage.setItem("role", dataRes.data.data.role);
      history("/dashboard");
      setDefaultFormData({ ...defaultFormData, empId: "" });
      setDefaultFormData({ ...defaultFormData, password: "" });
    } else {
      if (errRes) {
        errorObj.password = true;
        errorObj.validempId = true;
        setempIdErr(errRes.message);
        setPasswordErr(errRes.message);
      }
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center h-100 px-md-5 px-sm-5">
      <h3 className="fw-600 mb-4 mt-4 m-5 txt-yellow">Login</h3>
      <div className="mb-4 w-60">
        <p className={`mb-0 ${clickMail ? "text-blue" : "text-normal"}`}>
          <span className="text-danger">*</span>empId
        </p>
        <InputComponent
          placeholder="Enter your empId"
          error={error.empId || error.validempId}
          value={defaultFormData.empId}
          fullWidth={true}
          name="empId"
          onClick={() => {
            setClick({ ...click, clickMail: true });
          }}
          onBlur={() => {
            setClick({ ...click, clickMail: false });
          }}
          onChange={(e) => {
            setDefaultFormData({ ...defaultFormData, empId: e.target.value });
          }}
        />
        {error.empId ? (
          <p className="mb-0 fs-12  w-75" style={{ color: "red" }}>
            empId is required
          </p>
        ) : error.validempId ? (
          <span className="mb-0 fs-12  w-75" style={{ color: "red" }}>
            {empIdErr}
          </span>
        ) : (
          ""
        )}
      </div>
      <div>
        <p className={`mb-0 ${clickPass ? "text-blue" : "text-normal"}`}>
          <span className="text-danger">*</span>Password
        </p>
        <FormControl
          value={defaultFormData.password}
          variant="standard"
          className="w-60"
          name="password"
          onClick={() => {
            setClick({ ...click, clickPass: true });
          }}
          onBlur={() => {
            setClick({ ...click, clickPass: false });
          }}
        >
          <InputComponent
            placeholder="Enter your password"
            error={error.password}
            id="standard-adornment-password"
            type={defaultFormData.showPassword ? "text" : "password"}
            value={defaultFormData.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {defaultFormData.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {
          error.password && (
            <p className="mb-0 fs-12  w-75 " style={{ color: "red" }}>
              {/* Password is required */}
              {passwordErr}
            </p>
          )
          // : !passwordValid ? (
          //   <span className="mb-0 fs-12  w-75" style={{ color: "red" }}>
          //     {passwordErr}
          //   </span>
          // ) : null
        }
      </div>

      <div className="mx-5">
        <ButtonComponent
          //  onClick={handlePreview}
          label="LOGIN"
          // color="primary"
          style={{ backgroundColor: "#ffaa17", color: "#ffffff" }}
          muiProps="w-20 mt-5"
          variant="contained"
          onClick={handleSave}
        />
      </div>
    </div>
  );
}

export default LoginForm;
