import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("@/view/home"));
const Detail = React.lazy(() => import("@/view/detail"));
const Entire = React.lazy(() => import("@/view/entire"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
];

export default routes;