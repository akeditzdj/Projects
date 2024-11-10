import { useRouteError } from "react-router-dom";
import UserNotFound from "/images/user_not_found.webp";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="container error-container">
      <img className="img-fluid" src={UserNotFound} />
      <h3>Oops! an error accured</h3>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
