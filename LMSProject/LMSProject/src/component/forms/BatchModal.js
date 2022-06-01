import { Box } from "@mui/system";
import React, { useState } from "react";
import { batchSubmit } from "../../services/utils/batch/BarchServices";
import DatePickerComponent from "../atom/DatePickerComponent";
import InputComponent from "../atom/InputComponent";
import MultipleSelectCheckmarks from "../atom/MultiSelectDropdown";
import SimpleDropdown from "../atom/SimpleDropdown";
import ModalComponent from "../molicules/ModalComponent";

function BatchModal({ setOpenBatch, getTableData }) {
  const [defaultFormData, setDefaultFormData] = useState({
    name: "",
    mentorName: "",
    technologies: "",
    startDate: "",
    startDateString: "",
    endDate: "",
    endDateString: "",
  });

  console.log(defaultFormData.technologies, "defaultFormData.technologies");

  const modalValue = "add";
  const handleSubmit = async () => {
    const payload = {
      batchName: defaultFormData.name,
      mentorName: defaultFormData.mentorName,
      techId: defaultFormData.technologies,
      startDate: defaultFormData.startDateString,
      endDate: defaultFormData.endDateString,
    };
    const { data, errRes } =
      modalValue === "add"
        ? await batchSubmit(payload)
        : await batchSubmit(payload);
    if (data) {
      await getTableData();
    } else if (errRes) {
      console.log(errRes.message);
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div>
      <ModalComponent
        onSubmitBtnClick={handleSubmit}
        modalWidth={"450px"}
        submitBtnText="Create"
        modalTitle={"Add new batch"}
        showPreviousBtn={false}
        onCloseIconClick={() => setOpenBatch(false)}
      >
        <Box className="p-5 overflowY-scroll h-550">
          <p className="mb-0 ">Batch Name</p>
          <div className="mb-4">
            <InputComponent
              value={defaultFormData.name}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  name: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-4">
            <p className="mb-0">Mentor Name</p>
            <SimpleDropdown />
            {/* <InputComponent
              value={defaultFormData.mentorName}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  mentorName: e.target.value,
                });
              }}
            /> */}
          </div>

          <div className="mb-4">
            <p className="mb-0">Technologies</p>
            <MultipleSelectCheckmarks modalWidth="100%" />
            {/* <InputComponent
              value={defaultFormData.technologies}
              onChange={(e) => {
                let array = [];
                array.push(e.target.value);
                setDefaultFormData({
                  ...defaultFormData,
                  technologies: array,
                });
              }}
            /> */}
          </div>
          <div className="mb-4">
            <p className="mb-0">Start Date</p>
            <DatePickerComponent
              style={{ width: "100%" }}
              value={defaultFormData.startDate}
              onChange={(date, dateString) => {
                console.log(date);
                setDefaultFormData({
                  ...defaultFormData,
                  startDate: date,
                  startDateString: dateString,
                });
              }}
            />
          </div>
          <div>
            <p className="mb-0">End Date</p>

            <DatePickerComponent
              value={defaultFormData.endDate}
              onChange={(date, dateString) => {
                console.log(dateString);
                setDefaultFormData({
                  ...defaultFormData,
                  endDate: date,
                  endDateString: dateString,
                });
              }}
              style={{ width: "100%" }}
            />
          </div>
        </Box>
      </ModalComponent>
    </div>
  );
}

export default BatchModal;
