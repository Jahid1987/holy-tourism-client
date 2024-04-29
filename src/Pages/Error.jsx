import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid place-content-center mt-20 text-center space-y-3">
      <h1 className="text-5xl">404</h1>
      <h1 className="text-3xl">Sorry! Page is Not Found</h1>
      <Link className="btn btn-link" to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
