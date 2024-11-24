import { Route, Routes } from "react-router-dom";
import { MovieList } from "../pages";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MovieList title="Your Guide to Grate Movies" />}
        />
        <Route
          path="movies/popular"
          element={<MovieList title="Poppular Movies" />}
        />
        <Route
          path="movies/top"
          element={<MovieList title="Top Rated Movies" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList title="Upcoming Movies" />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
