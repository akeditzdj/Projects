import { NavLink } from "react-router-dom";
import Logo from "../assets/images/swiggy-logo.svg";
const Navbar = () => {
  return (
    <div className="navbar top-0 sticky-top">
      <div className="nav-items">
        <div>
          <a href="#">
            <img src={Logo} alt="Swiggy Logo" />
          </a>
        </div>
        <div>
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/products">
              <li>Products</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
