import React from "react";
import Admin from "../screen/Admin/Admin";
import Login from "./login/Login";
// import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import Registration from "./Registration/Registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function Main(props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },

    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Main;
