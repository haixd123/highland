// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/homepage";
import ContentPage from "../pages/home/slidepage";
import NewsPage from "../pages/home/newspage";
import UserAdmin from "../pages/admin/user/user";
import ProductAdmin from "../pages/admin/product/product";
import AdminPage from "../pages/admin/admin/admin";
import NewsAdmin from "../pages/admin/news/news";
import Register from "../pages/register";
import Login from "../pages/login";
import BlogPage from "../pages/blog";
import Blog2 from "../pages/blog2";
import Error from "../pages/error/error";
import BuyProduct from "../pages/home/buyproduct";


const BrowerRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin */}
        <Route path="/admin" element={<ProductAdmin />} />
        <Route path="/admin/user" element={<UserAdmin />} />
        <Route path="/admin/product" element={<ProductAdmin />} />
        <Route path="/admin/news" element={<NewsAdmin />} />


        {/* Home */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/buyproduct" element={<BuyProduct />} />


        {/* Login/Register */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Error */ }
        <Route path="/error" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
};

export default BrowerRouter;
