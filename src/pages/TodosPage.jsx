import React from "react";
import TodosList from "../components/TodosList";
import "../styles/dashboard.css"; // Import CSS for page styling
// here i m create the TodosPage Componets 
const TodosPage = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Todos</h2>
      {/* Here i m Call the TodosList Componets so that our TodosList are visible in the TodosPage Components */}
      <TodosList />
    </div>
  );
};
// here i m the export TodosPage;
export default TodosPage;
