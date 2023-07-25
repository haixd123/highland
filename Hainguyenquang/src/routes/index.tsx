// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/homepage";
import SlidePage from "../pages/home/slidepage";
import NewsPage from "../pages/home/newspage";
import UserAdmin from "../pages/admin/user";
import ProductAdmin from "../pages/admin/product";
import AdminPage from "../pages/admin/admin";
import NewsAdmin from "../pages/admin/news";


const BrowerRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/user" element={<UserAdmin />} />
        <Route path="/admin/product" element={<ProductAdmin />} />
        <Route path="/admin/news" element={<NewsAdmin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/slide" element={<SlidePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BrowerRouter;
