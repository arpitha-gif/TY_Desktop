import { useRoutes } from "react-router-dom";
import MentorBatch from "../pages/mentorMentor/MentorBatch";
import MentorDashboard from "../pages/mentorMentor/MentorDashboard";

const MentorRoute = () => {
  const routesObj = [
    {
      element: <MentorBatch />,
      path: "/mentorBatch",
    },
    {
      element: <MentorDashboard />,
      path: "/mentorDashboard",
    },
  ];
  const routes = useRoutes([...routesObj]);
  return routes;
};

export default MentorRoute;
