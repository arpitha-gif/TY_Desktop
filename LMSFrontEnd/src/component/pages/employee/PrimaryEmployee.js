import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DatePickerComponent from "../../atom/DatePickerComponent";
import InputComponent from "../../atom/InputComponent";
import SimpleDropdown from "../../atom/SimpleDropdown";

function PrimaryEmployee({ empPayload }) {
  const [defaultFormData, setDefaultFormData] = React.useState({
    empId: "",
    empName: "",
    doj: "",
    dob: "",
    email: "",
    bloodGroup: "",
    designation: "",
    gender: "",
    nationality: "",
    employeeStatus: "",
  });

  const [error, setError] = React.useState({
    empId: false,
    empName: false,
    doj: false,
    dob: false,
    email: false,
    bloodGroup: false,
    designation: false,
    gender: false,
    nationality: false,
    employeeStatus: false,
  });

  const handleError = () => {
    let {
      empId,
      empName,
      doj,
      dob,
      email,
      bloodGroup,
      designation,
      gender,
      nationality,
      employeeStatus,
    } = defaultFormData;

    if (empId === "" || empId != empId) {
      setError({ ...error, empID: true });
    }
    if (empName === "" || empName != empName) {
      setError({ ...error, empName: true });
    }
    if (doj === "" || doj != doj) {
      setError({ ...error, doj: true });
    }
    if (dob === "" || dob != dob) {
      setError({ ...error, dob: true });
    }
    if (email === "" || email != email) {
      setError({ ...error, email: true });
    }
    if (bloodGroup === "" || bloodGroup != bloodGroup) {
      setError({ ...error, bloodGroup: true });
    }
    if (designation === "" || designation != designation) {
      setError({ ...error, designation: true });
    }
    if (gender === "" || gender != gender) {
      setError({ ...error, gender: true });
    }
    if (nationality === "" || nationality != nationality) {
      setError({ ...error, nationality: true });
    }
    if (employeeStatus === "" || employeeStatus != employeeStatus) {
      setError({ ...error, employeeStatus: true });
    }
  };

  // useEffect(() => {
  //   console.log(empPayload);
  // }, []);
  return (
    <div className="m-5">
      <div className="row justify-content-center ">
        <div className="col-5">
          <div className="d-flex justify-content-between">
            <div className="m-2">
              <p className="mb-0">Employee Id</p>
              <InputComponent
                status={error.empName && "error"}
                value={defaultFormData.empId}
                onChange={(e) => {
                  // console.log("target value", e.target.value);
                  setDefaultFormData({
                    ...defaultFormData,
                    empId: e.target.value,
                  });
                }}
              />
            </div>
            <div className="m-2">
              <p className="mb-0">Employee Name</p>
              <InputComponent
                status={error.empName && "error"}
                value={defaultFormData.empName}
                onChange={(e) => {
                  // console.log("target value", e.target.value);
                  setDefaultFormData({
                    ...defaultFormData,
                    empName: e.target.value,
                  });
                }}
              />
              {error.empName && <p className="mb-0">Employee Name required</p>}
            </div>
          </div>
          <div className=" row d-flex justify-content-between">
            <div className="col-5 m-2">
              <p className="mb-0">Date of Joining</p>
              <DatePickerComponent
                value={defaultFormData.doj}
                onChange={(date, dateString) => {
                  console.log(dateString, "dateString");
                  setDefaultFormData({ ...defaultFormData, doj: dateString });
                }}
              />
              {error.doj && (
                <p className="mb-0 text-danger">Date of Joining Required</p>
              )}
            </div>
            <div className="m-2 col-5">
              <p className="mb-0">Date of Birth</p>
              <DatePickerComponent
                value={defaultFormData.dob}
                onChange={(date, dateString) => {
                  setDefaultFormData({ ...defaultFormData, dob: dateString });
                }}
              />
              {error.dob && <p className="mb-0">Date of Birth Required</p>}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="m-2">
              <p className="mb-0">E-mail ID</p>
              <InputComponent
                status={error.email && "error"}
                value={defaultFormData.email}
                onChange={(e) => {
                  setDefaultFormData({
                    ...defaultFormData,
                    email: e.target.value,
                  });
                }}
              />
              {error.email && (
                <p className="mb-0 text-danger">E-mail ID Required</p>
              )}
            </div>
            <div className="m-2">
              <p className="mb-0">Blood Group</p>
              <InputComponent
                status={error.bloodGroup && "error"}
                value={defaultFormData.bloodGroup}
                onChange={(e) => {
                  setDefaultFormData({
                    ...defaultFormData,
                    bloodGroup: e.target.value,
                  });
                }}
              />
              {error.bloodGroup && (
                <p className="mb-0, text-danger">Blood Group Required</p>
              )}
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="m-2 col-5">
              <p className="mb-0">Designation</p>
              <SimpleDropdown />
            </div>
            <div className="m-2 col-5">
              <p className="mb-0">Gender</p>
              <SimpleDropdown />
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="m-2 col-5">
              <p className="mb-0">Nationality</p>
              <SimpleDropdown />
            </div>
            <div className="m-2 col-5">
              <p className="mb-0">Employee Status</p>
              <SimpleDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrimaryEmployee;
