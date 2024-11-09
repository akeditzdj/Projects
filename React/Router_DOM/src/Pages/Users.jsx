import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="container">
      <div className="users mt-5 gap-3">
        {users.map((user) => {
          return (
            <div className="row ">
              <div className="col">
                <Link to={user.id.toString()} key={user.id}>
                  <div className="user bg-secondary-subtle p-2 text-center">
                    <h5>{user.name}</h5>
                    <p>{user.email}</p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
