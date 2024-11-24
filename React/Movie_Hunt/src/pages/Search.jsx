import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { UseFetch } from "../hooks/UseFetch";

export const Search = ({ apipath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = UseFetch(apipath, queryTerm);

  useEffect(() => {
    document.title = `Serach result for ${queryTerm}`;
  });
  return (
    <main className="container">
      <h5 className="text-danger my-5 border-bottom">
        {movies.length == 0
          ? `No result found for ${queryTerm}`
          : `Result for ${queryTerm}`}
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </main>
  );
};
