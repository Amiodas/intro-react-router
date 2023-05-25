import React from "react";
import Post from "../../Post/Post";
import { useLoaderData } from "react-router-dom";
import "./Posts.css";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h3>My posts</h3>
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
