import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { postAPI } from '../../api';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: {username: string; password: string}) => {
    const postData = await postAPI({
      path: '/auth/login',
      body: {
        username: values.username,
        password: values.password,
      }
    });

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
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
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
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login;