import PropTypes from "prop-types";
const Navbar = ({ cartItems }) => {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-danger py-3 sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h3 className="text-white">AK Editz</h3>
          </a>

          <button
            className=" d-lg-none btn  btn-outline-light"
            data-bs-target="#offcanvasRightMenu"
            data-bs-toggle="offcanvas"
          >
            <i className="bi bi-list text-white"></i>
          </button>

          <ul className="navbar-nav d-lg-flex d-none">
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
              <span>{cartItems.length}</span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
