import { Button, Form, Input, Layout, Modal, Space } from "antd";
import Table, { ColumnsType, TableProps } from "antd/es/table";
import { useEffect, useState } from "react";
import { api } from "../../API/axios";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import store from '../../store';
import { postAPI1, getAPI, putAPI1, deleteAPI1 } from "../../store/actions/actionReducers";
import { useSelector } from "react-redux";


enum STATUS {
  EDIT,
  CREATE,
}
interface DataType {
  date: Date;
  comment: number;
  like: number;
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const NewsAdmin = () => {
  // const [accountID, setAccountID] = useState()

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
      <Header style={headerStyle}>Product</Header>
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
          <TableProduct />
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export const TableProduct = () => {
  // const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [status, setStatus] = useState<STATUS>(STATUS.CREATE);
  const [show, setShow] = useState(false);

  const dataRedux: any = useSelector(state => state)
  const data = dataRedux?.productListReducer?.products || [];
  const isLoading = dataRedux.productListReducer.isLoading || false;

  const handleOk = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const fetchData = async () => {
    store.dispatch(getAPI('postsNews'))
  };

  const handleDelete = async (record: any) => {
    store.dispatch(deleteAPI1('postsNews', record.id))
  };

  const onFinish = async (values: any) => {
    const valuePost = {
      ...values,
      id: values.id + 1, // có thể dùng timestamp để hiển thị giá trị.
      src: values.src,
      content: values.content,
    };
    const valuePut = {
      ...values,
      id: values.id, // có thể dùng timestamp để hiển thị giá trị.
      src: values.src,
      content: values.content,
    };
    
    if (status === STATUS.CREATE) {
      store.dispatch(postAPI1('postsNews', valuePost));
        form.resetFields();
        setIsModalOpen(false);
    } else {
      store.dispatch(putAPI1('postsNews', values.id, valuePut));
      form.resetFields();
      setIsModalOpen(false);
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

  useEffect(() => {
    fetchData();
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "decontentsc",
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
      // sorter: (a, b) => a.date - b.date,
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
      sorter: (a, b) => a.comment - b.comment,
    },
    {
      title: "Like",
      dataIndex: "like",
      key: "like",
      sorter: (a, b) => a.like - b.like,
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
      <Modal
        title={
          status === STATUS.CREATE
            ? "Thêm người dùng mới"
            : "Cập nhật người dùng"
        }
        open={isModalOpen}
        okText="Confirm"
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel} danger>
            Cancel
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
          autoComplete="off"
          onFinishFailed={handleCancel}
        >
          {!(status === STATUS.CREATE) && (
            <Form.Item label="AccountID" name="id">
              <Input disabled={true} />
            </Form.Item>
          )}
          <Form.Item
            style={{ marginBottom: "4px" }}
            label="Content"
            name="content"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "4px" }}
            label="Src"
            name="src"
            rules={[{ required: true, message: "Please input your fullname!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button style={{ marginRight: 8 }} type="primary" htmlType="submit">
              Submit
            </Button>
            <Button>Reset</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewsAdmin;
