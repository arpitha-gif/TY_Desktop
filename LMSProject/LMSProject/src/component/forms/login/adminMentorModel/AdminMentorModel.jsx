import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import InputComponent from "../../../atom/InputComponent";
import ModalComponent from "../../../molicules/ModalComponent";
import MultiSelectDropdown from "../../../atom/MultiSelectDropdown";
import { adminMentorSubmit } from "../../../../services/utils/admin-mentor/AdminMentorServices";
import { categoryGet } from "../../../../services/utils/commonApi";

function AdminMentorModel({ setOpenMentor, getTableData }) {
  const [defaultFormData, setDefaultFormData] = useState({
    mentorName: "",
    employeeId: "",
    email: "",
    skills: [],
    skillsId: [],
  });

  const [options, setOptions] = useState([]);

  useEffect(() => {
    getOptions();
  }, []);

  const getOptions = async () => {
    const { data, errRes } = await categoryGet();
    if (data.data) {
      const tempOption = [];
      data.data.map((item) => {
        tempOption.push({
          value: item.tech,
          id: item.id,
        });
      });
      setOptions(tempOption);
    }
  };

  const modalValue = "add";
  const handleSubmit = async () => {
    const payload = {
      name: defaultFormData.mentorName,
      empId: defaultFormData.employeeId,
      emailId: defaultFormData.email,
      techId: defaultFormData.skillsId,
    };
    const { data, errRes } =
      modalValue === "add"
        ? await adminMentorSubmit(payload)
        : await adminMentorSubmit(payload);

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
        submitBtnText="Create"
        modalWidth={"450px"}
        modalTitle={"Add new mentor"}
        showPreviousBtn={false}
        onCloseIconClick={() => setOpenMentor(false)}
      >
        <Box className="p-5 pt-4 overflowY-scroll h-550">
          <p className="mb-0 txt-gray">Mentor Name</p>
          <div className="mb-4">
            <InputComponent
              value={defaultFormData.mentorName}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  mentorName: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-4">
            <p className="mb-0 txt-gray">Employee ID </p>
            {/* <SimpleDropdown /> */}
            <InputComponent
              value={defaultFormData.employeeId}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  employeeId: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-4">
            <p className="mb-0 txt-gray">E-mail ID </p>
            {/* <SimpleDropdown /> */}
            <InputComponent
              value={defaultFormData.email}
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  email: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-0">
            <p className="mb-0 txt-gray">Skills</p>
            <MultiSelectDropdown
              modalWidth="100%"
              options={options}
              value={defaultFormData.skills}
              onChange={(e, val) => {
                const tempId = [];
                const tempSkill = [];
                val.map((item) => {
                  tempId.push(item.title.toString());
                  tempSkill.push(item.value);
                });
                setDefaultFormData({
                  ...defaultFormData,
                  skills: tempSkill,
                  skillsId: tempId,
                });
              }}
            />
          </div>
        </Box>
      </ModalComponent>
    </div>
  );
}

export default AdminMentorModel;
