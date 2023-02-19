import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import NavBar from "./components/navBar/NavBar";
import { ToastContainer, toast } from "react-toastify";
import { ModalsProvider } from "react-modal-controller";
import "react-toastify/dist/ReactToastify.css";
import modals from "./shared/modals/modals";
import "./App.scss";

export default function App() {
  return (
    <div className="app" style={{ height: "100vh" }}>
      <ModalsProvider initialModals={modals}>
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
      </ModalsProvider>
    </div>
  );
}
