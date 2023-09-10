import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  ShareAltOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import "./Footer.scss";

const Footer = () => {
  return (
    <Row className="Row">
      <div className="wrapper">
        <Col
          className="Col"
          lg={{ span: 3 }}
          md={{ span: 3 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <a className="icon-link">
            <FacebookOutlined />
          </a>
          <a className="icon-link">
            <YoutubeOutlined />
          </a>
          <a className="icon-link">
            <InstagramOutlined />
          </a>
        </Col>
        <Col
          className="Col"
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          © 2018 Highlands Coffee. All rights reserved
        </Col>
        <Col
          className="Col"
          lg={{ span: 3 }}
          md={{ span: 3 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <a className="ShareAltOutlinedLink" href="#">
            <ShareAltOutlined
              className="footerIcon"
            />
            Chia sẻ
          </a>
        </Col>
        <Col
          className="Col"
          lg={{ span: 7 }}
          md={{ span: 7 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <a className="MailOutlinedLink" href="#">

            <MailOutlined
              className="footerIcon"
            />
            customerservice@highlandscoffee.com.vn
          </a>
        </Col>
      </div>
    </Row>
  );
};

export default Footer;
