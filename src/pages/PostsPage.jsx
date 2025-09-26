import React from "react";
import PostsList from "../components/PostsList";
import "../styles/dashboard.css"; // Import CSS for page styling
// Here i m Create the  PostPage Components so that our Posts are visible on the UI Screen
const PostsPage = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Posts</h2>
      {/* Here i m call the PostList Componets because i want to display all our Posts in the PostPage Components */}
      <PostsList />
    </div>
  );
};
// here i export the our PostsPage Components so that other components can easily Access the PostsPage Components with the help of Import
export default PostsPage;
