import React from 'react';
import { Button, Form, Image, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ENV_BE } from '../../constands';
import { useNavigate } from 'react-router-dom';
import { postAPILogin } from '../../api';
import Footer from '../../components/layouts/footer/footerComponent';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Register: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: { Username: string, Password: string }) => {
    // Luồng:
    // - Đăng ký xong
    // - push về trang login
    // đăng nhập và lưu token ở localStorage
    const postData = await postAPILogin({
      path: '/auth/register',
      body: {
        username: values.Username,
        password: values.Password,
      }
    });
    console.log('postData: ', postData);

    if (postData.status === 200) { // trang thai API 
      if (postData.data.status === 'success') { // data thang BE tra ve co ok?
        alert("Đăng ký thành công!!!")
        navigate('/login');
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
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 10 }}
            style={{ maxWidth: 600, width: '100%' }}
            validateMessages={validateMessages}
          >

            <Form.Item name={'Username'} label="Username" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={'Password'} label="Password" rules={[{ required: true }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register;