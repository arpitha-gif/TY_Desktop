import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutComponent from "./component/organism/LayoutComponent";
import "./style/dateComponent.scss";
import "./style/color.scss";
import Login from "./component/pages/login/Login";
import TextAreaComponent from "./component/atom/TextAreaComponent";
import ProtectedRoute from "./component/organism/ProtectedRoute";
import EmployeeLayout from "./component/pages/employee/EmployeeLayout";

function App() {
  return (
    <div>
      {/* <div className="w-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/*" />
            </Route>
          </Routes>

          {/* <LayoutComponent /> 
       <DetailsModal /> 
       </BrowserRouter>
      </div>  

      {/* <div className="m-5" style={{ width: "30%" }}> */}
      {/* <BrowserRouter>
        <EmployeeLayout />
      </BrowserRouter> */}
      {/* </div> */}
      <BrowserRouter>
        <LayoutComponent />
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
