#  Optimized Dashboard (React + Redux Toolkit)

###  Project Overview
This project is a **React dashboard** that fetches data from a public API (JSONPlaceholder) including:
- Users
- Posts
- Todos

It is **optimized for performance** and includes:
- Authentication (Signup, Login, Logout)
- Protected Routes (only logged-in users can access Dashboard)
- Search + Pagination for posts
- Toast notifications
- Responsive design with Header & Footer

---

### Optimizations Applied
1. **React.memo**  
   - Used in `UsersList`, `PostsList`, `TodosList`, `SearchFilter`, `Pagination`  
   - Prevents unnecessary re-renders when props/state don’t change.

2. **useMemo**  
   - Used in `PostsList` to memoize filtered search results.  
   - Prevents expensive recalculation on every render.

3. **RTK Query (Caching)**  
   - API data automatically cached with Redux Toolkit Query.  
   - Avoids refetching same data multiple times.

4. **Lazy Loading (React.lazy + Suspense)**  
   - Pages (`Home`, `Signup`, `Login`, `Dashboard`) are lazy-loaded.  
   - Reduces initial bundle size and improves load time.

5. **Selectors (RTK Query hooks)**  
   - `useGetUsersQuery`, `useGetPostsQuery`, `useGetTodosQuery`  
   - Automatically optimized with cache + avoids duplicate API calls.

---

### Key Features

- Landing Page + Header/Footer
- Signup & Login (localStorage-based demo auth)
- Protected Dashboard with nested routes
- Users, Posts, Todos pages
- Search + Pagination on Posts
- Toastify notifications
- Clean CSS for interactivity


Dynamic Data Fetching:
Fetches users, posts, and todos from APIs using RTK Query with automatic caching and polling support.

Optimized Rendering:
Utilizes React.memo, useMemo, and useCallback to reduce unnecessary re-renders and boost performance.

Advanced Search & Filtering:
Real-time search functionality across multiple fields (name, email, etc.) with case-insensitive matching.

Pagination:
Efficient page-wise rendering of large datasets to improve performance.

Responsive UI:
Fully responsive design with clean layouts for desktop and mobile views.

Protected Routes:
PrivateRoute component ensures secure access to dashboard pages.

Skeleton Loading:
Displays loading placeholders while fetching data for smooth user experience.

Easy Navigation:
Sidebar navigation with nested routes for Users, Posts, Todos, and Dashboard home.

Optimized Image Carousel: (if applicable)
Smooth hero image slider using React state and useEffect.

---

###  How to Run
```bash
npm install
npm run dev













































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
