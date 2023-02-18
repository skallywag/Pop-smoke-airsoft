import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import NavBar from "./components/navBar/NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

export default function App() {
  return (
    <div className="app" style={{ height: "100vh" }}>
      <NavBar />
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
