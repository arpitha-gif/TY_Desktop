import { Navigate } from "react-router-dom";
import LayoutComponent from "./LayoutComponent";
import atob from "atob";
import MentorLayoutComponent from "./MentorLayoutComponent";
import EmployeeLayout from "../pages/employee/EmployeeLayout";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("token");
  // let role = atob(user.split(".")[1]);
  // let rl = [];
  // rl.push(role);

  const role = localStorage.getItem("role");
  // decreption should be done
  // console.log(rl, "syduisyd");
  // console.log(rl[0]);

  if (!user) {
    return <Navigate to="/" replace />;
  } else if (role === "admin") {
    return <LayoutComponent />;
  } else if (role === "mentor") {
    return <MentorLayoutComponent />;
  } else if (role === "employee") {
    return <EmployeeLayout />;
  } else {
    return <p>page not found</p>;
  }
};

export default ProtectedRoute;
