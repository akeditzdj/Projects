import Profile from "/profile-pic.webp";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid px-md-5 d-flex justify-content-between  align-items-start h-100">
        {/* Logo Section */}
        <div>
          <a className="fs-2" href="#">
            <h1 className="text-light logo">Pixabay</h1>
          </a>
        </div>

        <button
          className="navbar-toggler mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse p-2" id="menu">
          <ul className="navbar-nav d-flex align-items-center gap-3 mt-2 ps-5">
            <li className="nav-item">
              <a className="nav-link fs-6" href="#">
                Explore <i className="bi bi-chevron-down"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6" href="#">
                <i className="bi bi-bell-fill"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-2" href="#">
                <div className="profile-img">
                  <img className="img-fluid w-100" src={Profile} />
                </div>
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-light btn-sm" >
                <i className="bi bi-box-arrow-up"></i> Upload
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="d-flex flex-column justify-content-center align-items-center header-content gap-3 w-100">
        <h1 className="fw-bold text-light text-center">
          Stunning royalty-free images & royalty-free stock
        </h1>

        {/* Category Buttons */}
        <div className="d-flex gap-1 flex-wrap justify-content-center align-items-center">
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
        <div className="bg-light hedaer-input rounded-5 py-2 px-3 w-50">
          <div className="d-flex align-items-center">
            <i className="bi bi-search fs-4"></i>
            <input
              className="form-control border-0 bg-transparent rounded-5"
              type="text"
              placeholder="Search for free Images, Videos, Music & more"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="d-flex gap-1 flex-wrap justify-content-center align-items-center mt-md-2">
          <button className="btn btn-secondary text-light fw-semibold rounded-3 btn-sm">
            Woman
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3 btn-sm">
            Wallpaper
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3 btn-sm">
            Flowers
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3 btn-sm">
            Autumn
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3 btn-sm">
            Travel
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3 btn-sm">
            Mountain
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3 btn-sm">
            Sea
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3 btn-sm">
            House
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3 btn-sm">
            iPhone Wallpaper
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded-3 btn-sm">
            Tree
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="position-absolute d-flex justify-content-between align-items-end w-100 h-auto bottom-0 px-5">
        <div className="poster-footer d-md-flex justify-content-between align-items-end w-100 text-center">
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
