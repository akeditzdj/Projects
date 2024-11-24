import { useState, useEffect } from "react";

export const UseFetch = (apipath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setData(jsonData.results));
    }
    fetchMovies();
  }, [url]);
  return { data };
};
