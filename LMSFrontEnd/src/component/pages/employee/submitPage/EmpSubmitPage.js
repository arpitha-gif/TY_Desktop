import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ButtonComponent from "../../../atom/ButtonComponent";
import ModalComponent from "../../../molicules/ModalComponent";

function EmpSubmitPage({ setSubmitPage, submitPage }) {
  const [openEdit, setOpenEdit] = useState(false);
  const handleEditInfo = () => {};
  return (
    <div>
      <ModalComponent
        modalWidth={450}
        showHeader={false}
        showFooter={false}
        onCloseIconClick={() => {
          setSubmitPage(false);
        }}
        open={submitPage}
      >
        <Box className="m-4">
          <div>
            <Typography
              fontSize={"25px"}
              className="mb-2 d-flex justify-content-center"
              color={"#086288"}
              style={{ fontFamily: "Open Sans, Regular", fontWaight: "598px" }}
            >
              Your request will be approved <br></br>
              {"  "} in sometime, Please wait
            </Typography>
          </div>
          <div className="mb-2 d-flex justify-content-center">
            <ButtonComponent
              onClick={() => {
                handleEditInfo();
              }}
              size="default"
              label="Edit basic info"
              style={{
                background: "#086288",
                color: "#FFFFFF",
                fontFamily: "Open Sans, Regular",
              }}
            />
          </div>
        </Box>
      </ModalComponent>
    </div>
  );
}

export default EmpSubmitPage;
