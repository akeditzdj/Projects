import { Link } from "react-router-dom";
import ErrorImg from "/images/404-error-picture.png";
const NotFound = () => {
  return (
    <div className="container error-container text-center">
      <div className="error-content mt-5">
        <div className="error-img">
          <img className="img-fluid w-50" src={ErrorImg} alt="" />
        </div>
        <h2>404 Error | Page Not Found</h2>
        <h5 className="fw-semibold mt-4">
          <Link to="/">Go to Home Page</Link>
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
