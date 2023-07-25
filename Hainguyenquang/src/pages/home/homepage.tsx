import Header from "../../components/layouts/header/headerComponent";
import Footer from "../../components/layouts/footer/footerComponent";
import Slide from "../../components/layouts/product/slide/slideproductComponent";
import Product from "../../components/layouts/product/product/productComponent";
import Sale from "../../components/layouts/product/sale/saleComponent";
import { Col, Drawer, Layout } from "antd";
import React, { useEffect, useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import Sider from "antd/es/layout/Sider";

const HomePage: any = () => {
//   const [data, setData] = useState([]);
//   const dataRedux: any = useSelector((state) => state);
//   const [openMenu, setOpenMenu] = useState(false);


// console.log('dataRedux: ', dataRedux);
// const dataCart = dataRedux?.choose_itemReducer?.cart || [];
// console.log('dataCart: ', dataCart);


  return (
    <Layout
    // className="wrapper"
    >
      {/* <Drawer
        closable={false}
        placement="right"
        title="Two-level Drawer"
        width={320}
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <div
      >
        {dataCart.map((itemCart:any) => {
          return (
            <div>{itemCart.name}</div>
          )
        })}
      </div>
      </Drawer> */}
      
      <Header />
      {/* <SlideProduct /> */}
      <Slide />

      <Col
        className="wrapper"
        style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
      >
        <div style={{ width: "100%", textAlign: "center", margin: "35px 0 0" }}>
          <a className="HomePage-sportTitles">Ưu đãi của bạn</a>
        </div>
        <Sale />
      </Col>
      <Col className="wrapper" style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: "100%", textAlign: "center", margin: "35px 0 0" }}>
          <a className="HomePage-sportTitles">Sản phẩm bán chạy</a>
        </div>
        <Product />
      </Col>
      <Footer />
    </Layout>
  );
};

export default HomePage;
