import React from "react";
import TextAreaComponent from "../../atom/TextAreaComponent";
import ModalComponent from "../../molicules/ModalComponent";

function ReasonRejection() {
  return (
    <div>
      <ModalComponent
        open={true}
        modalTitle="Reason for Rejection"
        modalWidth={400}
        showPreviousBtn={false}
      >
        <div className="p-2 px-5" style={{ width: " 100% " }}>
          <p className="mb-0">Reason</p>
          <TextAreaComponent placeholder="" />
        </div>
      </ModalComponent>
    </div>
  );
}

export default ReasonRejection;
