

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-danger w-100 py-3">
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

            <button
              type="button"
              className="btn btn-trasparent"
              data-bs-target="#offcanvasRight"
              data-bs-toggle="offcanvas"
            >
              <i className="bi text-white bi-cart-check-fill"></i>
              <span>0</span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
