import React, { useEffect, useState } from "react";
import { Button, Form, Input, Layout, Modal, Space, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { api } from "../../API/axios";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";

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
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };

  return (
    <Layout>
      <Header style={headerStyle}>User</Header>
      <Layout hasSider>
        <Sider
          style={
            // { height: "100%", backgroundColor: "#fff" }
            siderStyle
          }
        >
          <div style={{ margin: "15px auto" }}>
            <a style={{ color: "#fff" }} href="../home">
              Home
            </a>
          </div>
          <div style={{ margin: "15px auto" }}>
            <a style={{ color: "#fff" }} href="../admin">
              Admin
            </a>
          </div>
          <div style={{ margin: "15px auto" }}>
            <a style={{ color: "#fff" }} href="user">
              User
            </a>
          </div>
          {/* <HeaderMenu /> */}
          <div style={{ margin: "15px auto" }}>
            <a style={{ color: "#fff" }} href="product">
              Product
            </a>
          </div>
          <div style={{ margin: "15px auto" }}>
            <a style={{ color: "#fff" }} href="news">
              News
            </a>
          </div>
          {/* <HeaderMenu /> */}
        </Sider>
        <Content>
          <TableUser />
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export const TableUser = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [searchResult, setSearchResult] = useState([]);

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


  const [a,setA] = useState([])

  const fetchData = async () => {
    //Cach 1: Call bang FETCH
    // const response = await fetch("http://localhost:8888/account", {method: 'GET'});
    // const jsonData = await response.json();
    // if (jsonData.status === 'success') {
    //   setData(jsonData.data)
    // }

    // Cach 2: Call bang Axios
    const response = await api.get("/postsUser");
    if (response.status === 200) {
      console.log("response: ", response.data);
      setData(response.data);
    }
  };

//   const test:any = data.map((data1: any) => {
//     return data1.username + ','
//   });
// console.log('a: ', test);

  

  const onFinish = async (values: any) => {
    const newValue = {
      ...values,
      id: values.id + 1, // có thể dùng timestamp để hiển thị giá trị.
    };
    if (status === STATUS.CREATE) {
        const response = await api.post("/postsUser", newValue);
        if (response.status === 201) {
          // B1: alert
          // B2: goi lai ham fetchData()
          fetchData();
          form.resetFields();
          setIsModalOpen(false);
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
      const response2 = await api.put(`/postsUser/${values.id}`, values);
      if (response2.status === 200) {
      }
      fetchData();
      form.resetFields();
      setIsModalOpen(false);
    }
  };

  const handleDelete = async (record: any) => {
    await api.delete(`/postsUser/${record.id}`);
    fetchData();
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

    console.log("EDIT");
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
    form.resetFields();
  };

  // fetchData();
  useEffect(() => {
    fetchData();
  }, []);

  //!Test search
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const handleSearch = (e: any) => {};

  return (
    <>
      <Button type="primary" onClick={openCreate}>
        Thêm người dùng mới
      </Button>

      <Input.Search
        onSearch={(value, event) => {
          console.log("value: ", value);
          console.log("event: ", event);

          const newData = data.filter(
            (record: any) => record?.id === parseInt(value)
          );
          setNewData(newData);
          if (!show) {
            console.log("show: ", show);

            setShow(!show);
            console.log("show: ", show);
          }

          // if (value == "") {
          //   setShow(show);
          //   console.log("show: ", show);
          // }

          // data.map((newData:any) => {
          //   if(value == newData.AccountID) {
          //     console.log('newData.AccountID: ', newData);
          //     console.log('data: ', data);
          //     setNewData(newData)
          //     setShow(!show)
          //     }
          //   })
        }}
      />
      {show && (
        <Table
          dataSource={newData}
          onChange={onChange}
          columns={columns}
          bordered
        />
      )}
      {!show && (
        <Table
          dataSource={data}
          onChange={onChange}
          columns={columns}
          bordered
        />
      )}
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
