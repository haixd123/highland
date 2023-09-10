import Header from "../../../../components/layouts/home/header/Header";
import Footer from "../../../../components/layouts/home/footer/Footer";
import News from "./news/News";
import { Col } from "antd";
import "./Newspage.scss"
import SeeMore from "../../../../components/layouts/home/seeMore/Seemore";

const NewsPage = () => {
  return (
    <>
      <Col
        style={{ marginBottom: '40px' }}
        className="wrapper"
      >
        <div className="News">
          <h1>TIN TỨC</h1>
        </div>
        <News />
      </Col>
    </>
  );
};

export default NewsPage;
