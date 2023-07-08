import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import News from "../components/layouts/news/news";
import { Col } from "antd";
import SeeMore from "../components/layouts/seeMore/seemore";

const NewsPage = () => {
  return (
    <>
      <Header />
      <Col
        className="wrapper"
        // style={{display: 'flex', flexWrap: 'wrap'}}
      >
        <div style={{ width: "100%" }}>
          <h1>TIN TỨC</h1>
        </div>
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
      </Col>
      <SeeMore />
      <Footer />
    </>
  );
};

export default NewsPage;
