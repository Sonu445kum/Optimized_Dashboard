// RTK Query API slice - fetches users, posts, todos from JSONPlaceholder
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://jsonplaceholder.typicode.com/",
//   }),
//   endpoints: (builder) => ({
//     getUsers: builder.query({
//       query: () => "users",
//     }),
//     getPosts: builder.query({
//       query: () => "posts",
//     }),
//     getTodos: builder.query({ 
//       query: () => "todos",
//     }),
//   }),
// });

// export const { useGetUsersQuery, useGetPostsQuery, useGetTodosQuery } = apiSlice;

// Add the Normalizations in the apiSlice.js file
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter } from "@reduxjs/toolkit";

// 1️⃣ Create Entity Adapters
const usersAdapter = createEntityAdapter();
const postsAdapter = createEntityAdapter();
const todosAdapter = createEntityAdapter();

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    //  Users
    getUsers: builder.query({
      query: () => "users",
      transformResponse: (response) => {
        // normalize users
        return usersAdapter.setAll(usersAdapter.getInitialState(), response);
      },
    }),
    //  Posts
    getPosts: builder.query({
      query: () => "posts",
      transformResponse: (response) => {
        return postsAdapter.setAll(postsAdapter.getInitialState(), response);
      },
    }),
    //  Todos
    getTodos: builder.query({
      query: () => "todos",
      transformResponse: (response) => {
        return todosAdapter.setAll(todosAdapter.getInitialState(), response);
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetPostsQuery, useGetTodosQuery } = apiSlice;

