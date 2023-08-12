import React, { useEffect, useState } from "react";
import { Button, Form, Input, Layout, Modal, Space, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { api } from "../../../api";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import {
  postAPI1,
  getAPI,
  putAPI1,
  deleteAPI1,
} from "../../../store/actions/actionReducers";
import store from "../../../store";

import { useSelector } from "react-redux";
import AdminSider from "../../../components/layouts/admin/adminSider/adminSider";
import { useNavigate } from "react-router";
import '../style1.scss'
import { UserOutlined } from '@ant-design/icons';
import AdminHeader from "../../../components/layouts/admin/adminHeader/adminHeader";


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

const UserAdmin = () => {
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

  const contentStyle: React.CSSProperties = {
    marginLeft: '25px',
    marginTop: '25px'
  }

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#fff",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#53382c",
  };

  return (
    <Layout>
      <AdminHeader title='User' />
      <Layout hasSider>
        <Sider style={siderStyle}>
          <AdminSider />
        </Sider>
        <Content style={contentStyle}>
          <TableUser />
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export const TableUser = () => {
  // const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [searchResult, setSearchResult] = useState([]);

  const dataRedux: any = useSelector((state) => state);
  const data = dataRedux?.productListReducer?.products || [];
  const isLoading = dataRedux.productListReducer.isLoading || false;

  const [status, setStatus] = useState<STATUS>(STATUS.CREATE);
  // const [accountID, setAccountID] = useState()

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Uername",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Telephone",
      dataIndex: "telephone",
      key: "telephone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filters: [
        {
          text: "Ha Noi",
          value: "Ha Noi",
        },
        {
          text: "Ca mau",
          value: "Ca mau",
        },
      ],
      onFilter: (value: any, record: any) => record.address.startsWith(value),
      filterSearch: true,
    },
    {
      title: "action",
      dataIndex: "",
      key: "",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button type="primary" danger onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const fetchData = async () => {
    //Cach 1: Call bang FETCH
    // const response = await fetch("http://localhost:8888/account", {method: 'GET'});
    // const jsonData = await response.json();
    // if (jsonData.status === 'success') {
    //   setData(jsonData.data)
    // }

    // Cach 2: Call bang Axios
    // const response = await api.get("/postsUser");
    // if (response.status === 200) {
    //   console.log("response: ", response.data);
    //   setData(response.data);
    // }
    store.dispatch(getAPI("postsUser"));
  };

  const handleDelete = async (record: any) => {
    store.dispatch(deleteAPI1("postsUser", record.id));

  };


  const onFinish = async (values: any) => {
    const newValue = {
      ...values,
      id: values.id ? values.id : values.id + 1, // có thể dùng timestamp để hiển thị giá trị.
      username: values.username,
      fullname: values.fullname,
      address: values.address,
      telephone: values.telephone,
      email: values.email,
    };
    const handleUserName = data.find((item: any) => (item.username === values.username))
    const handleTelephone = data.find((item: any) => (item.telephone === values.telephone))
    if (status === STATUS.CREATE) {
      if (!handleUserName && !handleTelephone) {
        store.dispatch(postAPI1("postsUser", newValue));
        form.resetFields();
        setIsModalOpen(false);
      }
      else {
        alert('tên đăng nhập hoặc số điện thoại đã bị trùng')
      }
    } else {
      if ((handleUserName && handleTelephone) || (!handleUserName && !handleTelephone)) {
        store.dispatch(putAPI1("postsUser", values.id, newValue));
        form.resetFields();
        setIsModalOpen(false);

      }
      else {
        alert('tên đăng nhập hoặc số điện thoại đã bị trùng')

      }
    }
  };

  const openCreate = () => {
    setIsModalOpen(true);
    setStatus(STATUS.CREATE);
  };

  const handleEdit = async (record: any) => {
    setStatus(STATUS.EDIT);
    form.setFieldsValue(record);
    setIsModalOpen(true);
    console.log("EDIT");
  };

  const handleReset = () => { };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };


  // fetchData();
  useEffect(() => {
    fetchData();

  }, []);


  //!Test search
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const handleSearch = (e: any) => { };

  return (
    <>
      <Button type="primary" onClick={openCreate}>
        Thêm người dùng mới
      </Button>

      <Input.Search
        className="inputSearch"
        onSearch={(value, event) => {
          console.log("value: ", value);
          console.log("event: ", event);

          const newData = data.filter(
            (record: any) => record?.id === parseInt(value)
          );
          setNewData(newData);
        }}
      />

      <Table
        dataSource={newData.length <= 0 ? data : newData}
        onChange={onChange}
        columns={columns}
        bordered
      />
      {/* <ProductPage /> */}
      <Modal
        title={
          status === STATUS.CREATE
            ? "Thêm người dùng mới"
            : "Cập nhật người dùng"
        }
        open={isModalOpen}
        okText="Confirm"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel} danger>
            {" "}
            Cancel{" "}
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={handleCancel}
          autoComplete="off"
        >
          {!(status === STATUS.CREATE) && (
            <Form.Item label="AccountID" name="id">
              <Input disabled={true} />
            </Form.Item>
          )}
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Fullname"
            name="fullname"
            rules={[{ required: true, message: "Please input your fullname!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Telephone"
            name="telephone"
            rules={[
              { required: true, message: "Please input your telephone!" },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item label="Email" name="Email" rules={[{required: true, message: "Please input your username!" }]}>
            <Input />
          </Form.Item> */}
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button style={{ marginRight: 8 }} type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={handleReset}>Reset</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserAdmin;
