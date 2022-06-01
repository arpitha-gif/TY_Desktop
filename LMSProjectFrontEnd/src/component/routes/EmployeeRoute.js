import { useRoutes } from "react-router-dom";
import PrimaryEmployee from "../../component/pages/employee/PrimaryEmployee";
import AddressDetails from "../pages/employee/addressDetails/AddressDetails";
import BankDetails from "../pages/employee/bankDetails/BankDetails";
import Contact from "../pages/employee/contact/Contact";
import EducationDetails from "../pages/employee/educationDetails/EducationDetails";
import Experience from "../pages/employee/experience/Experience";
import SecondaryInfo from "../pages/employee/secondaryInfo/SecondaryInfo";
import TechnicalSkills from "../pages/employee/technicalSkills/TechnicalSkills";

const EmployeeRoute = ({ empPayload, setEmpPayload, handleNextClick }) => {
  const routesObj = [
    {
      element: (
        <PrimaryEmployee
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
        />
      ),
      path: "/primaryInfo",
    },
    {
      element: (
        <SecondaryInfo
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
        />
      ),
      path: "/secondaryInfo",
    },
    {
      element: (
        <EducationDetails
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
        />
      ),
      path: "/educationDetails",
    },
    {
      element: (
        <AddressDetails
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
        />
      ),
      path: "/addressDetails",
    },
    {
      element: (
        <BankDetails
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
        />
      ),
      path: "/bankDetails",
    },
    {
      element: (
        <TechnicalSkills
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
        />
      ),
      path: "/technicalSkills",
    },
    {
      element: (
        <Experience
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
        />
      ),
      path: "/experience",
    },
    {
      element: (
        <Contact
          empPayload={empPayload}
          setEmpPayload={setEmpPayload}
          handleNextClick={handleNextClick}
        />
      ),
      path: "/contact",
    },
  ];
  const routes = useRoutes([...routesObj]);
  return routes;
};

export default EmployeeRoute;
