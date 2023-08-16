import {
    IdcardOutlined,
    ShoppingOutlined,
    DashboardOutlined,
    HomeOutlined,
    ReadOutlined,
    SoundOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router';

const AdminSider = () => {
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Menu
                mode="inline"
                onClick={(info) => { navigate(`/${info.key}`) }}
                defaultOpenKeys={['dashboard']}
                items={[
                    {
                        label: 'Home', key: '1', icon: <HomeOutlined />,
                        children: [
                            { label: 'Product', key: 'home', icon: <ShoppingOutlined /> },
                            { label: 'Content', key: 'content', icon: <SoundOutlined /> },
                            { label: 'News', key: 'news', icon: <ReadOutlined /> },
                        ]
                    },
                    {
                        label: 'Admin', key: '2', icon: <DashboardOutlined />,
                        children: [
                            { label: 'Product', key: 'admin/product', icon: <ShoppingOutlined /> },
                            { label: 'User', key: 'admin/user', icon: <IdcardOutlined /> },
                            { label: 'News', key: 'admin/news', icon: <ReadOutlined /> },
                        ]
                    },

                ]}
            >
            </Menu>
        </div>
    )
}

export default AdminSider