import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Layout,
  Modal,
  Space,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
// import Layouts from "../../components/layouts";
// import { styled } from 'styled-components';
import axios from "axios";
import {getValues} from "../API/axios";
import { render } from "@testing-library/react";


enum STATUS {
  EDIT,
  CREATE,
}
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const AdminPage = () => {

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [searchResult, setSearchResult] = useState([])
  
  const [status, setStatus] = useState<STATUS>(STATUS.CREATE);
  // const [accountID, setAccountID] = useState()
  
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "AccountID",
      key: "AccountID",
    },
    {
      title: "Name",
      dataIndex: "Username",
      key: "Username",
    },
    {
      title: "FullName",
      dataIndex: "FullName",
      key: "FullName",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "action",
      dataIndex: "address",
      key: "address",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button type="primary" danger onClick={() => handleDelete(record)}> Delete </Button>
        </>
      ),
    },
  ];

 

  const fetchData = async () => {
    //Cach 1: Call bang FETCH
    // const response = await fetch("http://localhost:8888/account", {method: 'GET'});
    // const jsonData = await response.json();
    // if (jsonData.status === 'success') {
    //   setData(jsonData.data)
    // }

    // Cach 2: Call bang Axios
    const response = await axios.get("http://localhost:8888/account");
    if (response.status === 200) {
      setData(response.data.data);
    }
  };

  const onFinish = async (values: any) => {
      const newValue = {
        ...values,
        AccountID: Math.random(), // có thể dùng timestamp để hiển thị giá trị.
      }
      if (status === STATUS.CREATE) {
      
      const response = await axios.post('http://localhost:8888/account', newValue);
      if (response.status === 200) {
        console.log('response', response);
        // B1: alert  
        // B2: goi lai ham fetchData()
      console.log('CREATE');
        fetchData();
      }
    } else {
//       const AccountID = newValue.AccountID
//       const Username = newValue.Username
//       const FullName = newValue.FullName
//       const Address = newValue.Address
//       const newAdmin = {
//         ...newValue,
//         AccountID,
//         Username,
//         FullName,
// Address
//       }
      // const response = await axios.put(`http://localhost:8888/account/${values.AccountID}`, newAdmin);
      // const {AccountID, Username, FullName, Address} = response.data
      // console.log('values: ', values);
      
      // setData(values.map((miniValues: any) => {
      //   return miniValues.AccountID === AccountID ? {...response.data} : miniValues
      // }))       
        const response2 = await axios.put(`http://localhost:8888/account/${values.AccountID}`, values);
        if(response2.status === 200) {
          console.log('response2', response2.status);
        }
        fetchData();
    }
  };

  const handleDelete = async (record: any) => {
    await axios.delete(`http://localhost:8888/account/${record.AccountID}`);
    fetchData()
    // const newTable = record.filter((record: any) => { 
    //   console.log('record: ', record);
      
    //   return record !== record.AccountID
    // })    
    // setData(newTable)
  };

  const openCreate = () => {
    setIsModalOpen(true);
    setStatus(STATUS.CREATE);
  };

  const handleEdit = async (record: any) => {
    setStatus(STATUS.EDIT);
    form.setFieldsValue(record);
    setIsModalOpen(true);
    // const response =  await axios.get(`http://localhost:8888/account/${record.AccountID}`);
    // if(response.status === 200) {
    //   console.log('respon.get success');
    // }

    console.log('EDIT');
  };

  const handleReset = () => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    // fetchData();
    useEffect(() => {
      fetchData();
    }, []);

    //!Test search
    const [show, setShow] = useState(false)
    const [value, setValue] = useState('')
    const handleSearch = (e:any) => {
    }

  return (
    <>
      <Button type="primary" onClick={openCreate}> Thêm người dùng mới </Button>

      <Input.Search onSearch={(value, event) => {
        console.log('value: ', value);
        console.log('event: ', event);
        data.map((newData:any) => {
          if(value == newData.AccountID) {
            console.log('newData.AccountID: ', newData);
            console.log('data: ', data);
            setNewData(newData)
            setShow(!show)
            }
          })
      }} 
    />
    {show &&  <Table dataSource={newData} columns={columns} bordered />}
    {!show &&  <Table dataSource={data} columns={columns} bordered /> }
        <Modal title={status === STATUS.CREATE ? "Thêm người dùng mới" : "Cập nhật người dùng" }
        open={isModalOpen}
        okText='Confirm'
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
        <Button key="back" type="primary" onClick={handleCancel} danger> Cancel </Button>, 
        ]}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {
            !(status === STATUS.CREATE) && (
          <Form.Item label="AccountID" name="AccountID" >
            <Input disabled={true} />
          </Form.Item>
          )} 
          <Form.Item label="UserName" name="Username" rules={[{required: true, message: "Please input your username!"}]}>
            <Input />
          </Form.Item>
          <Form.Item label="FullName" name="FullName" rules={[{required: true, message: "Please input your password!"}]}>
            <Input />
          </Form.Item>
          {/* <Form.Item label="Email" name="Email" rules={[{required: true, message: "Please input your username!" }]}>
            <Input />
          </Form.Item> */}
          <Form.Item label="Address" name="Address" rules={[{required: true, message: "Please input your username!" }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button style={{ marginRight: 8 }} type="primary" htmlType='submit'>
              Submit
            </Button>
            <Button onClick={handleReset}>Reset</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AdminPage;
