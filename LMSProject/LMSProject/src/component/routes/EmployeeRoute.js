import { useRoutes } from "react-router-dom";
import PrimaryEmployee from "../../component/pages/employee/PrimaryEmployee";
import AddressDetails from "../pages/employee/addressDetails/AddressDetails";
import BankDetails from "../pages/employee/bankDetails/BankDetails";
import Contact from "../pages/employee/contact/Contact";
import EducationDetails from "../pages/employee/educationDetails/EducationDetails";
import Experience from "../pages/employee/experience/Experience";
import SecondaryInfo from "../pages/employee/secondaryInfo/SecondaryInfo";
import TechnicalSkills from "../pages/employee/technicalSkills/TechnicalSkills";

const EmployeeRoute = () => {
  const routesObj = [
    {
      element: <PrimaryEmployee />,
      path: "/primaryInfo",
    },
    {
      element: <SecondaryInfo />,
      path: "/secondaryInfo",
    },
    {
      element: <EducationDetails />,
      path: "/educationDetails",
    },
    {
      element: <AddressDetails />,
      path: "/addressDetails",
    },
    {
      element: <BankDetails />,
      path: "/bankDetails",
    },
    {
      element: <TechnicalSkills />,
      path: "/technicalSkills",
    },
    {
      element: <Experience />,
      path: "/experience",
    },
    {
      element: <Contact />,
      path: "/contact",
    },
  ];
  const routes = useRoutes([...routesObj]);
  return routes;
};

export default EmployeeRoute;
