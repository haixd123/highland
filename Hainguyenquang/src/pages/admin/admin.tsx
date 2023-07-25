import React from "react";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { TableUser } from "./user";
import { TableProduct } from "./product";


const AdminPage = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };

  // const contentStyle: React.CSSProperties = {
  //   textAlign: "center",
  //   minHeight: 120,
  //   lineHeight: "120px",
  //   color: "#fff",
  //   backgroundColor: "#108ee9",
  // };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };

  return (
    <Layout>
      <Header style={headerStyle}>
        Admin
      </Header>
      <Layout hasSider style={{position: 'relative'}}>
        <Sider

          style={siderStyle}
        >
          <div style={{ margin: "15px auto" }}>
            <a style={{ color: "#fff" }} href="home">
              Home
            </a>
          </div>
          <div style={{ margin: "15px auto" }}>
            <a style={{ color: "#fff" }} href="admin">
              Admin
            </a>
          </div>
          <div style={{ margin: "15px auto" }}>
            <a style={{ color: "#fff" }} href="admin/user">
              User
            </a>
          </div>
          {/* <HeaderMenu /> */}
          <div style={{ margin: "15px auto" }}>
            <a style={{ color: "#fff" }} href="admin/product">
              Product
            </a>
          </div>
          <div style={{ margin: "15px auto" }}>
            <a style={{ color: "#fff" }} href="admin/news">
              News
            </a>
          </div>
          {/* <HeaderMenu /> */}
        </Sider>
        <Content>
          <TableUser />
          <TableProduct />
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default AdminPage;
