import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";

const fetchPosts = () => {
  return axios.get("http://localhost:3001/posts");
};
export const ReactQueryFetch = () => {
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    // staleTime: 30000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: false,
    enabled: false,
  });

  if (isLoading) {
    return <p>Please wait while data is loading...</p>;
  }

  if (isError) {
    return <p>Error in fetching data {error.message}</p>;
  }

  return (
    <div className="container">
      <h3>React Query Post</h3>
      <button
        onClick={refetch}
        className="btn btn-secondary btn-sm mt-3"
      >
        Fetch Data
      </button>

      <ul className="posts">
        {data?.data.map((post) => (
          <Link to={`/react-query/${post.id}`} key={post.id}>
            <li className="post">
              {post.id}. {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ReactQueryFetch;
