import React, { useMemo } from "react";
import { useGetUsersQuery } from "../api/apiSlice";
import "../styles/dashboard.css";
// Here i m Create UserList Components
const UsersList = React.memo(({ search = "" }) => {
  // Here i m Destructuring the the data or info from useGetUsersQuery in the apiSlice
  const { data: users, error, isLoading } = useGetUsersQuery();

  // Filtered users memoized
  const filteredUsers = useMemo(() => {
    // If the users array doesn't exist yet, return an empty array to avoid errors
    if (!users) return [];

    // Trim whitespace and convert the search string to lowercase for case-insensitive matching
    const s = search.trim().toLowerCase();

    // If search string is empty after trimming, return all users
    if (!s) return users;

    // Filter users whose name or email includes the search string
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(s) ||  // Check if name matches
        u.email.toLowerCase().includes(s)    // Check if email matches
    );
  }, [users, search]); // Recompute filteredUsers only when users or search changes

  if (isLoading)
    return (
      <ul className="users-list">
        {/* Here it create 6 empty array */}
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} className="skeleton"></li>
        ))}
      </ul>
    );

  if (error) return <p>Error loading users.</p>;

  return (
    <ul className="users-list">
      {/* Here it traverse all the items of the users */}
      {filteredUsers.map((u) => (
        <li key={u.id} className="user-item">
          <div className="user-info">
            <div className="user-name">{u.name}</div>
            <div className="user-email">{u.email}</div>
          </div>
          <div className="user-id">#{u.id}</div>
        </li>
      ))}
    </ul>
  );
});

export default UsersList;
