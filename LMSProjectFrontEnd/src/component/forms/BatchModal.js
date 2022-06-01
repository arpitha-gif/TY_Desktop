import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { batchSubmit } from "../../services/utils/batch/BarchServices";
import { categoryGet, technologirsGet } from "../../services/utils/commonApi";
import DatePickerComponent from "../atom/DatePickerComponent";
import InputComponent from "../atom/InputComponent";
import MultipleSelectCheckmarks from "../atom/MultiSelectDropdown";
import SimpleDropdown from "../atom/SimpleDropdown";
import ModalComponent from "../molicules/ModalComponent";
// import TechnicalSkills from "../pages/employee/technicalSkills/TechnicalSkills";

function BatchModal({
  setOpenBatch,
  getTableData,
  setDefaultFormData,
  defaultFormData,
}) {
  const [error, setError] = useState({
    name: false,
    mentorName: false,
    technologies: false,
    startDate: false,
    startDateString: false,
    endDate: false,
    endDateString: false,
  });

  useEffect(() => {
    getOptions();
    console.log("first", options);
  }, []);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    getOptions();
    console.log("first", options);
  }, []);

  const getOptions = async () => {
    const { data, errRes } = await categoryGet();
    console.log(data.data, "data");
    if (data.data) {
      const tempOption = [];
      data.data.map((item, index) => {
        tempOption.push({
          value: item.sName,
          id: item.index,
        });
      });

      setOptions(tempOption);
    }
  };

  const modalValue = "add";
  
  const handleSubmit = async () => {
    const payload = {
      batchName: defaultFormData.name,
      mentorName: defaultFormData.mentorName,
      technologies: defaultFormData.technologies,
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
            <MultipleSelectCheckmarks
              value={defaultFormData.skills}
              onChange={(e, val) => {
                const tempId = [];
                const tempSkill = [];
                val.map((item) => {
                  // tempId.push(item.sName.toString());
                  tempSkill.push(item.value);
                });
                setDefaultFormData({
                  ...defaultFormData,
                  skills: tempSkill,
                  skillsId: tempId,
                });
              }}
              options={options}
              modalWidth="100%"
            />
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
