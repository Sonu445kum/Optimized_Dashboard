// import React, { useState, useMemo, useCallback } from "react";
// import { useGetPostsQuery } from "../api/apiSlice";
// import SearchFilter from "./SearchFilter";
// import Pagination from "../components/Paginations";
// import "../styles/dashboard.css"; // basic styling for posts list
// // here i m create the PostsList Components
// // And React.memo is the used to Memoized the Commponents if the data pass from Parent to Child Components
// const PostsList = React.memo(() => {
//   // Here i m get the info or data from useGetPostsQuery->from apiSlice
//   const { data: posts, isLoading, error } = useGetPostsQuery();
//   // Here i m Create the 2 useState which store the initial value of Our State
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const perPage = 8;

//   // Memoized filtering - recalculated only when posts or search change
//   const filtered = useMemo(() => {
//     if (!posts) return [];
//     const s = search.trim().toLowerCase();
//     return s
//       ? posts.filter(
//           (p) =>
//             p.title.toLowerCase().includes(s) ||
//             p.body.toLowerCase().includes(s)
//         )
//       : posts;
//   }, [posts, search]);

//   const total = filtered.length;
//   const start = (page - 1) * perPage;
//   const pageItems = useMemo(() => filtered.slice(start, start + perPage), [
//     filtered,
//     start,
//   ]);

//   // stable handlers with useCallback so props to children are stable
//   const handleSearch = useCallback((v) => {
//     // if the user type in the Search filed then setPage=1 means first pages of the paginations its appear on the ui
//     setSearch(v);
//     setPage(1);
//   }, []);
//   // here i m use the useCallBack fro
//   const handlePage = useCallback((p) => setPage(p), []);

//   if (isLoading) return <p>Loading posts...</p>;
//   if (error) return <p>Error loading posts.</p>;

//   return (
//     <div className="posts-list">
//       <SearchFilter value={search} onChange={handleSearch} />
//       <ul className="posts-items">
//         {pageItems.map((post) => (
//           <li key={post.id} className="post-item">
//             <h3 className="post-title">{post.title}</h3>
//             <p className="post-body">{post.body}</p>
//           </li>
//         ))}
//       </ul>

//       <Pagination total={total} perPage={perPage} current={page} onChange={handlePage} />
//     </div>
//   );
// });

// export default PostsList;

import React, { useState, useMemo, useCallback } from "react";
import { useGetPostsQuery } from "../api/apiSlice";
import SearchFilter from "./SearchFilter";
import Pagination from "../components/Paginations";
import "../styles/dashboard.css";

const PostsList = React.memo(() => {
  const { data: posts, isLoading, error } = useGetPostsQuery();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 8;

  //  Global search logic
  const filtered = useMemo(() => {
    if (!posts) return [];
    const s = search.trim().toLowerCase();
    if (!s) return posts;

    return posts.filter(post =>
      Object.values(post).some(value =>
        value
          .toString()                  // Convert all values to string
          .toLowerCase()               // Case-insensitive
          .includes(s)                 // Partial match
      )
    );
  }, [posts, search]);

  const total = filtered.length;
  const start = (page - 1) * perPage;
  const pageItems = useMemo(() => filtered.slice(start, start + perPage), [
    filtered,
    start,
  ]);

  const handleSearch = useCallback((v) => {
    setSearch(v);
    setPage(1); // Reset to first page when search changes
  }, []);

  const handlePage = useCallback((p) => setPage(p), []);

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div className="posts-list">
      <SearchFilter value={search} onChange={handleSearch} />
      <ul className="posts-items">
        {pageItems.map((post) => (
          <li key={post.id} className="post-item">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
            <p className="post-user">User ID: {post.userId}</p>
          </li>
        ))}
      </ul>

      <Pagination
        total={total}
        perPage={perPage}
        current={page}
        onChange={handlePage}
      />
    </div>
  );
});

export default PostsList;



