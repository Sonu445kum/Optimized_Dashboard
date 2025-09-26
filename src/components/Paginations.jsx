import React from "react";
import "../styles/pagination.css";

// React.memo used to prevent unnecessary re-renders if props don't change
const Pagination = React.memo(({ total = 0, perPage = 10, current = 1, onChange }) => {
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={p === current ? "page-btn active" : "page-btn"}
          disabled={p === current}
        >
          {p}
        </button>
      ))}
    </div>
  );
});

export default Pagination;
