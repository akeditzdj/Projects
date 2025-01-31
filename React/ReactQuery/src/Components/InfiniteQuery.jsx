import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchItems = ({ pageParam }) => {
  return axios.get(`http://localhost:3001/items/?_limit=10&_page=${pageParam}`);
};

const InfiniteQuery = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["items"],
      queryFn: fetchItems,
      initialPageParam: 1,
      getNextPageParam: (lastPage, loadedPages) => {
        if (loadedPages.length < 10) {
          return loadedPages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  if (isLoading) {
    return <p>Please wait while data is loading...</p>;
  }

  if (isError) {
    return <p>Error in fetching data {error.message}</p>;
  }

  return (
    <>
      <div className="fruit-container">
        <ul>
          {data?.pages?.map((page) =>
            page?.data.map((item) => (
              <li key={item.id}>
                {item.id}. {item.name}
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="btn-fruit">
        <button onClick={fetchNextPage} disabled={!hasNextPage ? true : false}>
          Load More
        </button>
      </div>
    </>
  );
};

export default InfiniteQuery;
