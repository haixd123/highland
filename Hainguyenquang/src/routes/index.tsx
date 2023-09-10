// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/features/home/homepage";
import ContentPage from "../pages/features/home/contentpage";
import NewsPage from "../pages/features/home/newspage";
import UserAdmin from "../pages/features/admin/user/User";
import ProductAdmin from "../pages/features/admin/product/Product";
import AdminPage from "../pages/features/admin/admin/admin";
import NewsAdmin from "../pages/features/admin/news/News";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import BlogWrite from "../pages/blog/blogWrite";
import BlogRender from "../pages/blog/BlogRender";
import Error from "../pages/error/error";
import Checkout from "../pages/checkout/Checkout";
import Features from "../pages/features";
import Home from "../pages/features/home";
import Admin from "../pages/features/admin/index";

const router =
  createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/content",
          element: <ContentPage />,
        },
        {
          path: "/news",
          children: [
            {
              path: "/news",
              element: <NewsPage />
            },
            {
              path: "/news/:slug",
              element: <BlogRender />
            }
          ]
        }
      ],
    },
    {
      path: "/admin",
      element: <Admin></Admin>,
      errorElement: <Error />,
      children: [
        {
          path: "/admin/product",
          element: <ProductAdmin />,
        },
        {
          path: "/admin/news",
          element: <NewsAdmin />,
        },
        {
          path: "/admin/user",
          element: <UserAdmin />,
        },
      ],
    },
    {
      path: "/checkout",
      element: <Checkout></Checkout>,
      errorElement: <Error />,
    }
  ]);

export default router;
