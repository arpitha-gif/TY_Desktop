import React from "react";
import ButtonComponent from "../../../atom/ButtonComponent";
import InputComponent from "../../../atom/InputComponent";
import SimpleDropdown from "../../../atom/SimpleDropdown";

function SecondaryInfo({ empPayload, setEmpPayload, handleNextClick }) {
  const handleNext = () => {
    handleNextClick();
    // setEmpPayload({
    //   ...empPayload,
    //   empId: empId,
    //   empName: empName,
    //   doj: doj,
    //   dob: dob,
    //   email: email,
    //   bloodGroup: bloodGroup,
    //   designation: designation,
    //   gender: gender,
    //   nationality: nationality,
    //   status: employeeStatus,
    // });
  };
  return (
    <div>
      <div className="m-5">
        <div className="row justify-content-center ">
          <div className="col-5">
            <div className="d-flex justify-content-between">
              <div className="m-2">
                <p className="mb-0">PAN No.</p>
                <InputComponent />
              </div>
              <div className="m-2">
                <p className="mb-0">Aadhar No.</p>
                <InputComponent />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="m-2">
                <p className="mb-0">Father Name</p>
                <InputComponent />
              </div>
              <div className="m-2">
                <p className="mb-0">Mother Name</p>
                <InputComponent />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="m-2">
                <p className="mb-0">Spouse Name</p>
                <InputComponent />
              </div>
              <div className="m-2">
                <p className="mb-0">Passport No.</p>
                <InputComponent />
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="m-2 col-5">
                <p className="mb-0">Marital Status</p>
                <SimpleDropdown />
              </div>
            </div>
            <ButtonComponent onClick={() => handleNext()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondaryInfo;
