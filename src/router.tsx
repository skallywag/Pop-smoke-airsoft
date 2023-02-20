import { createBrowserRouter } from "react-router-dom";
import BlackMarket from "./pages/blackMarket/BlackMarket";
import Forums from "./pages/forums/Forums";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Operations from "./pages/operations/Operations";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Sandbox from "./pages/sandbox/Sandbox";
import ErrorPage from "./pages/errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/black-market",
    element: <BlackMarket />,
  },
  {
    path: "/forums",
    element: <Forums />,
  },
  {
    path: "/operations",
    element: <Operations />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/sandbox",
    element: <Sandbox />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
