import React, { useEffect } from "react";
import { requestReject } from "../../../services/utils/request/requestServices";
import TextAreaComponent from "../../atom/TextAreaComponent";
import ModalComponent from "../../molicules/ModalComponent";

function ReasonRejection({
  setReject,
  reject,
  defaultFormData,
  setDefaultFormData,
  rows,
  getTableData,
}) {
  useEffect(() => {
    console.log(rows.data);
  }, []);
  const handleSubmit = async () => {
    const payload = {
      empId: defaultFormData.empId,
      reason: defaultFormData.reason,
    };
    const { data, errRes } = await requestReject(payload);

    if (data) {
      await getTableData();
    } else if (errRes) {
      console.log(errRes.message);
    } else {
      console.log("Something went wrong");
    }
    setReject(false);
  };
  return (
    <div>
      <ModalComponent
        onSubmitBtnClick={handleSubmit}
        open={reject}
        onCloseIconClick={() => {
          setReject(false);
        }}
        modalTitle="Reason for Rejection"
        modalWidth={400}
        showPreviousBtn={false}
      >
        <div className="p-2 px-5" style={{ width: " 100% " }}>
          <p className="mb-0">Reason</p>
          <TextAreaComponent
            placeholder=""
            value={defaultFormData.reason}
            onChange={(e) => {
              setDefaultFormData({
                ...defaultFormData,
                reason: e.target.value,
              });
            }}
          />
        </div>
      </ModalComponent>
    </div>
  );
}

export default ReasonRejection;
