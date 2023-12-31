import { Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
// import { TableUser } from "../user/User";
import ProductAdmin from "../product/Product";
import { useNavigate } from "react-router";
import React, { useState } from 'react';
import {
  UserOutlined,
  ShoppingOutlined,
  DashboardOutlined,
  HomeOutlined,
  ReadOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import '../adminstyle.scss'
import AdminSider from "../../../../components/layouts/admin/sider/Sider";
import AdminHeader from "../../../../components/layouts/admin/header/Header";
import Authentication from "../../../../components/authentication";



const AdminPage = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#b22830",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end'
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#fff",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#53382c",
  };

  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <AdminHeader />
      <Layout hasSider style={{ position: 'relative' }}>
        <Sider style={siderStyle}>
          <AdminSider />
        </Sider>
        <Content>
          <ProductAdmin />
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default AdminPage;
