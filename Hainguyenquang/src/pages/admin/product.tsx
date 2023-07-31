import { Button, Form, Input, Layout, Modal, Select, Space } from "antd";
import Table, { ColumnsType, TableProps } from "antd/es/table";
import { useEffect, useState } from "react";
import { api } from "../../API/axios";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Option } from "antd/es/mentions";
import { postAPI1, getAPI, putAPI1, deleteAPI1 } from "../../store/actions/actionReducers";
import store from '../../store';
import { useSelector } from "react-redux";


enum STATUS {
  EDIT,
  CREATE,
}
interface DataType {
  price: number;
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const ProductAdmin = () => {
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
  
  
  // const dispatch = useDispatch();
  const data = dataRedux?.productListReducer?.products || [];
  const isLoading = dataRedux.productListReducer.isLoading || false;

  console.log('data: ', data);


  const handleOk = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const fetchData = async () => {
    
    // const response = await api.get("/postsProduct");
    // if (response.status === 200) {
    //   setData(response.data);
    // }
    store.dispatch(getAPI('postsProduct'))
  };

  const handleDelete = async (record: any) => {
    // await api.delete(`/postsProduct/${record.id}`);
    // fetchData();
    store.dispatch(deleteAPI1('postsProduct', record.id))
    // console.log('record.id: ', record.id);
    

  };

  const onFinish = async (values: any) => {
    const valuePost = {
      ...values,
      id: values.id + 1, // có thể dùng timestamp để hiển thị giá trị.
      name: values.name,
      desc: values.desc,
      SKU: values.SKU,
      category: values.category,
      price: values.price,
      discount: values.discount,
      remaining: values.remaining,
    };

    const valuePut = {
      ...values,
      id: values.id, // có thể dùng timestamp để hiển thị giá trị.
      name: values.name,
      desc: values.desc,
      SKU: values.SKU,
      category: values.category,
      price: values.price,
      discount: values.discount,
      remaining: values.remaining,
    };

    if (status === STATUS.CREATE) {
      store.dispatch(postAPI1('postsProduct', valuePost));
      // const response = await api.post("/postsProduct", newValue);
      form.resetFields();
      setIsModalOpen(false);
    } else {
      store.dispatch(putAPI1('postsProduct', values.id, valuePut));

      // const response2 = await api.put(`/postsProduct/${values.id}`, values);
      // if (response2.status === 2001) {
      //   console.log("response2", response2.status);
      // }
      // fetchData();
      form.resetFields();
      setIsModalOpen(false);
    }
  };

  const openCreate = () => {
    setIsModalOpen(true);
    setStatus(STATUS.CREATE);
    form.resetFields();

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

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "SKU",
      dataIndex: "SKU",
      key: "SKU",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [
        {
          text: "Tea",
          value: "Tea",
        },
        {
          text: "Coffee",
          value: "Coffee",
        },
      ],
      onFilter: (value: any, record: any) => record.category.startsWith(value),
      filterSearch: true,
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Remaining",
      dataIndex: "remaining",
      key: "remaining",
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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onGenderChange = (value: string) => {
    switch (value) {
      case "Tea":
        form.setFieldsValue({ Category: "Tea" });
        break;
      case "Coffee":
        form.setFieldsValue({ Category: "Coffee" });
        break;
      default:
    }
  };

  const onFinishselect = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
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
          loading={isLoading}
          bordered
        />
      )}
      {!show && (
        <Table
          dataSource={data}
          onChange={onChange}
          loading={isLoading}
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
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "4px" }}
            label="Description"
            name="desc"
            rules={[
              { required: true, message: "Please input your Description!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "4px" }}
            label="SKU"
            name="SKU"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "4px" }}
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input your telephone!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Phân loại"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="Tea">Tea</Option>
              <Option value="Coffee">Coffee</Option>
            </Select>
          </Form.Item>
          {/* <Form.Item
            style={{ marginBottom: "4px" }}
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            style={{ marginBottom: "4px" }}
            label="Discount"
            name="discount"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "14px" }}
            label="Remaining"
            name="remaining"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button style={{ marginRight: 8 }} loading={isLoading} type="primary" htmlType="submit">
              Submit
            </Button>
            <Button>Reset</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProductAdmin;
