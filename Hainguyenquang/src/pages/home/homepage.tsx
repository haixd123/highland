import Header from "../../components/layouts/home/header/headerComponent";
import Footer from "../../components/layouts/home/footer/footerComponent";
import Product from "../../components/layouts/home/product/product/productComponent";
import Slide from "../../components/layouts/home/product/slide/slideproductComponent";
import Sale from "../../components/layouts/home/product/sale/saleComponent";
import { Col, Drawer, Layout } from "antd";
import "./style.scss"
import "../../App.css";
import HotProduct from "../../components/layouts/home/product/product/hotProduct";

const HomePage: any = () => {
  //   const [data, setData] = useState([]);
  //   const dataRedux: any = useSelector((state) => state);
  //   const [openMenu, setOpenMenu] = useState(false);


  // console.log('dataRedux: ', dataRedux);
  // const dataCart = dataRedux?.choose_itemReducer?.cart || [];
  // console.log('dataCart: ', dataCart);


  return (
    <Layout
    >
  
      <Header />
      <Slide />
      <Col
        className="wrapper homepageCol"
        style={{ width: "100%" }}
      >
        <div className="homepageContent">
          <span className="HomePage-sportTitles">Ưu đãi của bạn</span>
        </div>
        <Sale />
      </Col>
      <Col className="wrapper homepageCol">
        <div className="homepageContent">
          <span className="HomePage-sportTitles">Tất cả sản phẩm</span>
        </div>
        <Product />
      </Col>
      <Col className="wrapper homepageCol">
        <div className="homepageContent">
          <span className="HomePage-sportTitles">Sản phẩm bán chạy</span>
        </div>
        <HotProduct />
      </Col>
      <Footer />
    </Layout>
  );
};

export default HomePage;
