// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../home/homepage";
import MenuPage from "../home/menupage";
import NewsPage from "../home/newpage";

const BrowerRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/news' element={<NewsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default BrowerRouter;