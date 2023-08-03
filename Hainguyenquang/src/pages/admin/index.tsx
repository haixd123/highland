import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { TableUser } from "./user";
import { TableProduct } from "./product";
import { ReactElement } from "react";
import React, { Fragment, ReactNode } from "react"

import AdminSider from "../../components/layouts/adminSider/adminSider";




const Layouts = ({ children }: { children: ReactNode }) => {
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

    return (
        // <>
        //     {children}
        // </>
        <Fragment>
            <Header style={headerStyle}>
                Admin
            </Header>
            <Layout hasSider style={{ position: 'relative' }}>
                <Sider style={siderStyle}>
                    <AdminSider />
                </Sider>
                <Content>
                    {children}
                </Content>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
        </Fragment>

    );
};

export default Layouts