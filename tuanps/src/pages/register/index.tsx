import React from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ENV_BE } from '../../constants';
import { postAPI } from '../../api';

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

const onFinish = async (values: any) => {
    console.log(values);
    const postData = await postAPI({
        path: '/account',
        body: {
            ...values,
            AvatarImageName: values.AvatarImageName.file.response,
        }
    });
    // SUCCESS
    // get Token
    // save localStorage
    // push /admin
};

const Register: React.FC = () => (
    <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
    >
        <Form.Item name={['FullName', 'FullName']} label="FullName" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name={['Username', 'Username']} label="Username" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name={['Email', 'Email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
        </Form.Item>
        <Form.Item name={['Password', 'Password']} label="Password" rules={[{ required: true }]}>
            <Input type='password' />
        </Form.Item>
        <Form.Item name={['Mobile', 'Mobile']} label="Mobile">
            <Input />
        </Form.Item>
        <Form.Item
            name="AvatarImageName"
            label="Upload"
            valuePropName="myFile"
        // getValueFromEvent={normFile}
        >
            <Upload name="myFile" action={`${ENV_BE}/uploadfile`} listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);

export default Register;