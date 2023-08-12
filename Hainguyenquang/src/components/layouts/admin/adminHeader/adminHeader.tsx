import { Image } from "antd";
import { Header } from "antd/es/layout/layout";
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router";



const AdminHeader = (props:any) => {
    const navigate = useNavigate();

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

    return (
        <Header style={headerStyle}>
            <div style={{ maxWidth: "70px" }}>
                <Image
                    placeholder={true} preview={false}
                    style={{ maxWidth: "100%", backgroundColor: 'transparent' }}
                    src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"
                />
            </div>
            <div style={{ width: '100%' }}>{props.title}</div>
            <div>
                <div className="">
                    <div className="icon1">
                        <a className="iconLink1">
                            <div>
                                <UserOutlined />
                            </div>
                        </a>
                        <div className="blockUser1">
                            <a className="blockUserItemLink1">
                                <div className="blockUserItem1">
                                    Tài khoản của tôi
                                </div>
                            </a>
                            <a className="blockUserItemLink1">
                                <div className="blockUserItem1">
                                    Đơn mua
                                </div>
                            </a>
                            <a className="blockUserItemLink1" onClick={() => { navigate('/login'); localStorage.removeItem('access-token'); localStorage.removeItem('refresh-token') }}>
                                <div className="blockUserItem1">
                                    Đăng xuất
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default AdminHeader