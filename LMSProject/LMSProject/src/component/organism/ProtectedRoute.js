import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/dashboard" replace />;
  }
  console.log(children);
  return children;
};

export default ProtectedRoute;
