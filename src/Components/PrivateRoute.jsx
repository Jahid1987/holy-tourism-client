import { Navigate } from "react-router-dom/dist";
import useAuth from "../CustomHooks/useAuth";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
