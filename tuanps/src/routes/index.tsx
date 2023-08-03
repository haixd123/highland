import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AdminPage from "../pages/admin";
import Blog from "../pages/admin/blog";
import Error from "../pages/error";
import AboutPage from "../pages/admin/about";
import ContactPage from "../pages/admin/contact";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ProductPage from "../pages/admin/product";

const BrowerRouter = () => {
  // Other:
  // create-browser-router
  // https://reactrouter.com/en/main/routers/create-browser-router

  return (
    <BrowserRouter>
      <Routes>
        {/* admin */}
        <Route path='/admin' element={<AdminPage />} />
    {/* ex: /admin/detail/iphone14-256GB */}
    {/* ex: /admin/detail/123 => productId gán = 123 */}
    
        <Route path="/blog" element={<Blog />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        {/* home */}
        <Route path='/home' element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/product" element={<ProductPage />} />

        {/* lỗi không tồn tại trang */}
        <Route path="*" element={<Error />} />
        {/* Auth */}
        {/* <Route path="404" element={<404 />}/> */}
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default BrowerRouter;