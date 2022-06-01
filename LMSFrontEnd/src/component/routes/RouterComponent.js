import { useRoutes } from "react-router-dom";
import Batch from "../pages/batch/Batch";
import DashBoard from "../pages/dashboard/DashBoard";
import Mentor from "../pages/mentor/Mentor";
import Request from "../pages/request/Request";

const RouterComponent = () => {
  const routesObj = [
    {
      element: <Batch />,
      path: "/batch",
    },
    {
      element: <Mentor />,
      path: "/mentor",
    },
    {
      element: <Request />,
      path: "/request",
    },
    // {
    //   element: <DashBoard />,
    //   path: "/dashboard",
    // },
  ];
  const routes = useRoutes([...routesObj]);
  return routes;
};

export default RouterComponent;
