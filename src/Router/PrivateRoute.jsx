import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();

  if (loader) {
    return;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

export default PrivateRoute;
