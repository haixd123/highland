import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import Slide from "../components/layouts/product/slide/slide";
import Product from "../components/layouts/product/product/product";
import Sale from "../components/layouts/product/sale/sale";
import SlideProduct from "../components/layouts/product/slide/slide";
import { Col, Layout } from "antd";

const HomePage = () => {
  return (
    <Layout 
    // className="wrapper"
    >
      <Header />
      {/* <SlideProduct /> */}
      <Slide />

      <Col
    className="wrapper"

        style={{ display: "flex", flexWrap: "wrap"}}
      >
      <Sale />
      <Sale />
      <Sale />
      <Sale />
      <Sale />
      </Col>
      <Col
    className="wrapper"

        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Col>
      <Footer />
    </Layout>
  );
};

export default HomePage;
