import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const navigate = useNavigate();
  const { id, title, body } = post;
  const handleNavigation = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="post">
      <h4>{title}</h4>
      <small>{body}</small>
      <Link to={`/posts/${id}`}>
        <button>Details</button>
      </Link>
      {/* Other way to navigate route */}
      <button onClick={handleNavigation}>Navigate</button>
    </div>
  );
};

export default Post;
