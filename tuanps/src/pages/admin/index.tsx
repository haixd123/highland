import { styled } from "styled-components";
import Layouts from "../../components/layouts";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Form, Modal, Table } from "react-bootstrap";
import * as formik from 'formik';
import * as yup from 'yup';
import FormControlInput from "../../components/forms/Input";

enum STATUS {
  EDIT,
  CREATE
}

const Admin = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    Username: yup.string().required(),
    FullName: yup.string().required(),
    Address: yup.string().required(),
  });

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [valueForm, setValueForm] = useState<any>();
  const [status, setStatus] = useState<STATUS>(STATUS.CREATE)

  const fetchData = async () => {
    //Cach 1: Call bang FETCH 
    // const response = await fetch("http://localhost:8888/account", {method: 'GET'});
    // const jsonData = await response.json();
    // if (jsonData.status === 'success') {
    //   setData(jsonData.data)
    // }

    // Cach 2: Call bang Axios
    const response = await axios.get('http://localhost:8888/account');
    if (response.status === 200) {
      setData(response.data.data);
    }
  }

  const handleCreate = () => {
    setShow(true)
    setStatus(STATUS.CREATE);
    setValueForm({})
  }

  const handleEdit = (record: any) => {
    console.log('record', record);
    setValueForm(record)
    setStatus(STATUS.EDIT);
    setShow(true)
  }

  const handleClose = () => setShow(false);

  const handleChangeValue = (event: any) => {
    setValueForm({
      ...valueForm,
      [`${event.target.id}`]: event.target.value,
    });
  }

  const handleSubmitForm = (value: any) => {

    console.log('value: ', value);

  }

  const renderControlForm = ({ handleSubmit, handleChange, values, touched, errors }: any) => (
    <Form noValidate onSubmit={handleSubmit}>
      {/* <Form.Group className="mb-3" controlId="AccountID1">
        <Form.Label htmlFor="AccountID">AccountID</Form.Label>
        <Form.Control id="AccountID" value={valueForm?.AccountID} onChange={handleChangeValue} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Username1">
        <Form.Label htmlFor="Username">Username</Form.Label>
        <Form.Control id="Username"
          isValid={touched.firstName && !errors.firstName}
          type="text" 
          value={valueForm?.Username} 
          onChange={handleChangeValue} />
        <Form.Control.Feedback>{{ errors.Username }}</Form.Control.Feedback>
      </Form.Group> */}
      <Form.Group as={Col} md="6" controlId="validationFormik03">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="Username"
          value={values.Username}
          onChange={handleChange}
          isInvalid={!!errors.Username}
        />
        <Form.Control.Feedback type="invalid">
          {errors.Username}
        </Form.Control.Feedback>
      </Form.Group>

      <FormControlInput 
        label="FullName" 
        name="FullName"
        valueName={values.FullName}
        handleChange={handleChange}
        errorName={errors.FullName}
      />

      <FormControlInput 
        label="Address" 
        name="Address"
        valueName={values.Address}
        handleChange={handleChange}
        errorName={errors.Address}
      />
      
      {/* <Form.Group className="mb-3" controlId="FullName1">
        <Form.Label htmlFor="FullName">FullName</Form.Label>
        <Form.Control id="FullName" type="text" value={valueForm?.FullName} onChange={handleChangeValue} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Address1">
        <Form.Label htmlFor="Address">Address</Form.Label>
        <Form.Control id="Address" type="text" value={valueForm?.Address} onChange={handleChangeValue} />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )

  useEffect(() => {
    fetchData();
  }, []);

  console.log('formik: ', formik);
  

  return <Layouts>
    <Button variant="primary" onClick={handleCreate}>Thêm mới người dùng</Button>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Account ID</th>
          <th>Tên người dùng</th>
          <th>Tên đầy đủ</th>
          <th>Địa chỉ</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((dt: any) => (
            <tr>
              <td>{dt.AccountID}</td>
              <td>{dt.Username}</td>
              <td>{dt.FullName}</td>
              <td>{dt.Address}</td>
              <td>
                <Button variant="outline-dark" onClick={() => handleEdit(dt)}>Edit</Button>{'   '}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    {/* Modal */}
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới người dùng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          <Formik
            validationSchema={schema} // lập rule để check validate => rule ở đâu? => nằm ở thằng yup (support rule in formik)
            onSubmit={handleSubmitForm}
            initialValues={{
              Username: '',
              FullName: '',
            }}
          >
            {
              renderControlForm
            }
          </Formik>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </Layouts>
}


export default Admin;