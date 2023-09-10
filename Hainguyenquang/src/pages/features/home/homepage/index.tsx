import Header from "../../../../components/layouts/home/header/Header";
import Footer from "../../../../components/layouts/home/footer/Footer";
import Product from "./product/Product";
import Slide from "./slide/slideproductComponent";
import Sale from "./sale/Sale";
import { Col, Drawer, Layout } from "antd";
import "./Homepage.scss"
import HotProduct from "./product/HotProduct";
import Features from "../..";

const HomePage: any = () => {
  return (
    <Layout
    >
      <Slide />
      <Col
        className="wrapper homepageCol"
        style={{ width: "100%" }}
      >
        <div className="homepageContent">
          <span className="HomePage-sportTitles">Ưu đãi của bạn</span>
        </div>
        <div className="homepageSale" >
          <Sale />
        </div>
      </Col>
      <Col className="wrapper homepageCol">
        <div className="homepageContent">
          <span className="HomePage-sportTitles">Tất cả sản phẩm</span>
        </div>
        <div className="homepageProduct">
          <Product />
        </div>
      </Col>
      <Col className="wrapper homepageCol">
        <div className="homepageContent">
          <span className="HomePage-sportTitles">Sản phẩm bán chạy</span>
        </div>
        <div className="homepageProduct">
          <HotProduct />
        </div>
      </Col>
    </Layout>
  );
};

export default HomePage;
