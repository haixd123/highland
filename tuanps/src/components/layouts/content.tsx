import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React, { ReactNode, ReactPropTypes } from 'react';

const { Content, Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const ContentComponent = ({ children }: { children: ReactNode }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
            <Sider style={{ background: colorBgContainer }} width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: 'calc(100vh - 200px)' }}
                    items={items2}
                />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
        </Layout>
    </Content>
}

export default ContentComponent;