import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar top-0 sticky-top">
      <div className="nav-items">
        <div>
          <a href="#">
            <h1>LOGO</h1>
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
            <button>Login</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
