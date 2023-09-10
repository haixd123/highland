import { Outlet } from "react-router"
import Footer from "../../../components/layouts/home/footer/Footer"
import Header from "../../../components/layouts/home/header/Header"

const Home = () => {
    return (
        <>
            <Header />
            <div>
                <Outlet></Outlet>
            </div>
            <Footer />
        </>
    )
}

export default Home