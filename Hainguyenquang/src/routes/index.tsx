// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/homepage";
import ContentPage from "../pages/home/slidepage";
import NewsPage from "../pages/home/newspage";
import UserAdmin from "../pages/admin/user";
import ProductAdmin from "../pages/admin/product";
import AdminPage from "../pages/admin/admin";
import NewsAdmin from "../pages/admin/news";
import Register from "../pages/register";
import Login from "../pages/login";


const BrowerRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/user" element={<UserAdmin />} />
        <Route path="/admin/product" element={<ProductAdmin />} />
        <Route path="/admin/news" element={<NewsAdmin />} />


        {/* Home */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/news" element={<NewsPage />} />

        {/* Login/Register */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
};

export default BrowerRouter;
