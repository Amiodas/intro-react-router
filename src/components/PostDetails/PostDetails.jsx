import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
  const navigate = useNavigate();
  const postDetails = useLoaderData();
  const { id, userId, title, body } = postDetails;
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <h3>Post Details of {id}</h3>
      <div className="post-details">
        <h4>{title.toUpperCase()}</h4>
        <p>{userId}</p>
        <small>{body}</small>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default PostDetails;
