import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SimpleDropdown from "../../../atom/SimpleDropdown";
import InputComponent from "../../../atom/InputComponent";
import { IconButton, Paper } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

function EducationDetails() {
  const [defaultFormData, setDefaultFormData] = React.useState([
    {
      educationType: "",
      yop: "",
      percentage: "",
      univName: "",
      InstituteName: "",
      Specilization: "",
    },
  ]);
  const handleAddClick = () => {
    setDefaultFormData([
      ...defaultFormData,
      {
        educationType: "",
        yop: "",
        percentage: "",
        univName: "",
        InstituteName: "",
        Specilization: "",
      },
    ]);
  };
  const handleChange = (name, i, e) => {
    let tempFromData = [...defaultFormData];
    tempFromData[i].name = e.target.value;
    setDefaultFormData(tempFromData);
  };
  const handleDeleteClick = (i) => {
    const tempFormData = [...defaultFormData];
    tempFormData.splice(i, 1);
    setDefaultFormData(tempFormData);
  };
  return (
    <div className="m-5">
      {defaultFormData.map((item, i, row) => (
        <Accordion expanded={row.length === i + 1 ? true : false}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                color: "#086288",
                fontWeight: "600",
                fontFamily: "Open Sans, Semibold",
                fontSize: "32px",
              }}
            >
              Education type
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="p-1 m-2 ">
              <div className="m-3 row d-felx justify-contect-center">
                <div className="col-5">
                  <p className="mb-0">Education Type</p>
                  <InputComponent
                    value={defaultFormData.educationType}
                    onChange={(e) => {
                      handleChange("educationType", i, e);
                    }}
                  />
                </div>
                <div className="col-5">
                  <p className="mb-0">Year of Passing</p>
                  <InputComponent
                    value={defaultFormData.yop}
                    onChange={(e) => {
                      handleChange("educationType", i, e);
                    }}
                  />
                </div>
              </div>
              <div className="m-3 row d-felx justify-contect-center">
                <div className="col-5">
                  <p className="mb-0">Percentage (%)</p>
                  <InputComponent
                    value={defaultFormData.percentage}
                    onChange={(e) => {
                      handleChange("yop", i, e);
                    }}
                  />
                </div>
                <div className="col-5">
                  <p className="mb-0">University Name</p>
                  <SimpleDropdown
                    value={defaultFormData.univName}
                    onChange={(e) => {
                      handleChange("percentage", i, e);
                    }}
                  />
                </div>
              </div>
              <div className="m-3 row d-felx justify-contect-center">
                <div className="col-5">
                  <p className="mb-0">Institute Name</p>
                  <InputComponent
                    value={defaultFormData.InstituteName}
                    onChange={(e) => {
                      handleChange("univName", i, e);
                    }}
                  />
                </div>
                <div className="col-5">
                  <p className="mb-0">Specialization</p>
                  <SimpleDropdown />
                </div>
              </div>
              <div className="w-100 d-flex justify-content-end">
                {row.length === i + 1 ? (
                  <div>
                    <IconButton size="small" onClick={handleAddClick}>
                      <AddCircleOutlineIcon color="primary" />{" "}
                      <spam style={{ color: "blue" }}>Add</spam>
                    </IconButton>
                  </div>
                ) : (
                  <div>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteClick(i)}
                    >
                      <DeleteIcon color="primary" />{" "}
                      <spam style={{ color: "blue" }}>Delete</spam>
                    </IconButton>
                  </div>
                )}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default EducationDetails;
