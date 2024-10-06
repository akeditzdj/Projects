const Myoffcanvasmenu = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      id="offcanvasRightMenu"
      aria-labelledby="offcanvasRightLabelMenu"
    >
      <div className="offcanvas-header bg-danger border-bottom border-white">
        <h5 className="text-white">AK Editz</h5>
        <button
          type="button"
          className="btn-close btn-close-white text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white fs-5" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fs-5" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fs-5" href="#">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fs-5" href="#">
              Services
            </a>
          </li>

          <button
            type="button"
            className="btn btn-lg btn-light mt-3"
            data-bs-target="#offcanvasRight"
            data-bs-toggle="offcanvas"
          >
            Go to Cart Items <i className="bi bi-cart-check-fill"></i>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Myoffcanvasmenu;
