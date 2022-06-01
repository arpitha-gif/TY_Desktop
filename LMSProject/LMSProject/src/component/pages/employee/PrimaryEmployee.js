import { Typography } from "@mui/material";
import React from "react";
import DatePickerComponent from "../../atom/DatePickerComponent";
import InputComponent from "../../atom/InputComponent";
import SimpleDropdown from "../../atom/SimpleDropdown";

function PrimaryEmployee() {
  return (
    <div className="m-5">
      <div className="row justify-content-center ">
        <div className="col-5">
          <div className="d-flex justify-content-between">
            <div className="m-2">
              <p className="mb-0">Employee Id</p>
              <InputComponent />
            </div>
            <div className="m-2">
              <p className="mb-0">Employee Name</p>
              <InputComponent />
            </div>
          </div>
          <div className=" row d-flex justify-content-between">
            <div className="col-5 m-2">
              <p className="mb-0">Date of Joining</p>
              <DatePickerComponent />
            </div>
            <div className="m-2 col-5">
              <p className="mb-0">Date of Birth</p>
              <DatePickerComponent />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="m-2">
              <p className="mb-0">E-mail ID</p>
              <InputComponent />
            </div>
            <div className="m-2">
              <p className="mb-0">Blood Group</p>
              <InputComponent />
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
