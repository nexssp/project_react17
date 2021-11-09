import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation";
import Register from "./Register";
import Home from "./Home";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "register", element: <Register /> },
    // ...
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Navigation />
      <App />
    </Router>
  );
};

export default AppWrapper;
