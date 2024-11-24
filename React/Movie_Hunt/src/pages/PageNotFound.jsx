import NotFound from "/page-not-found.png";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
  return (
    <div className="container">
      <img className="img-fluid" src={NotFound} />
      <p className="text-center mt-2">
        <Link to="/" className="btn btn-danger">
          Go to Home
        </Link>
      </p>
    </div>
  );
};
