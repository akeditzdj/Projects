import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ReactQueryFetchDetail = () => {
  const fetchPostDetails = (id) => {
    return axios.get(`http://localhost:3001/posts/${id}`);
  };

  const { id } = useParams();
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPostDetails(id),
  });

  if (isLoading) {
    return <p>Please wait while data is loading...</p>;
  }

  if (isError) {
    return <p>Error in fetching data {error.message}</p>;
  }

  const { id: postId, title, body } = data?.data || {};

  return (
    <div>
      <h3>
        {postId}. {title}
      </h3>
      <p>{body}</p>
    </div>
  );
};


export default ReactQueryFetchDetail;
