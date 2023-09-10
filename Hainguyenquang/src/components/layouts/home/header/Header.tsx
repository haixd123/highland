/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Drawer, Layout, Row, Image, Menu } from "antd";
import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./Header.scss";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import imgLogo from "../../../../assets/White_logo800.png";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

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
        placement="left"
        title="Danh mục"
        width={320}
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <Menu
          style={{}}
          mode={"inline"}
          onClick={(info) => { navigate(`/${info.key}`) }}
          items={[
            {
              label: 'HOME',
              key: "",
            },
            {
              label: <a>CONTENT</a>,
              key: "content",
            },
            {
              label: <a href="news">NEWS</a>,
              key: "news",
            }
            // ,
            // {
            //   label: "WE",
            //   key: "We",
            // },
            // {
            //   label: "fb",
            //   key: "fb",
            // },
            // {
            //   label: "gmail",
            //   key: "gmail",
            // },
          ]}
        ></Menu>
      </Drawer>
    </Layout>
  );
};

const AppMenu = () => {
  const [quantity, setQuantity] = useState(0)
  const navigate = useNavigate();
  const dataRedux: any = useSelector((state) => state);
  const dataCart = dataRedux?.addToCartReducer?.cartItems || [];
  let totalSum = dataCart.reduce(function (accumulator: any, currentValue: any) {
    return accumulator + currentValue.quantity
  }, 0)

  const siderStyle: any = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };

  return (
    <Layout className="wrapper">
      <Row
        className="headerROw"

      >
        <Col
          className="headerImage"
          lg={{ span: 6, order: 1 }}
          md={{ span: 6, order: 1 }}
          sm={{ span: 4, order: 1 }}
          xs={{ span: 4, order: 1 }}
        >
          <div style={{ maxWidth: "110px" }}>
            <a href="/">
              <Image
                placeholder={true} preview={false}
                style={{ maxWidth: "100%", backgroundColor: 'transparent' }}
                src={imgLogo}
              />
            </a>
          </div>
        </Col>
        <Col
          className="responsiveItem"
          lg={{ span: 18, order: 2 }}
          md={{ span: 18, order: 2 }}
          sm={{ span: 20, order: 2 }}
          xs={{ span: 18, order: 2 }}
        >
          <div className="responsiveIcon">
            <div className="icon">
              <div className="iconUser">
                <a className="iconLink">
                  <UserOutlined />
                </a>
                <div className="blockUser">
                  <a className="blockUserItemLink">
                    <div className="blockUserItem">
                      Tài khoản của tôi
                    </div>
                  </a>
                  <a className="blockUserItemLink">
                    <div className="blockUserItem">
                      Đơn mua
                    </div>
                  </a>
                  <a className="blockUserItemLink" onClick={() => { navigate('/login'); localStorage.removeItem('access-token'); localStorage.removeItem('refresh-token') }}>
                    <div className="blockUserItem">
                      Đăng xuất
                    </div>
                  </a>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <a href="/checkout" className="iconLink">
                  <ShoppingCartOutlined />
                </a>
                <div className="cartQuantity">{totalSum}</div>
              </div>
            </div>
          </div>
          <div className="colHeaderMenu">
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
                      <a className="headerLink" onClick={() => navigate('/')}>
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
                      <a className="headerLink" onClick={() => navigate('/content')}>
                        CONTENT
                      </a>
                    ),
                    key: "Content",
                  },
                  {
                    style: {
                      padding: "0",
                    },
                    label: (
                      <a className="headerLink" onClick={() => navigate('/news')}>
                        NEWS
                      </a>
                    ),
                    key: "News",
                  }
                ]}
              ></Menu>
            </div>
          </div>
        </Col>
        <Col
          lg={{ span: 0, order: 1 }}
          md={{ span: 0, order: 1 }}
          sm={{ span: 2, order: 1 }}
          xs={{ span: 2, order: 1 }}
        ></Col>
      </Row>
    </Layout>
  );
};

export default Header;
