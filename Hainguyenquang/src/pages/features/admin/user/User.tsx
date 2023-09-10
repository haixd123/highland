import React, { useEffect, useState } from "react";
import { Button, Empty, Form, Input, InputNumber, Modal, Popconfirm, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import {
  postAPI1,
  getAPI,
  putAPI1,
  deleteAPI1,
} from "../../../../store/actions/actionReducers";
import store from "../../../../store";
import { useSelector } from "react-redux";
import './User.scss'
import Search from "antd/es/input/Search";


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

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} is not a valid number!',
  },
};

const UserAdmin = () => {
  const [newData, setNewData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dataRedux: any = useSelector((state) => state);
  const data = dataRedux?.productListReducer?.products || [];
  const isLoading = dataRedux.productListReducer.isLoading || false;
  const [newDataEdit, setNewDataEdit] = useState<any>([])
  const [status, setStatus] = useState<STATUS>(STATUS.CREATE);
  const [show, setShow] = useState(false);

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
    const handleUserName = data.find((item: any) => (item.username.toUpperCase() === values.username.toUpperCase()))
    const handleTelephone = data.find((item: any) => (item.telephone.toUpperCase() === values.telephone.toUpperCase()))

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
      const a = newDataEdit.filter((el: any) => el.username.toUpperCase() === newValue.username.toUpperCase()).length;
      const b = newDataEdit.filter((el: any) => el.telephone.toUpperCase() === newValue.telephone.toUpperCase()).length

      if (a > 0 || b > 0) {
        alert('tên đăng nhập hoặc số điện thoại đã bị trùng')
      } else {
        console.log('values.id: ', values.id);
        store.dispatch(putAPI1('postsUser', values.id, newValue));
        form.resetFields();
        setIsModalOpen(false);
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
    setNewDataEdit(data.filter((el: any) => el.id !== record.id))

  };

  const handleReset = () => { };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const cancel = (e: any) => {
    console.log(e);
  };


  useEffect(() => {
    fetchData();
  }, []);

  const filterAddress = data.map((record: any) => {
    return {
      text: `${record.address}`,
      value: `${record.address}`
    }
  })

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
      filters: filterAddress.filter((record: any) => {
        return record.value
      }),
      onFilter: (value: any, record: any) => {
        return record.address.startsWith(value)
      },
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
          <Popconfirm
            title="Delete the task"
            description="Bạn muốn xóa sản phẩm?"
            onConfirm={() => { handleDelete(record) }}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger >Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];



  return (
    <>
      <div className="Search">

        <Button type="primary" onClick={openCreate}>
          Thêm người dùng mới
        </Button>
        <Search
          className="inputSearch"
          onChange={(value: any) => {
            const searchData = data.filter(
              (record: any) => {

                return record?.telephone.toUpperCase().includes(value.target.value.toUpperCase()) || record?.username.toUpperCase().includes(value.target.value.toUpperCase())
              }
            );
            if (searchData.length > 0) {
              setShow(false)
              setNewData(searchData);
            }
            else {
              if (!value.target.value) {
                setShow(false)
                setNewData(data)
              }
              else {
                setShow(true)
              }
            }
          }} />
      </div>
      {!show && <Table
        dataSource={newData.length === 0 ? data : newData}
        onChange={onChange}
        loading={isLoading}
        columns={columns}
        bordered
      />}
      {show && <Empty />}

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
          onFinish={onFinish}
          onFinishFailed={handleCancel}
          autoComplete="off"
          validateMessages={validateMessages}
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
            rules={[{ required: true, message: "Please input your email!"}]}
          // rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Telephone"
            name="telephone"
            rules={[{ required: true, message: "Please input your telephone!"}]}
          // rules={[
          //   { required: true, message: "Please input your telephone!" },
          // ]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>

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
