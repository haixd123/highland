import { Outlet } from "react-router"
import Header from "../../../components/layouts/admin/header/Header"
import { Layout } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content, Footer } from "antd/es/layout/layout"
import AdminSider from "../../../components/layouts/admin/sider/Sider"
import { useState } from "react"

const layoutStyle: React.CSSProperties = {
    minHeight: '100vh'
}


const contentStyle: React.CSSProperties = {
    marginLeft: '25px',
    marginTop: '25px'
}

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

const Admin = () => {
    const [header, setHeader] = useState("Product")
    const handleChangeHeader = (header:string) => {
        setHeader(header)
    }

    return (
        <Layout style={layoutStyle}>
            <Header header={header} />
            <Layout hasSider>
                <Sider style={siderStyle}>
                    <AdminSider handleChangeHeader={handleChangeHeader} />
                </Sider>
                <Content style={contentStyle}>
                    <Outlet></Outlet>
                </Content>
            </Layout>
            <Footer style={footerStyle}  >DESIGN BY HAI</Footer>
        </Layout>
    )
}

export default Admin