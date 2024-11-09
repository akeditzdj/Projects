import { useLoaderData } from "react-router-dom";
import profile from "/images/man-1.png";
const User = () => {
  const userDetail = useLoaderData();
  return (
    <div className="container">
      <div className="mt-5 single-user d-flex justify-content-between align-items-center">
        <div className="p-3">
          <h5>
            Name: <span>{userDetail.name}</span>
          </h5>
          <h5>
            Email: <span>{userDetail.email}</span>
          </h5>
          <h5>
            Address: <span>{userDetail.address.street}</span>,{" "}
            <span>{userDetail.address.suite}</span>,{" "}
            <span>{userDetail.address.city}</span>,{" "}
            <span>{userDetail.address.zipcode}</span>
          </h5>
          <h5>
            Phone: <span>{userDetail.phone}</span>
          </h5>
          <h5>
            Website: <span>{userDetail.website}</span>
          </h5>
          <h5>
            Company Name: <span>{userDetail.company.name}</span>
          </h5>
        </div>
        <div>
          <img src={profile} className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default User;
