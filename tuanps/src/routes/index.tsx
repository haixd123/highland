import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AdminPage from "../pages/admin";

const BrowerRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/admin' element={<AdminPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default BrowerRouter;