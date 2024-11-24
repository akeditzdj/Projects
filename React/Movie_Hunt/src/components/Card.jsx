import DummyImg from "/image-placeholder.png";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const { id, overview, vote_count, vote_average, poster_path, title } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : DummyImg;
  return (
    <div className="col">
      <div className="card shadow" title={title}>
        <img className="img-fluid card-img-top" src={image} />
        <div className="card-body">
          <h5 className="text-overflow-1 text-primary">{movie.title}</h5>
          <p className="text-overflow-2">{movie.overview}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link
              to={`/movie/${id}`}
              className="btn btn-outline-primary stretched-link"
            >
              Read More
            </Link>
            <small>
              <i className="bi bi-star-fill text-warning"></i>{" "}
              {movie.vote_average} | {movie.vote_count} review
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
