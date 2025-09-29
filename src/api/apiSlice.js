// RTK Query API slice - fetches users, posts, todos from JSONPlaceholder
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
    getPosts: builder.query({
      query: () => "posts",
    }),
    getTodos: builder.query({ 
      query: () => "todos",
    }),
  }),
});

export const { useGetUsersQuery, useGetPostsQuery, useGetTodosQuery } = apiSlice;
