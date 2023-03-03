import { createBrowserRouter } from "react-router-dom";
import Sandbox from "./pages/sandbox/Sandbox";
import ErrorPage from "./pages/errorPage/ErrorPage";
import ForumsPage from "./pages/forumsPage/ForumsPage";
import OperationsPage from "./pages/operationsPage/OperationsPage";
import ContactPage from "./pages/contactPage/ContactPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import BlackMarketPage from "./pages/blackMarketPage/BlackMarketPAge";
import AboutPage from "./pages/aboutPage/AboutPage";
import HomePage from "./pages/homePage/HomePAge";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/black-market",
    element: <BlackMarketPage />,
  },
  {
    path: "/forums",
    element: <ForumsPage />,
  },
  {
    path: "/operations",
    element: <OperationsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
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
