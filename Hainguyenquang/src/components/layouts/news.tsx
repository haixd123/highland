import { Col, Image } from "antd";

const News = () => {
  return (
    
    <Col
      style={{ padding: "0 15px" }}
      lg={{ span: 8 }}
      md={{ span: 8 }}
      sm={{ span: 12 }}
      xs={{ span: 24 }}
    >
      <div>
        <div>
          <a href="#">
            <Image
              // style={{ maxWidth: "100%" }}
              src="https://www.highlandscoffee.com.vn/vnt_upload/news/05_2023/GRANITA/thumbs/470_crop_HCO-7702-GRANITA-TEA-SOCIAL-WEB-NEWS-470X314_1.jpg"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#">MỚI! TRÀ TUYẾT HIGHLANDS COFFEE</a>
          </h3>
        </div>
        <div>
          <span>17/05/2023, 12:09</span>
        </div>
      </div>
    </Col>
  );
};

export default News;
