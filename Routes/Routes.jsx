
import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../src/Layout/Main";
import Home from "../src/pages/Home";
import Singup from "../src/pages/Singup";
import Login from "../src/pages/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/singup',
            element:<Singup></Singup>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router