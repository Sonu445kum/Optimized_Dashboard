import React from "react";
import { useGetTodosQuery } from "../api/apiSlice";
import "../styles/dashboard.css"; // basic styling

const TodosList = React.memo(() => {
  const { data: todos, isLoading, error } = useGetTodosQuery();

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Error loading todos.</p>;

  // show first 20 for readability
  return (
    <ul className="todos-list">
      {todos.slice(0, 20).map(t => (
        <li key={t.id} className={`todo-item ${t.completed ? "completed" : ""}`}>
          <span className="todo-title">{t.title}</span>
          <span className="todo-status">{t.completed ? "✅" : "❌"}</span>
        </li>
      ))}
    </ul>
  );
});

export default TodosList;
