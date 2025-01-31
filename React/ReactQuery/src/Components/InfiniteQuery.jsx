import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const fetchItems = ({ pageParam }) => {
  return axios.get(`http://localhost:3001/items/?_limit=10&_page=${pageParam}`);
};

const InfiniteQuery = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
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
    return;
    <>
      <ClipLoader color="#0000" size={100} />
      <p>Please wait while data is loading...</p>;
    </>;
  }

  if (isError) {
    return <p>Error in fetching data {error.message}</p>;
  }

  return (
    <>
      <div className="container">
        <h3>React Infinite Query</h3>
        <ul>
          {data?.pages?.map((page) =>
            page?.data.map((item) => (
              <li key={item.id}>
                {item.id}. {item.name}
              </li>
            ))
          )}
        </ul>

        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-secondary btn-sm"
            onClick={fetchNextPage}
            disabled={!hasNextPage ? true : false}
          ></button>
        </div>
      </div>
    </>
  );
};

export default InfiniteQuery;
