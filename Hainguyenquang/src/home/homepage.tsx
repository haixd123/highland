import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import Slide from "../components/layouts/product/slide";
import Product from "../components/layouts/product/product";
import Sale from "../components/layouts/product/sale";
import SlideProduct from "../components/layouts/product/slide";

const HomePage = () => {
    return (
        <>
        <Header />
        <SlideProduct />
        <Sale />
        <Product />
        <Footer />
        </>
    )
}

export default HomePage