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
import BlogWrite from "../pages/blogWrite";
import BlogRender from "../pages/blogRender";
import Error from "../pages/error/error";
import BuyProduct from "../pages/home/buyproduct";
import Admin from "../pages/admin";


const BrowerRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/user" element={<UserAdmin />} />
        <Route path="/admin/product" element={<ProductAdmin />} />
        <Route path="/admin/news" element={<NewsAdmin />} />


        {/* Home */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
        {/* <Route path="/blog" element={<BlogWrite />} />
        <Route path="/blog2" element={<BlogRender />} /> */}
        <Route path="/buyproduct" element={<BuyProduct />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<BlogRender />} />


        {/* Login/Register */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Error */}
        <Route path="/error" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
};

export default BrowerRouter;
