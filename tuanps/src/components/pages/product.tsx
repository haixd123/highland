
import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Image, Input, Modal, Rate, Space, Table, Upload } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import Layouts from "../../components/layouts/admin";
import { styled } from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { getProduct, startCountAction, getListProduct, createProduct } from '../../stores/actions/actionReducers';
import store from '../../stores';
import { ENV_BE } from '../../constants';
import { getAPI } from '../../api';
import Authentication from '../../components/authentication';

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

const ProductPage = () => {
  // const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const [status, setStatus] = useState<STATUS>(STATUS.CREATE);

  const dataRedux: any = useSelector(state => state)

  // const dispatch = useDispatch();
  const data = dataRedux?.productReducer?.products || [];
  const isLoading = dataRedux.productReducer.isLoading || false;

  // console.log('data: ', data);
  

  // call API get list product add redux
  const fetchData = async () => {
    store.dispatch(getListProduct());
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
      // AccountID: Math.floor(Math.random() * 10000), // có thể dùng timestamp để hiển thị giá trị.
      // "Email": "admin" + Date.now() + "@gmail.com",
      // "FullName": "admin" + Date.now(),
      // "Mobile": Math.floor(Math.random() * 10000000000),
      // "Password": "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",
      // "Status": 1
      "ProductId": Math.floor(Math.random() * 10000),
      "ProductName": values.ProductName,
      "ProductPrice": values.ProductPrice,
      "ProductInfo": values.ProductInfo,
      "ProductDetail": values.ProductDetail,
      "RatingStar": values.RatingStar,
      "ProductImageName": values.ProductImageName,
      "ManufacturerId": 1,
      "CategoryId": 1
    }
    const ProductImageName = await values?.ProductImageName;

    newValue.ProductImageName = ProductImageName?.filename || '';

    if (status === STATUS.CREATE) {
      // C1: Khong day vao Redux
      // const response = await axios.post(`${ENV_BE}/account`, newValue);
      // if (response.status === 200) {
      //   // B1: alert
      //   // B2: goi lai ham fetchData()
      //   fetchData();
      // }
      // C2: Đẩy dữ liệu vào redux
      store.dispatch(createProduct(newValue))
    } else {
      console.log('EDIT', newValue);

    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  const handleEditRow = useCallback((record: any) => {
    setStatus(STATUS.EDIT);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  }, [])

  useEffect(() => {
    fetchData();
  }, []);

  const normFile = async (e: any) => {
    console.log('event: ', e);

    if (Array.isArray(e)) {
      return e;
    }
    return e?.file?.response;
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'ProductId',
      key: 'ProductId',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'ProductName',
      key: 'ProductName',
    },
    {
      title: 'Giá',
      dataIndex: 'ProductPrice',
      key: 'ProductPrice', 
    },
    {
      title: 'Thông tin',
      dataIndex: 'ProductInfo',
      key: 'ProductInfo',
    },
    {
      title: 'Chi tiết',
      dataIndex: 'ProductDetail',
      key: 'ProductDetail',
    },
    {
      title: 'Đánh giá',
      dataIndex: 'RatingStar',
      key: 'RatingStar',
      render: (value) => {
        return <Rate disabled defaultValue={value} />
      }
    },
    {
      title: 'Ảnh sản phẩm',
      dataIndex: 'ProductImageName',
      key: 'ProductImageName',
      render: (value) => (
        <Image
          width={100}
          // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          src={`${ENV_BE}/getPhoto/${value}`}
          fallback="data:image/png;base64,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"
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size={'large'}>
          <Button onClick={() => handleEditRow(record)}>Edit</Button>
          <Button type="primary" onClick={() => getAPI({ path: '/account', query: '?a=1&b=2', params: '/123' })} danger>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <StyledButton type='primary' onClick={openCreate}>
        Thêm người dùng
      </StyledButton>
      <Table columns={columns} dataSource={data} bordered loading={isLoading} />
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {
            !(status === STATUS.CREATE) && (
              <Form.Item
                label="ProductId"
                name="ProductId"
                rules={[{ required: true, message: 'Please input your account ID!' }]}
              >
                <Input disabled={true} />
              </Form.Item>
            )
          }
          <Form.Item
            label="ProductName"
            name="ProductName"
            rules={[{ required: true, message: 'Please input your ProductName!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="ProductPrice"
            name="ProductPrice"
            rules={[
              { required: true, message: 'Please input your price!' },
              { max: 20, message: 'Please input your price!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="ProductInfo"
            name="ProductInfo"
            rules={[{ required: true, message: 'Please input your info!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="RatingStar"
            name="RatingStar"
            rules={[{ required: true, message: 'Please input your info!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ProductImageName"
            label="Upload"
            valuePropName="myFile"
            getValueFromEvent={normFile}
          >
            <Upload name="myFile" action={`${ENV_BE}/uploadfile`} listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16 }}>
            <Button style={{ marginRight: 8 }} loading={isLoading} type="primary" htmlType='submit'>Submit</Button>
            <Button onClick={() => form.resetFields()}>Reset</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}


const StyledButton = styled(Button)`
  margin-bottom: 24px;
`;

export default ProductPage;