import { useRoutes } from "react-router-dom";
import PrimaryEmployee from "../../component/pages/employee/PrimaryEmployee";
import AddressDetails from "../pages/employee/addressDetails/AddressDetails";
import BankDetails from "../pages/employee/bankDetails/BankDetails";
import Contact from "../pages/employee/contact/Contact";
import EducationDetails from "../pages/employee/educationDetails/EducationDetails";
import Experience from "../pages/employee/experience/Experience";
import SecondaryInfo from "../pages/employee/secondaryInfo/SecondaryInfo";
import TechnicalSkills from "../pages/employee/technicalSkills/TechnicalSkills";

const EmployeeRoute = ({ empPayload, setEmpPayload }) => {
  const routesObj = [
    {
      element: <PrimaryEmployee empPayload={empPayload} />,
      path: "/primaryInfo",
    },
    {
      element: <SecondaryInfo empPayload={empPayload} />,
      path: "/secondaryInfo",
    },
    {
      element: <EducationDetails empPayload={empPayload} />,
      path: "/educationDetails",
    },
    {
      element: <AddressDetails empPayload={empPayload} />,
      path: "/addressDetails",
    },
    {
      element: <BankDetails empPayload={empPayload} />,
      path: "/bankDetails",
    },
    {
      element: <TechnicalSkills empPayload={empPayload} />,
      path: "/technicalSkills",
    },
    {
      element: <Experience empPayload={empPayload} />,
      path: "/experience",
    },
    {
      element: <Contact empPayload={empPayload} />,
      path: "/contact",
    },
  ];
  const routes = useRoutes([...routesObj]);
  return routes;
};

export default EmployeeRoute;
