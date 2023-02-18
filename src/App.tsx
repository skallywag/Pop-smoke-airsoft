import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import NavBar from "./components/navBar/NavBar";
import "./App.scss";

export default function App() {
  return (
    <div className="app" style={{ height: "100vh" }}>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}
