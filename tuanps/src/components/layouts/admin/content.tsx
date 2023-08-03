import { Breadcrumb, Layout, Menu, Table, theme } from 'antd';
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, DashboardOutlined } from '@ant-design/icons';
import React, { ReactNode, ReactPropTypes } from 'react';
import { useLocation } from 'react-router-dom';

const { Content, Sider } = Layout;

const items2: MenuProps['items'] = [DashboardOutlined, UserOutlined, LaptopOutlined, NotificationOutlined].map(
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

    const { pathname } = useLocation();

    console.log('pathname: ', pathname);

    const listBreadcrumb = pathname.split('/')


    return <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
            {
                listBreadcrumb.map((el, index, array) => (
                    el.length ? <Breadcrumb.Item href={array.map((lst, i) => )}>{el}</Breadcrumb.Item> : null
                ))
            }
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Breadcrumb items={listBreadcrumb.map(el => ({ path: `/${el}`, breadcrumbName: el }))} />

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
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                {children}
            </Content>

        </Layout>
    </Content>
}

export default ContentComponent;