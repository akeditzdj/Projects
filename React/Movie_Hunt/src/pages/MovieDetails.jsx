import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DummyImg from "/image-placeholder.png";
import { convertMinutes } from "../utils/utils";
export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : DummyImg;
  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setMovie(jsonData));
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    document.title = `${movie.title}`;
  });

  return (
    <main className="container">
      <h3 className="mt-5 border-bottom text-danger py-2">
        Movie Details for <span className="fw-bold">"{movie.title}"</span>
      </h3>
      <div className="row mt-5">
        <div className="col-md-4">
          <img src={image} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary mt-3 mt-md-0 fw-bold">{movie.title}</h3>
          <p className="mt-3">{movie.overview}</p>
          {movie.genres ? (
            <p className="d-flex justify-content-center justify-content-md-start align-items-center gap-3 mt-4">
              {movie.genres.map((genre) => (
                <p className="badge bg-danger" key={genre.id}>
                  {genre.name}
                </p>
              ))}
            </p>
          ) : (
            ""
          )}
          <p className="d-flex align-items-center gap-2">
            <i className="bi bi-star-fill text-warning"></i>{" "}
            {movie.vote_average} rating |
            <i className="bi bi-people-fill text-success"></i>{" "}
            {movie.vote_count} reviews
          </p>
          <table className="table table-bordered mt-5">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{convertMinutes(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
            </tbody>
          </table>
          <a
            className="btn btn-warning"
            target="_blank"
            href={`https://www.imdb.com/title/${movie.imdb_id}`}
          >
            View in IMDB
          </a>
        </div>
      </div>
    </main>
  );
};
