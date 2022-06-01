import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ButtonComponent from "../atom/ButtonComponent";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "@mui/material";

const ModalComponent = ({
  children,
  modalTitle = "Modal Title",
  modalWidth = 750,
  showFooter = true,
  showHeader = true,
  showCloseIcon = true,
  minHeightClassName = "mnh-400",
  showPreviousBtn = true,
  showSubmitButton = true,
  submitBtnText = "Submit",
  previousBtnText = "Previous",
  onSubmitBtnClick = () => {},
  onPreviousBtnClick = () => {},
  onCloseIconClick = () => {},
  open = true,
}) => {
  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: modalWidth,
    bgcolor: "background.paper",
    border: "0px solid white",
    boxShadow: 24,
    borderRadius: "5px",
  };
  return (
    <Modal
      open={open}
      disableAutoFocus
      disableEnforceFocus
      disableEscapeKeyDown
    >
      <Box sx={styles}>
        {showHeader && (
          <div
            className="d-flex justify-content-between px-4 py-2"
            style={{ borderBottom: "2px solid #F0F3F9" }}
          >
            <label className="modal-title fw-600 text-primary">
              {modalTitle}
            </label>
            <div className={showCloseIcon ? "" : "d-none"}>
              <Tooltip title="Close">
                <CloseIcon
                  onClick={onCloseIconClick}
                  style={{ cursor: "pointer" }}
                  sx={{ "&:hover": { color: "blue" } }}
                />
              </Tooltip>
            </div>
          </div>
        )}
        <div
          className={`${minHeightClassName} overflowY-scroll overflowX-hidden`}
        >
          {children}
        </div>
        {showFooter && (
          <div
            className="px-2 py-2 d-flex justify-content-between"
            style={{ borderTop: "2px solid #F0F3F9" }}
          >
            <div>
              {showPreviousBtn && (
                <ButtonComponent
                  onClick={onPreviousBtnClick}
                  label={previousBtnText}
                />
              )}
            </div>
            {showSubmitButton && (
              <ButtonComponent
                submitBtnText={"Create"}
                color="primary"
                onClick={onSubmitBtnClick}
                label={submitBtnText}
              />
            )}
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
