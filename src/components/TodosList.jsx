// import React from "react";
// import { useGetTodosQuery } from "../api/apiSlice";
// import "../styles/dashboard.css"; // basic styling

// const TodosList = React.memo(() => {
//   const { data: todos, isLoading, error } = useGetTodosQuery();

//   if (isLoading) return <p>Loading todos...</p>;
//   if (error) return <p>Error loading todos.</p>;

//   // show first 20 for readability
//   return (
//     <ul className="todos-list">
//       {todos.slice(0, 20).map(t => (
//         <li key={t.id} className={`todo-item ${t.completed ? "completed" : ""}`}>
//           <span className="todo-title">{t.title}</span>
//           <span className="todo-status">{t.completed ? "✅" : "❌"}</span>
//         </li>
//       ))}
//     </ul>
//   );
// });

// export default TodosList;

// Add the Notmalizations in the TodosList.jsx components;
// import React, { useMemo } from "react";
// import { useGetTodosQuery } from "../api/apiSlice";
// import "../styles/dashboard.css"; // basic styling

// const TodosList = React.memo(() => {
//   // Normalized data from RTK Query
//   const { data: normalizedTodos, isLoading, error } = useGetTodosQuery();

//   // Convert normalized data to array
//   const todosArray = useMemo(() => {
//     if (!normalizedTodos) return [];
//     return normalizedTodos.ids.map((id) => normalizedTodos.entities[id]);
//   }, [normalizedTodos]);

//   if (isLoading) return <p>Loading todos...</p>;
//   if (error) return <p>Error loading todos.</p>;

//   // show first 20 for readability
//   return (
//     <ul className="todos-list">
//       {todosArray.slice(0, 20).map((t) => (
//         <li
//           key={t.id}
//           className={`todo-item ${t.completed ? "completed" : ""}`}
//         >
//           <span className="todo-title">{t.title}</span>
//           <span className="todo-status">{t.completed ? "✅" : "❌"}</span>
//         </li>
//       ))}
//     </ul>
//   );
// });

// export default TodosList;

// Add the SearchFilter functionality and Paginations Logic in the TodosList.jsx Components
import React, { useState, useMemo, useCallback } from "react";
import { useGetTodosQuery } from "../api/apiSlice";
import SearchFilter from "./SearchFilter";
import Pagination from "../components/Paginations";
import "../styles/dashboard.css";

const TodosList = React.memo(() => {
  const { data: normalizedTodos, isLoading, error } = useGetTodosQuery();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10; // number of todos per page

  // Convert normalized data to array
  const todosArray = useMemo(() => {
    if (!normalizedTodos) return [];
    return normalizedTodos.ids.map((id) => normalizedTodos.entities[id]);
  }, [normalizedTodos]);

  // Global search logic
  const filteredTodos = useMemo(() => {
    if (!todosArray) return [];
    const s = search.trim().toLowerCase();
    if (!s) return todosArray;

    return todosArray.filter((todo) =>
      Object.values(todo).some((value) =>
        value.toString().toLowerCase().includes(s)
      )
    );
  }, [todosArray, search]);

  // Pagination logic
  const total = filteredTodos.length;
  const start = (page - 1) * perPage;
  const pageItems = useMemo(
    () => filteredTodos.slice(start, start + perPage),
    [filteredTodos, start]
  );

  // Handlers
  const handleSearch = useCallback((v) => {
    setSearch(v);
    setPage(1); // reset to first page on search
  }, []);

  const handlePage = useCallback((p) => setPage(p), []);

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Error loading todos.</p>;

  return (
    <div className="todos-list-wrapper">
      <SearchFilter value={search} onChange={handleSearch} />
      <ul className="todos-list">
        {pageItems.map((t) => (
          <li
            key={t.id}
            className={`todo-item ${t.completed ? "completed" : ""}`}
          >
            <span className="todo-title">{t.title}</span>
            <span className="todo-status">{t.completed ? "✅" : "❌"}</span>
          </li>
        ))}
      </ul>
      <Pagination total={total} perPage={perPage} current={page} onChange={handlePage} />
    </div>
  );
});

export default TodosList;


