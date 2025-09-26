import React, { useState, useCallback } from "react";
import UsersList from "../components/UsersList";
import SearchFilter from "../components/SearchFilter";
import "../styles/dashboard.css";
// Here i m Create The UserPage Components
const UsersPage = () => {
  // Here i m Create the useState for the Storing the initial Value Of Our State
  const [search, setSearch] = useState("");

  // Stable callback to update search state
  const handleSearch = useCallback((value) => setSearch(value), []);

  return (
    <div className="page-container">
      <h2 className="page-title">Users</h2>
    {/* Here i m Call the SearchFilter Components And Pass the Two Props that is search and handleSearch */}
    {/* Also You  can say that it the Parent Componets so that his child Componenents can easily access these two Props */}
      <SearchFilter value={search} onChange={handleSearch} />

      <div className="list-container">
        {/* Here i m call the UserList Components so that all the user are display or visible in the UsersPage Components */}
        <UsersList search={search} />
      </div>
    </div>
  );
};
// here i m Export the UsersPage so that other components can easily access the UsersPages components
export default UsersPage;
