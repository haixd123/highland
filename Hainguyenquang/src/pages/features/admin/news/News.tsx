import { Button, Empty, Form, Image, Input, Modal, Popconfirm, Upload } from "antd";
import Table, { ColumnsType, TableProps } from "antd/es/table";
import { useEffect, useState } from "react";
import store from '../../../../store';
import { postAPI1, getAPI, putAPI1, deleteAPI1 } from "../../../../store/actions/actionReducers";
import { useSelector } from "react-redux";
import { UploadOutlined } from '@ant-design/icons';
import Search from "antd/es/input/Search";
import './News.scss'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



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
  const [newData, setNewData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [status, setStatus] = useState<STATUS>(STATUS.CREATE);
  const [idImage, setIdImage] = useState(0)
  const [show, setShow] = useState(false);
  const [newDataEdit, setNewDataEdit] = useState<any>([])
  const dataRedux: any = useSelector(state => state)
  const data = dataRedux?.productListReducer?.products || [];
  const isLoading = dataRedux.productListReducer.isLoading || false;
  const [textEditor, setTextEditor] = useState("")

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleDelete = async (record: any) => {
    store.dispatch(deleteAPI1('postsNews', record.id))
  };

  const handleEdit = async (record: any) => {
    setStatus(STATUS.EDIT);
    form.setFieldsValue(record);
    setIsModalOpen(true);
    setIdImage(record.id)
    setNewDataEdit(data.filter((el: any) => el.id !== record.id))
    setTextEditor(record.content)

    console.log('record: ', record);

  };

  const normFile = async (e: any) => {
    console.log('event: ', e);

    if (Array.isArray(e)) {
      return e;
    }
    return e?.file?.response;
  };

  const onFinish = async (values: any) => {
    const srcImage = await values?.srcImage;
    console.log('srcImage: ', srcImage);
    values.srcImage = srcImage?.filename || values.srcImage;
    const newValue = {
      ...values,
      id: values.id ? values.id : values.id + 1,
      comment: values.comment,
      like: values.like,
      date: values.date,
      content: textEditor,
      title: values.title,
      slug: values.slug,
      srcImage: values.srcImage,
    };

    const handleTitle = data.filter((item: any) => item.title.toUpperCase() === newValue.title.toUpperCase()).length
    const handleSlug = data.filter((item: any) => item.slug.toUpperCase() === newValue.slug.toUpperCase()).length
    if (status === STATUS.CREATE) {
      if (!handleTitle && !handleSlug) {
        store.dispatch(postAPI1('postsNews', newValue));
        form.resetFields();
        setIsModalOpen(false);
      } else {
        alert('Tiêu đề hoặc tên miền đã tồn tại')
      }
    } else {
      const a = newDataEdit.filter((el: any) => el.title.toUpperCase() === newValue.title.toUpperCase()).length;
      const b = newDataEdit.filter((el: any) => el.slug.toUpperCase() === newValue.slug.toUpperCase()).length
      if (a > 0 || b > 0) {
        alert('Tiêu đề hoặc tên miền đã tồn tại')
      } else {
        console.log('values.id: ', values.id);
        store.dispatch(putAPI1('postsNews', values.id, newValue));
        form.resetFields();
        setIsModalOpen(false);
      }
    }
  };

  const openCreate = () => {
    setIsModalOpen(true);
    setTextEditor('')
    setStatus(STATUS.CREATE);
  };

  const cancel = (e: any) => {
    console.log(e);
  };

  const fetchData = async () => {
    store.dispatch(getAPI('postsNews'))
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
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
    },
    // {
    //   title: "Content",
    //   dataIndex: "content",
    //   key: "content",
    // },
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
      <div className="Search">

        <Button type="primary" onClick={openCreate}>
          Thêm người dùng mới
        </Button>

        <Search
          className="inputSearch"
          onChange={(value: any) => {
            const searchData = data.filter(
              (record: any) => {
                return record?.slug.toUpperCase().includes(value.target.value.toUpperCase()) || record?.title.toUpperCase().includes(value.target.value.toUpperCase())
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
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "4px" }}
            label="Slug"
            name="slug"
            rules={[{ required: true, message: "Please input your slug!" }]}
          >
            <Input />
          </Form.Item>
          <CKEditor
            editor={ClassicEditor}
            data={textEditor}
            onReady={editor => {
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setTextEditor(data)
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
          <Form.Item
            style={{ marginBottom: "4px" }}
            label="comment"
            name="comment"
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "4px" }}
            label="like"
            name="like"
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "4px" }}
            label="date"
            name="date"
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
                  return <Image key={record.id} placeholder={true} preview={false} style={{ margin: '0 50px 15px 0 ' }} src={`http://localhost:8888/getPhoto/${record.srcImage}`} />
                }
                return null
              })}
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
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
