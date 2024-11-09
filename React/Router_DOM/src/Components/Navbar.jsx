import { NavLink, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar navbar-expand-lg bg-body-secondary p-4">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-2" href="#">
          LOGO
        </a>

        <div className="d-flex gap-2">
          <ul className="navbar-nav">
            <NavLink to="/">
              <li className="nav-link">Home</li>
            </NavLink>
            <NavLink to="/products">
              <li className="nav-link">Products</li>
            </NavLink>
            <NavLink to="/about">
              <li className="nav-link">About</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="nav-link">Contact</li>
            </NavLink>
          </ul>

          <button onClick={navigate(login)} className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
