import React from "react";
import ModalComponent from "../../molicules/ModalComponent";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function ResetModal() {
  return (
    <div>
      <ModalComponent
        modalTitle="Reset your password to continue"
        open={true}
        submitBtnText="Change"
        showPreviousBtn={false}
        showCloseIcon={false}
        modalWidth={400}
      >
        <div className="p-3 px-5">
          <div className="mb-2">
            <Input.Password placeholder="Enter existing password" />
          </div>
          <div className="mb-2">
            <Input.Password placeholder="Enter New Password (Must be at least 6 characters)" />
          </div>
          <div className="mb-2">
            <Input.Password placeholder="Re-enter Password" />
          </div>
        </div>
      </ModalComponent>
    </div>
  );
}

export default ResetModal;
