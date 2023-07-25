import Header from "../../components/layouts/header/headerComponent";
import Footer from "../../components/layouts/footer/footerComponent";
import News from "../../components/layouts/news/newsComponent";
import { Col } from "antd";
import SeeMore from "../../components/layouts/seeMore/seemoreComponent";

const NewsPage = () => {
  return (
    <>
      <Header />
      <Col
        className="wrapper"
        // style={{display: 'flex', flexWrap: 'wrap'}}
      >
        <div style={{ width: "100%", paddingLeft: '15px' }}>
          <h1>TIN TỨC</h1>
        </div>
        <News />
      </Col>
      <SeeMore />
      <Footer />
    </>
  );
};

export default NewsPage;
