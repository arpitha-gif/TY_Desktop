import React from "react";
import SimpleDropdown from "../../atom/SimpleDropdown";
import TextAreaComponent from "../../atom/TextAreaComponent";
import ModalComponent from "../../molicules/ModalComponent";

function ChangeStatus({ approve, setApprove }) {
  return (
    <div>
      <ModalComponent
        open={approve}
        modalWidth={400}
        showPreviousBtn={false}
        modalTitle="Change status"
        onSubmitBtnClick={() => {}}
        onCloseIconClick={() => {
          setApprove(false);
        }}
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
