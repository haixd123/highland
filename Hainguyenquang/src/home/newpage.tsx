import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import News from "../components/layouts/news";
import { Col } from "antd";
import SeeMore from "../components/layouts/seemore";

const NewsPage = () => {
    return(
    <>
    <Header />
        <Col
          style={{display: 'flex', flexWrap: 'wrap'}}>
            <div style={{width: '100%'}}>
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
    )
}

export default NewsPage