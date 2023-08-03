import { Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { TableUser } from "./user";
import { TableProduct } from "./product";
import { useNavigate } from "react-router";
import React, { useState } from 'react';
import {
  UserOutlined,
  ShoppingOutlined,
  DashboardOutlined,
  HomeOutlined,
  ReadOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import AdminSider from "../../components/layouts/adminSider/adminSider";




const AdminPage = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };

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

  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Header style={headerStyle}>
        Admin
      </Header>
      <Layout hasSider style={{ position: 'relative' }}>
        <Sider style={siderStyle}>
          <AdminSider />
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
