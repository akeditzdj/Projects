import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <h1 className="text-center mt-2">List of Users</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus quia.
      </p>

      <Outlet />
    </div>
  );
};

export default UserLayout;
