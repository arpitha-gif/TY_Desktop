import React from "react";
import TextAreaComponent from "../../atom/TextAreaComponent";
import ModalComponent from "../../molicules/ModalComponent";

function ChangeStatus() {
  return (
    <div>
      <ModalComponent
        open={true}
        modalWidth={400}
        showPreviousBtn={false}
        modalTitle="Change status"
        onSubmitBtnClick={() => {}}
        onCloseIconClick={() => {}}
      >
        <div className="px-5 p-2 overflow Y-scroll h-550">
          <div className="mb-2">
            <p className="mb-0">Batch Name</p>
            <SimpleDropdown />
          </div>
          <div>
            <p className="mb-0">Batch ID</p>
            <SimpleDropdown />
          </div>
        </div>
      </ModalComponent>
    </div>
  );
}

export default ChangeStatus;
