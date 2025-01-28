import { useState, useEffect } from "react";
import axios from "axios";

const RegularFetch = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState([]);
  const [isError, setIsError] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      console.log(response.data);
    } catch (error) {
      setIsError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return <div className="container">RegularFetch</div>;
};

export default RegularFetch;
