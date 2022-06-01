import { useRoutes } from "react-router-dom";
import loginRoutesObj from "../constants/loginRouts";
import routesObj from "../constants/routesObject";

const LoginRoute = () => {
  const loginRoutes = useRoutes([...loginRoutesObj]);
  return loginRoutes;
};
export default RouterComponent;
export { LoginRoute };



