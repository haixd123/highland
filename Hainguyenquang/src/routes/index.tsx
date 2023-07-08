// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../home/homepage";
import SlidePage from "../home/slidepage";
import NewsPage from "../home/newspage";
import AdminPage from "../home/home";

const BrowerRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/slide" element={<SlidePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BrowerRouter;
