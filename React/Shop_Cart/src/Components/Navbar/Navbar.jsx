const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-danger py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h3 className="text-white">AK Editz</h3>
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Services
              </a>
            </li>
            <li className="nav-item icon">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-cart-check-fill"></i>
                <span>0</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
