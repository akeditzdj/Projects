import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid px-5 d-flex justify-content-between align-items-start h-100">
        {/* Logo Section */}
        <div>
          <a className="fs-2" href="#">
            <h1 className="text-light logo">Pixabay</h1>
          </a>
        </div>

        {/* Navbar Items */}
        <div>
          <ul className="navbar-nav d-flex align-items-center gap-3">
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">
                Explore <i className="bi bi-chevron-down"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">
                <i className="bi bi-bell-fill"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-1" href="#">
                <i className="bi bi-circle-fill"></i>
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-success">
                <i className="bi bi-box-arrow-up"></i> Upload
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="d-flex flex-column justify-content-center align-items-center header-content gap-3">
        <h1 className="fw-bold text-light">
          Stunning royalty-free images & royalty-free stock
        </h1>

        {/* Category Buttons */}
        <div className="d-flex gap-3">
          <button className="btn btn-grp text-light fw-semibold rounded-5">
            Explore
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded-5">
            Photos
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded-5">
            Illustrators
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded-5">
            Vectors
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded-5">
            Video
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded-5">
            Music
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded-5">
            Sound Effects
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded-5">
            GIFs
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-light rounded-5 w-100 py-2 px-3">
          <div className="d-flex align-items-center">
            <i className="bi bi-search fs-4"></i>
            <input
              className="form-control form-control-lg border-0 bg-transparent rounded-5"
              type="text"
              placeholder="Search for free Images, Videos, Music & more"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="d-flex gap-1 tags">
          <button className="btn btn-secondary text-light fw-semibold rounded-3">
            Woman
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3">
            Wallpaper
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3">
            Flowers
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3">
            Autumn
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3">
            Travel
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3">
            Mountain
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3">
            Sea
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3">
            House
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3">
            iPhone Wallpaper
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3">
            Tree
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="position-absolute d-flex justify-content-between align-items-end w-100 h-auto bottom-0 px-5">
        <div className="poster-footer d-flex justify-content-between align-items-end w-100">
          <p className="text-light">
            Free images by{" "}
            <a className="text-light text-decoration-underline" href="#">
              suhyung798
            </a>
          </p>
          <p className="text-light">
            Read more about the{" "}
            <a className="text-light text-decoration-underline" href="#">
              Content License
            </a>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
