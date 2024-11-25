export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid px-5 d-flex justify-content-between align-items-start h-100">
        <div>
          <a className="fs-2" href="#">
            <h1 className="text-light logo">Pixabay</h1>
          </a>
        </div>
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
      <div className="d-flex flex-column justify-content-center align-items-center header-content gap-3">
        <h1 className="fw-bold text-light">
          Stunning royalty-free images & royalty-free stock
        </h1>
        <div className="d-flex gap-3 ">
          <button className="btn btn-grp text-light fw-semibold rounded rounded-5">
            Explore
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded rounded-5">
            Photos
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded rounded-5">
            Illustrators
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded rounded-5">
            Vectors
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded rounded-5">
            Video
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded rounded-5">
            Music
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded rounded-5">
            Sound Effects
          </button>
          <button className="btn btn-grp text-light fw-semibold rounded rounded-5">
            GIFs
          </button>
        </div>
        <div className="bg-light rounded rounded-5 w-100 py-2 px-3">
          <div className="d-flex align-items-center">
            <i className="bi bi-search fs-4"></i>
            <input
              className="form-control form-control-lg border-0 bg-transparent rounded rounded-5"
              type="text"
              placeholder="Search for free Images, Videos, Music & more"
            />
          </div>
        </div>
        <div className="d-flex gap-1 tags">
          <button className="btn btn-secondary text-light fw-semibold rounded rounded-3">
            woman
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded rounded-3">
            wallpaper
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded rounded-3">
            flowers
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded rounded-3">
            autumn
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded rounded-3">
            travel
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded rounded-3">
            maountain
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded rounded-3">
            sea
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded rounded-3">
            house
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded rounded-3">
            iphone wallpaper
          </button>
          <button className="btn btn-secondary text-light fw-semibold rounded rounded-3">
            tree
          </button>
        </div>
      </div>
    </nav>
  );
};
