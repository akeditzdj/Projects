import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegularFetch = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      setPosts(response.data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <p>Please wait while data is loading...</p>;
  }
  if (isError) {
    return <p>Error in fetching data</p>;
  }

  return (
    <div className="container">
      <h3>Regular Post</h3>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id} className="post">
            <Link>
              {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegularFetch;
