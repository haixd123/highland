import Header from "../../components/layouts/home/header/headerComponent";
import Footer from "../../components/layouts/home/footer/footerComponent";
import News from "../../components/layouts/home/news/newsComponent";
import { Col } from "antd";
import SeeMore from "../../components/layouts/home/seeMore/seemoreComponent";

const NewsPage = () => {
  return (
    <>
      <Header />
      <Col
      style={{marginBottom: '40px'}}
        className="wrapper"
        // style={{display: 'flex', flexWrap: 'wrap'}}
      >
        <div style={{ width: "100%", paddingLeft: '15px' }}>
          <h1>TIN TỨC</h1>
        </div>
        <News />
      </Col>
      {/* ấn seemore */}
      {/* <SeeMore /> */}
      <Footer />
    </>
  );
};

export default NewsPage;
