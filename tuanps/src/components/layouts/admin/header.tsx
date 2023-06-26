import { Layout, Menu, MenuProps } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

const items1: MenuProps['items'] = ['Home', 'Admin', 'Blog'].map((key) => ({
    key,
    label: <NavLink to={'/admin'} className={'test-abc'}>{key}</NavLink>,
  }));

const HeaderComponent: React.FC = () => {
    return <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
}

export default HeaderComponent;