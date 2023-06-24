
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Modal, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Layouts from "../../components/layouts";
import { styled } from 'styled-components';
import axios from 'axios';

enum STATUS {
  EDIT,
  CREATE
}
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const [status, setStatus] = useState<STATUS>(STATUS.CREATE)

  const fetchData = async () => {
    //Cach 1: Call bang FETCH 
    // const response = await fetch("http://localhost:8888/account", {method: 'GET'});
    // const jsonData = await response.json();
    // if (jsonData.status === 'success') {
    //   setData(jsonData.data)
    // }

    // Cach 2: Call bang Axios
    const response = await axios.get('http://localhost:8888/account');
    if (response.status === 200) {
      setData(response.data.data);
    }
  }


  const openCreate = () => {
    setIsModalOpen(true);
    setStatus(STATUS.CREATE);
    form.resetFields();
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values: any) => {
    const newValue = {
      ...values,
      AccountId: Math.random(), // có thể dùng timestamp để hiển thị giá trị.
    }
    if (status === STATUS.CREATE) {
      console.log('CREATE');
      const response = await axios.post('http://localhost:8888/account', newValue);
      if (response.status === 200) {
        // B1: alert
        // B2: goi lai ham fetchData()
        fetchData();
      }
    } else {
      console.log('EDIT');

    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleEditRow = (record: any) => {
    setStatus(STATUS.EDIT);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'AccountID',
      key: 'AccountID',
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'Username',
      key: 'Username',
    },
    {
      title: 'Tên đầy đủ',
      dataIndex: 'FullName',
      key: 'FullName',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'Address',
      key: 'Address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size={'large'}>
          <Button onClick={() => handleEditRow(record)}>Edit</Button>
          <Button type="primary" danger>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Layouts>
      <StyledButton type='primary' onClick={openCreate}>
        Thêm người dùng
      </StyledButton>
      <Table columns={columns} dataSource={data} bordered />
      <Modal title={status === STATUS.CREATE ? 'Thêm người dùng mới' : 'Cập nhật người dùng'} open={isModalOpen} okText='Confirm' 
      footer={[
        <Button key="back" type='primary' onClick={handleCancel} danger>
          Cancel
        </Button>,
      ]} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          // initialValues={{ AccountID: 1 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {
            !(status === STATUS.CREATE) && (
              <Form.Item
                label="AccountID"
                name="AccountID"
                rules={[{ required: true, message: 'Please input your account ID!' }]}
              >
                <Input disabled={true} />
              </Form.Item>
            )
          }
          <Form.Item
            label="UserName"
            name="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="FullName"
            name="FullName"
            rules={[
              { required: true, message: 'Please input your full name!' },
              { max: 20, message: 'Please input your full name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="Address"
            rules={[{ required: true, message: 'Please input your Address!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16 }}>
            <Button style={{ marginRight: 8 }} type="primary" htmlType='submit'>Submit</Button>
            <Button onClick={() => form.resetFields()}>Reset</Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layouts>
  )
}


const StyledButton = styled(Button)`
  margin-bottom: 24px;
`;

export default HomePage;