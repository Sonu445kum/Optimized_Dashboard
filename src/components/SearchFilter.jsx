import React from "react";
import "../styles/dashboard.css"; // basic styling
// this is the Child Components which get the Props(value,onChange) from UsersPages
const SearchFilter = React.memo(({ value = "", onChange }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
});

export default SearchFilter;
