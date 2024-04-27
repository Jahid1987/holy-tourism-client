import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
