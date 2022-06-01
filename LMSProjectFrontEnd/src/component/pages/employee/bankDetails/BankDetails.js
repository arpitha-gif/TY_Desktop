import React from "react";
import InputComponent from "../../../atom/InputComponent";
import SimpleDropdown from "../../../atom/SimpleDropdown";

function BankDetails() {
  return (
    <div className="m-5">
      <div className="row justify-content-center ">
        <div className="col-5">
          <div className="d-flex justify-content-between">
            <div className="m-2">
              <p className="mb-0">Account No.</p>
              <InputComponent />
            </div>
            <div className="m-2">
              <p className="mb-0">Bank Name</p>
              <InputComponent />
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-5 m-2">
              <p className="mb-0">Account Type</p>
              <SimpleDropdown />
            </div>
            <div className="col-5 m-2">
              <p className="mb-0">IFSC Code</p>
              <InputComponent />
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="m-2 col-5">
              <p className="mb-0">Branch</p>
              <SimpleDropdown />
            </div>
            <div className="m-2 col-5">
              <p className="mb-0">State</p>
              <SimpleDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankDetails;
