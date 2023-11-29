import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Notification from "../pages/Notification";
import Register from "../pages/Register";
import Login from "../pages/Login";
// import Home from "../home/home/Home";



export const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
      },
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path:"/notification",
        element:<Notification></Notification>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      }
      

      
    ],
  },
]);
