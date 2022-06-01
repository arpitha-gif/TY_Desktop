import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutComponent from "./component/organism/LayoutComponent";
import "./style/dateComponent.scss";
import "./style/color.scss";
// import Login from "./component/pages/login/Login";
import TextAreaComponent from "./component/atom/TextAreaComponent";
import ProtectedRoute from "./component/organism/ProtectedRoute";
import EmployeeLayout from "./component/pages/employee/EmployeeLayout";
import EducationDetails from "./component/pages/employee/educationDetails/EducationDetails";
import AdminMentor from "./component/pages/mentor/Mentor";
import XlDownloadComponent from "./component/atom/XlDownloadComponent";
import EmployeeLayoutComponent from "./component/organism/EmployeeLayoutComponent";
import Login from "./Login";

function App() {
  return (
    <div>
      <div className="w-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/*" />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>{" "}
      {/* <LayoutComponent /> */}
      {/* <DetailsModal /> */}
      {/* </BrowserRouter>
      </div>  

      {/* <div className="m-5" style={{ width: "30%" }}> */}
      {/* </div> */}
      {/* <BrowserRouter> */}
      {/* <LayoutComponent /> */}
      {/* <EmployeeLayout /> */}
      {/* <EmployeeLayoutComponent /> */}
      {/* </BrowserRouter> */}
      {/* <BrowserRouter>
        <Login />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
