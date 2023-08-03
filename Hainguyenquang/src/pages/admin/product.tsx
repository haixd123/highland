import { Button, Form, Image, Input, Layout, Modal, Select, Space, Upload } from "antd";
import Table, { ColumnsType, TableProps } from "antd/es/table";
import { useEffect, useState } from "react";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Option } from "antd/es/mentions";
import { postAPI1, getAPI, putAPI1, deleteAPI1 } from "../../store/actions/actionReducers";
import store from '../../store';
import { UploadOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import AdminSider from "../../components/layouts/adminSider/adminSider";
import Admin from "./admin";

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
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
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
        <Sider style={siderStyle}>
          <AdminSider />
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
  // const dispatch = useDispatch();
  const dataRedux: any = useSelector(state => state)

  const data = dataRedux?.productListReducer?.products || [];

  const isLoading = dataRedux.productListReducer.isLoading || false;
  const [newData, setNewData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [status, setStatus] = useState<STATUS>(STATUS.CREATE);
  const [show, setShow] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
    setOpenModal2(false);
    form.resetFields();
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


  //Handle form edit
  // const [modalText, setModalText] = useState('tên hoặc phân loại sản phẩm đã bị trùng, bạn có muốn cập nhật không?')
  // const [newValue2, setNewValue2] = useState([])
  // const handlePutProduct = (newValue:any) => {
  //   setNewValue2(newValue)
  //   console.log('newValue2: ', newValue2);
  //   newValue2.map((newValue:any) => store.dispatch(putAPI1('postsProduct', newValue.id, newValue)))
  //   // store.dispatch(putAPI1('postsProduct', newValue.id, newValue));
  // }
  // const handleOk = () => {
  //   setOpenModal2(false);
  //   setConfirmLoading(false);
  //   // handlePutProduct(newValue)
  //   // store.dispatch(putAPI1('postsProduct', newValue2.id, newValue2));

  // };

  useEffect(() => {
    fetchData();

  }, []);

  const onFinish = async (values: any) => {
    const srcImage = await values?.srcImage;
    console.log('srcImage: ', srcImage);
    values.srcImage = srcImage?.filename || values.srcImage;
    const newValue = {
      ...values,
      id: values.id ? values.id : values.id + 1, // có thể dùng timestamp để hiển thị giá trị.
      name: values.name,
      desc: values.desc,
      SKU: values.SKU,
      category: values.category,
      price: values.price,
      discount: values.discount,
      remaining: values.remaining,
      srcImage: values.srcImage
    };

    const handleName = data.find((item: any) => (item.name === values.name))
    const handleSKU = data.find((item: any) => (item.SKU === values.SKU))
    console.log('handleName: ', handleName);
    console.log('handleSKU: ', handleSKU);

    if (status === STATUS.CREATE) {
      if (!handleName && !handleSKU) {
        store.dispatch(postAPI1('postsProduct', newValue));
        form.resetFields();
        setIsModalOpen(false);
      } else {
        alert('tên sản phẩm hoặc phân loại sản phẩm đã bị trùng')

      }

    } else {
      if ((handleName && handleSKU) || (!handleName && !handleSKU)) {
        store.dispatch(putAPI1('postsProduct', values.id, newValue));
        form.resetFields();
        setIsModalOpen(false);
      }
      // else if(!handleName && !handleSKU) {
      //   store.dispatch(putAPI1('postsProduct', values.id, newValue));
      //   form.resetFields();
      //   setIsModalOpen(false);
      // }
      else {
        // setOpenModal2(true);
        alert('tên sản phẩm hoặc phân loại sản phẩm đã bị trùng')
      }
      // const response2 = await api.put(`/postsProduct/${values.id}`, values);
      // if (response2.status === 2001) {
      //   console.log("response2", response2.status);
      // }
      // fetchData();
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



  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const normFile = async (e: any) => {
    console.log('event: ', e);

    if (Array.isArray(e)) {
      return e;
    }
    return e?.file?.response;
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
      title: 'Ảnh sản phẩm',
      dataIndex: 'srcImage',
      key: 'srcImage',
      render: (value) => (
        <Image
          width={100}
          // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          src={`http://localhost:8888/getPhoto/${value}`}
          fallback="data:image/png;base64,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"
        />
      ),
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



  return (
    <>
      <Button type="primary" onClick={openCreate}>
        Thêm người dùng mới
      </Button>

      <Input.Search
        onSearch={(value, event) => {


          const newData = data.filter(
            (record: any) => record?.id === parseInt(value)
          );
          setNewData(newData);

          // if (!show) {
          //   console.log("show: ", show);

          //   setShow(!show);
          //   console.log("show: ", show);
          // }
        }}
      />
      {/* {show && (
        <Table
          dataSource={data}
          onChange={onChange}
          columns={columns}
          loading={isLoading}
          bordered+
        />
      )} */}
      <Table
        dataSource={newData.length <= 0 ? data : newData}
        onChange={onChange}
        loading={isLoading}
        columns={columns}
        bordered
      />
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
          <Form.Item
            name="srcImage"
            label="Upload"
            valuePropName="myFile"
            getValueFromEvent={normFile}
          >
            <Upload name="myFile" action={'http://localhost:8888/uploadfile'} listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button style={{ marginRight: 8 }} loading={isLoading} type="primary" htmlType="submit">
              Submit
            </Button>
            <Button>Reset</Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* <Modal
        title="Title"
        open={openModal2}
        onOk={handleOk}
        // onOk={updateHandleNameAndHandleSKU}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal> */}
    </>
  );
};

export default ProductAdmin;
