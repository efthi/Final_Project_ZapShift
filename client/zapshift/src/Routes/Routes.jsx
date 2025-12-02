import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../Layout/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {path:'*', element: <p>ERROR</p>}
    ],
  },
]);
