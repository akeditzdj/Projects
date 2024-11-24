import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { UseFetch } from "../hooks/UseFetch";
export const MovieList = ({ title, apipath }) => {
  const { data: movies } = UseFetch(apipath);
  useEffect(() => {
    document.title = title;
  });

  const navigator = useNavigate();

  return (
    <div>
      <main className="container">
        {title == "Your Guide to Grate Movies" ? (
          <div className="bg-body-tertiary p-5 border my-3">
            <h3 className="text-primary">Welcome to MovieHunt</h3>
            <p className="lead">
              Discover movies you&apos;ll love with personalized suggestions,
              curated collections, and quick searches - your guide to finding
              greate films
            </p>
            <button
              onClick={() => {
                navigator("/movies/upcoming");
              }}
              className="btn btn-primary"
            >
              Explore Now
            </button>
          </div>
        ) : (
          ""
        )}
        <h5 className="text-danger pt-4 py-2 border-bottom">{title}</h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </main>
    </div>
  );
};
