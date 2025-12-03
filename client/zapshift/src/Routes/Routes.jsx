import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../Layout/MainLayout";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard/Dashboard";


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
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      {path: "be-a-rider", element: <PrivateRoutes><p>Be a Rider</p></PrivateRoutes>},
      {path:'*', element: <p>ERROR</p>}
    ],
  },
  {
    path:"dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
  },
]);
