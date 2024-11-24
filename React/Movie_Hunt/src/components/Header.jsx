import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigator = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigator(`/search?q=${queryTerm}`);
  };
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <i className="bi bi-film"></i> MovieHunt
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/top">
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/popular">
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/upcoming">
                Upcoming
              </NavLink>
            </li>
          </ul>
          <form onSubmit={handleSearch}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
