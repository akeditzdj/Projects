const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <a href="#">LOGO</a>
        hi
      </div>
      <div>
        <ul>
          <NavLink>
            <li>Home</li>
          </NavLink>
          <NavLink>
            <li>Products</li>
          </NavLink>
          <NavLink>
            <li>About</li>
          </NavLink>
          <NavLink>
            <li>Contact</li>
          </NavLink>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
