import { Button, Empty, Form, Image, Input, Layout, Modal, Popconfirm, Select, Space, Upload } from "antd";
import Table, { ColumnsType, TableProps } from "antd/es/table";
import { useEffect, useState } from "react";
import { Option } from "antd/es/mentions";
import { postAPI1, getAPI, putAPI1, deleteAPI1 } from "../../../../store/actions/actionReducers";
import store from "../../../../store";
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import './Product.scss'
import Search from "antd/es/input/Search";


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
  const dataRedux: any = useSelector(state => state)

  const data = dataRedux?.productListReducer?.products || [];

  const isLoading = dataRedux.productListReducer.isLoading || false;
  const [newData, setNewData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [status, setStatus] = useState<STATUS>(STATUS.CREATE);
  const [show, setShow] = useState(false);
  const [idImage, setIdImage] = useState(0)
  const [openModal2, setOpenModal2] = useState(false);
  const [newDataEdit, setNewDataEdit] = useState<any>([])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
  });

  const onFinish = async (values: any) => {
    const srcImage = await values?.srcImage;
    values.srcImage = srcImage?.filename || values.srcImage;
    const newValue = {
      ...values,
      id: values.id ? values.id : values.id + 1,
      name: values.name,
      desc: values.desc,
      SKU: values.SKU,
      category: values.category,
      price: values.price,
      discount: Number(values.discount) ? values.discount : 30,
      remaining: Number(values.remaining) ? values.remaining : 99,
      srcImage: values.srcImage,
      quantity: 1
    };

    const handleName = data.filter((item: any) => item.name === newValue.name).length
    const handleSKU = data.filter((item: any) => item.SKU === newValue.SKU).length


    if (status === STATUS.CREATE) {
      if (!handleName && !handleSKU) {
        store.dispatch(postAPI1('postsProduct', newValue));
        setIsModalOpen(false);
        form.resetFields();
      } else {
        alert('tên sản phẩm hoặc phân loại sản phẩm đã bị trùng')
      }
    } else {
      const a = newDataEdit.filter((el: any) => el.name === newValue.name).length;
      const b = newDataEdit.filter((el: any) => el.SKU === newValue.SKU).length
      console.log('length: ', a);

      if (a > 0 || b > 0) {
        alert('tên sản phẩm hoặc phân loại sản phẩm đã bị trùng')
      } else {
        console.log('values.id: ', values.id);
        store.dispatch(putAPI1('postsProduct', values.id, newValue));
        setIsModalOpen(false);
        form.resetFields();
      }
    }
  };

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
    store.dispatch(getAPI('postsProduct'))
  };

  const handleDelete = async (record: any) => {
    store.dispatch(deleteAPI1('postsProduct', record.id))
  };

  useEffect(() => {
    fetchData();

  }, []);

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
    setIdImage(record.id)
    setNewDataEdit(data.filter((el: any) => el.id !== record.id))
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

  const cancel = (e: any) => {
    console.log(e);
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
      sorter: (a: any, b: any) => Number(a.price.replace(/₫|,/g, '')) - Number(b.price.replace(/₫|,/g, '')),
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
                return record?.id === parseInt(value.target.value) || record?.SKU.toUpperCase().includes(value.target.value.toUpperCase())
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
        rowKey={'id'}
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
              {!(status === STATUS.CREATE) && data.map((record: any) => {
                if (record.id === idImage) {
                  return <Image key={record.id} placeholder={true} preview={false} style={{ height: '300px', width: '300px', margin: '0 50px 15px 0 ' }} src={`http://localhost:8888/getPhoto/${record.srcImage}`} />
                }
                return null
              })}
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
    </>
  );
};

export default ProductAdmin;
