/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Drawer, Layout, Row, Image, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import "../style.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Layout>
      <div
        className="headerMenu"
        // style={{display: 'flex', alignItems: 'center', backgroundColor:'#b22830', padding: '0 15px'}}
      >
        <AppMenu />
        <div
          className="menuIcon"
          //  style={{fontSize: '30px', color: '#fff'}}
        >
          <MenuOutlined
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </div>
      </div>

      <Drawer
        closable={false}
        placement="right"
        title="Two-level Drawer"
        width={320}
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <Menu
          style={{}}
          mode={"inline"}
          items={[
            {
              label: <a href="home">HOME</a>,
              key: "home",
            },
            {
              label: <a href="slide">CONTENT</a>,
              key: "ContactUs",
            },
            {
              label: <a href="news">NEWS</a>,
              key: "AboutUs",
            },
            {
              label: "WE",
              key: "We",
            },
            {
              label: "fb",
              key: "fb",
            },
            {
              label: "gmail",
              key: "gmail",
            },
          ]}
        ></Menu>
      </Drawer>
    </Layout>
  );
};

const AppMenu = () => {
  const siderStyle: any = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };
  return (
    <Layout className="wrapper">
      <Row
        style={{
          backgroundColor: "#b22830",
          // borderTop: "solid 10px #53382c",
          minHeight: "120px",
          textAlign: "center",
          padding: "0 8px",
        }}
      >
        <Col
          className="headerImage"
          // style={{ display: "flex", alignItems: "center", minHeight: '120px' }}
          lg={{ span: 6, order: 1 }}
          md={{ span: 6, order: 1 }}
          sm={{ span: 4, order: 1 }}
          xs={{ span: 4, order: 1 }}
        >
          <div style={{ maxWidth: "110px" }}>
            <a>
              <Image
                style={{ maxWidth: "100%" }}
                src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"
              />
            </a>
          </div>
        </Col>
        <Col
          className="colHeaderMenu"
          // style={{ display: "flex", alignItems: "end" }}
          lg={{ span: 18, order: 2 }}
          md={{ span: 18, order: 2 }}
          sm={{ span: 20, order: 2 }}
          xs={{ span: 20, order: 2 }}
        >
          <div className="headerMenuflex">
            <Menu
              className="testMenuCSS"
              mode={"horizontal"}
              style={{ padding: "0" }}
              items={[
                {
                  style: {
                    padding: "0",
                  },
                  label: (
                    <a className="headerLink" href="home">
                      HOME
                    </a>
                  ),
                  key: "home",
                },
                {
                  style: {
                    padding: "0",
                  },
                  label: (
                    <a className="headerLink" href="slide">
                      CONTENT
                    </a>
                  ),
                  key: "ContactUs",
                },
                {
                  style: {
                    padding: "0",
                  },
                  label: (
                    <a className="headerLink" href="news">
                      NEWS
                    </a>
                  ),
                  key: "AboutUs",
                },
                {
                  style: {
                    padding: "0",
                  },
                  label: (
                    <a className="headerLink" href="news">
                      NEWS
                    </a>
                  ),
                  key: "We",
                },
                {
                  style: {
                    padding: "0",
                  },
                  label: (
                    <a className="headerLink" href="news">
                      NEWS
                    </a>
                  ),
                  key: "fb",
                },
                {
                  style: {
                    padding: "0",
                  },
                  label: (
                    <a className="headerLink" href="news">
                      NEWS
                    </a>
                  ),
                  key: "gmail",
                },
              ]}
            ></Menu>
          </div>
          {/* <ul style={{display: 'flex', margin: '0'}}>
                        <li style={{listStyle: 'none'}}>
                            <a style={{ display: 'block', fontSize: '16px', lineHeight: '25px', fontWeight: '700', color: '#ffffff', padding: '10px 17px' }} href="#">
                                <span>THỰC ĐƠN</span>
                            </a>
                        </li>
                        <li style={{listStyle: 'none'}}>
                            <a style={{ display: 'block', fontSize: '16px', lineHeight: '25px', fontWeight: '700', color: '#ffffff', padding: '10px 17px' }} href="#">
                                <span>VỀ CHÚNG TÔI</span>
                            </a>
                        </li>
                        <li style={{listStyle: 'none'}}>
                            <a style={{ display: 'block', fontSize: '16px', lineHeight: '25px', fontWeight: '700', color: '#ffffff', padding: '10px 17px' }} href="#">
                                <span>TIN TỨC</span>
                            </a>
                        </li>
                    </ul> */}
        </Col>
        <Col
          lg={{ span: 0, order: 2 }}
          md={{ span: 0, order: 2 }}
          sm={{ span: 2, order: 2 }}
          xs={{ span: 2, order: 2 }}
        ></Col>
      </Row>
    </Layout>
  );
};

export default Header;
