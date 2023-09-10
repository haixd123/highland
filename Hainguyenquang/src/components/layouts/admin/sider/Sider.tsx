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
import './Sider.scss'

const AdminSider = ({ handleChangeHeader }: any) => {
    const navigate = useNavigate();
    return (
        <div className='menuSider'>
            <Menu
                mode="inline"
                onClick={(info) => { navigate(`/${info.key}`)}}
                defaultOpenKeys={['dashboard']}
                items={[
                    {
                        label: 'Home', key: '1', icon: <HomeOutlined />,
                        children: [
                            { label: 'Product', key: '', icon: <ShoppingOutlined /> },
                            { label: 'Content', key: 'content', icon: <SoundOutlined /> },
                            { label: 'News', key: 'news', icon: <ReadOutlined /> },
                        ]
                    }

                ]}
            >
            </Menu>
            <Menu
                mode="inline"
                onClick={(info) => { navigate(`${info.key}`); handleChangeHeader(`${info.key}`) }}
                defaultOpenKeys={['dashboard']}
                items={[
                    
                    {
                        label: 'Admin', key: '2', icon: <DashboardOutlined />,
                        children: [
                            { label: 'Product', key: 'product', icon: <ShoppingOutlined /> },
                            { label: 'User', key: 'user', icon: <IdcardOutlined /> },
                            { label: 'News', key: 'news', icon: <ReadOutlined /> },
                        ]
                    },

                ]}
            >
            </Menu>
        </div>
    )
}

export default AdminSider