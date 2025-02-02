import React from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {Link} from "react-router-dom"

const API_URL = "http://localhost:3001/posts";

const fetchAllPost = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const addPost = (post) => {
  return axios.post(API_URL, post);
};

const updatePost = async ({ id, ...updatedPost }) => {
  return axios.put(`${API_URL}/${id}`, updatedPost);
};

const deletePost = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

const Mutation = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editPost, setEditPost] = useState(null);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllPost,
  });

  const queryClient = useQueryClient();
  const { mutate: addPostMutation } = useMutation({
    mutationFn: addPost,
    onSuccess(status) {
      console.log(status);
      queryClient.invalidateQueries('["posts"]');
    },
  });

  const { mutate: deletePostMutation } = useMutation({
    mutationFn: deletePost,
    onSuccess(status) {
      console.log(status);
      queryClient.invalidateQueries('["posts"]');
    },
  });
  const { mutate: updatePostMutation } = useMutation({
    mutationFn: updatePost,
    onSuccess(status) {
      console.log(status);
      queryClient.invalidateQueries('["posts"]');
      setEditPost(null);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      if (editPost) {
        // If editing, update the post
        updatePostMutation({ id: editPost.id, title, body });
      } else {
        // If not editing, add a new post
        addPostMutation({ title, body });
      }
      setTitle("");
      setBody("");
    } else {
      alert("Please fill in all details");
    }
  };

  const handleDelete = (id) => {
    deletePostMutation(id);
  };
  const handleUpdate = (post) => {
    setEditPost(post);
    setTitle(post.title);
    setBody(post.body);
  };

  if (isLoading) {
    return <p>Please wait while data is loading...</p>;
  }

  if (isError) {
    return <p>Error in fetching data: {error?.message || "Unknown error"}</p>;
  }

  return (
    <>
      <div className="container">
        <h3>React Mutation</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mt-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title"
          />
          <textarea
            className="form-control mt-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter your message"
          ></textarea>
          <button className="btn btn-success mt-2 w-auto" type="submit">
            {editPost ? "Update Post" : "Add Post"}
          </button>
        </form>
        <ul>
          {data?.map((post, index) => (
            <Link to={`/react-query/${post.id}`} key={post.id}>
              <li key={post.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4>
                      {index + 1}. {post.title}
                    </h4>
                    <p>{post.body}</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center gap-2">
                    <button
                      onClick={() => handleUpdate(post)}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Mutation;
