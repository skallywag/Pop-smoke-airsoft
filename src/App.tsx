import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.scss";

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <RouterProvider router={router} />
    </div>
  );
}
