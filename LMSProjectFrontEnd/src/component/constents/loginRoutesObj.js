import ForgotPassword from "../forms/signIn/ForgotPassword";
import SetPasswordForm from "../forms/signIn/SetPasswordForm";
import SignIn from "../forms/signIn/SignIn";
import Login from "../pages/login/Login";

const loginRoutesObj = [
  {
    element: <Login />,
    path: "/",
  },
  //   {
  //     element: <ForgotPassword />,
  //     path: "/forgot-password",
  //   },
  //   {
  //     element: <SetPasswordForm />,
  //     path: "/set-password",
  //   },
];

export default loginRoutesObj;
