// Dashboard.jsx — shell with sidebar + nested routing
import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import TodosPage from "../pages/TodosPage";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2 className="dashboard-title">Dashboard</h2>
        <nav className="dashboard-nav">
          {/* Use absolute paths to prevent nested duplication */}
          <Link className="nav-link" to="/dashboard/users">Users</Link>
          <Link className="nav-link" to="/dashboard/posts">Posts</Link>
          <Link className="nav-link" to="/dashboard/todos">Todos</Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <Routes>
          {/* Default route for /dashboard */}
          <Route index element={<Navigate to="users" replace />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="todos" element={<TodosPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default React.memo(Dashboard);
