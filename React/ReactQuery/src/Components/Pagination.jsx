import React from "react";
import axios from "axios";
import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

const fetchItems = (page) => {
  return axios.get(`http://localhost:3001/items/?_limit=10&_page=${page}`);
};

const Pagination = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["items", page],
    queryFn: () => fetchItems(page),
    placehoderData: keepPreviousData,
  });

  if (isLoading) {
    return <p>Please wait while data is loading...</p>;
  }

  if (isError) {
    return <p>Error in fetching data {error.message}</p>;
  }

  return (
    <div className="container">
      <h3>Pagination</h3>
      <ul>
        {data?.data.map((item) => (
          <li key={item.id}>
            {item.id}. {item.name}
          </li>
        ))}
      </ul>
      <div className="btn d-flex justify-content-center align-items-center gap-3">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
          disabled={page == 1 ? true : false}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
          disabled={page == 10 ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
