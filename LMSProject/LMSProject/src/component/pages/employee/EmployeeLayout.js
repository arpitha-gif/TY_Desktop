import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RouterComponent from "../../routes/RouterComponent";
import { useNavigate } from "react-router-dom";
import EmployeeRoute from "../../routes/EmployeeRoute";

const steps = [
  { name: "Primary Info", to: "/primaryInfo" },
  { name: "Secondary Info", to: "/secondaryInfo" },
  { name: "Education Details", to: "/educationDetails" },
  { name: "Address Details", to: "/addressDetails" },
  { name: "Bank Details", to: "/bankDetails" },
  { name: "Techniocal Skills", to: "/technicalSkills" },
  { name: "Experience", to: "/experience" },
  { name: "Contact", to: "/contact" },
];

function EmployeeLayout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const history = useNavigate();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    let path = "";
    steps.map((item, index) => {
      if (index === newActiveStep) {
        path = item.to;
      }
    });
    history(path);
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    let newActiveStep = activeStep - 1;
    let path = "";
    steps.map((item, index) => {
      if (index === newActiveStep) {
        path = item.to;
      }
    });
    history(path);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step, path) => () => {
    history(path);
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <div className="m-5">
      {" "}
      <Box sx={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label.name} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index, label.to)}>
                {label.name}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography> */}
              <Box>
                <EmployeeRoute />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </div>
  );
}

export default EmployeeLayout;
