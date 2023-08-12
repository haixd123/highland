import React from 'react';
import { Button, Checkbox, Form, Image, Input, Layout } from 'antd';
import { getAPILogin, postAPI } from '../../api';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constands';
import Footer from '../../components/layouts/home/footer/footerComponent';
import Admin from '../admin';

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: { username: string; password: string }) => {
    const postData = await postAPI({
      path: '/auth/login',
      body: {
        username: values.username,
        password: values.password,
      }

    });

    console.log('postData: ', postData)

    if (postData.status === 200) { // trang thai API 
      if (postData.data.msg === 'Đăng nhập thành công.') { // data thang BE tra ve co ok?

        const accessToken = postData.data.accessToken;
        const refreshToken = postData.data.refreshToken;

        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
        alert(postData.data.msg);
        navigate('/admin');
      }
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: "#b22830", minHeight: "120px", display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: "110px", marginLeft: '138px' }}>
          <a>
            <Image
              style={{ maxWidth: "100%" }}
              src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"
            />
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center', width: '100%', backgroundColor: '#fff', margin: 'auto', height: '511px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', margin: '0 0 25px 50px', width: '100%' }}>
          <Button onClick={() => navigate('/login')} style={{ width: '125px' }}>Đăng nhập</Button>
          <Button onClick={() => navigate('/register')} style={{ width: '125px' }}>Đăng ký</Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 10 }}
            style={{ maxWidth: 600, width: '100%' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login;