import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AdminPage from "../pages/admin";
import Blog from "../pages/admin/blog";
import Error from "../pages/error";
import AboutPage from "../pages/admin/about";
import ContactPage from "../pages/admin/contact";

const BrowerRouter = () => {
  // Other:
  // create-browser-router
  // https://reactrouter.com/en/main/routers/create-browser-router

  return (
    <BrowserRouter>
      <Routes>
        {/* admin */}
        <Route path='/admin/:id' element={<AdminPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        {/* home */}
        <Route path='/home' element={<HomePage />}/>



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