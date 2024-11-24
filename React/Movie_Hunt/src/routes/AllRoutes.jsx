import { Route, Routes } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";
// import { MovieDetails } from "../pages/MovieDetails";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              title="Your Guide to Grate Movies"
              apipath="movie/now_playing"
            />
          }
        />
        <Route
          path="movies/popular"
          element={
            <MovieList title="Poppular Movies" apipath="movie/popular" />
          }
        />
        <Route
          path="movies/top"
          element={
            <MovieList title="Top Rated Movies" apipath="movie/top_rated" />
          }
        />
        <Route
          path="movies/upcoming"
          element={
            <MovieList title="Upcoming Movies" apipath="movie/upcoming" />
          }
        />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="search" element={<Search apipath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} title="Page Not Found" />
      </Routes>
    </>
  );
};

export default AllRoutes;
