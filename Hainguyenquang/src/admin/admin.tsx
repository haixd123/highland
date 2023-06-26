// import { styled } from "styled-components";
// import Layouts from "../../components/layouts";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Button, Form, Modal, Table } from "react-bootstrap";

// // {
// //   AccountID: number,
// //   Username: string,
// //   FullName: string,
// //   Address: string,
// // }

// enum STATUS {
//   EDIT,
//   CREATE
// }

// const Admin = () => {
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const [valueForm, setValueForm] = useState<any>();
//   const [status, setStatus] = useState<STATUS>(STATUS.CREATE)

//   const fetchData = async () => {
//     //Cach 1: Call bang FETCH 
//     // const response = await fetch("http://localhost:8888/account", {method: 'GET'});
//     // const jsonData = await response.json();
//     // if (jsonData.status === 'success') {
//     //   setData(jsonData.data)
//     // }

//     // Cach 2: Call bang Axios
//     const response = await axios.get('http://localhost:8888/account');
//     if (response.status === 200) {
//       setData(response.data.data);
//     }
//   }

//   const handleCreate = () => {
//     setShow(true)
//     setStatus(STATUS.CREATE);
//     setValueForm({})
//   }

//   const handleEdit = (record: any) => {
//     console.log('record', record);
//     setValueForm(record)
//     setStatus(STATUS.EDIT);
//     setShow(true)
//   }

//   const handleClose = () => setShow(false);

//   const handleChangeValue = (event: any) => {
//     setValueForm({
//       ...valueForm,
//       [`${event.target.id}`]: event.target.value,
//     });
//   }

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     console.log('valueForm', valueForm);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return <Layouts>
//     <Button variant="primary" onClick={handleCreate}>Thêm mới người dùng</Button>
//     <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>Account ID</th>
//           <th>Tên người dùng</th>
//           <th>Tên đầy đủ</th>
//           <th>Địa chỉ</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           data.map((dt: any) => (
//             <tr>
//               <td>{dt.AccountID}</td>
//               <td>{dt.Username}</td>
//               <td>{dt.FullName}</td>
//               <td>{dt.Address}</td>
//               <td>
//                 <Button variant="outline-dark" onClick={() => handleEdit(dt)}>Edit</Button>{'   '}
//                 <Button variant="danger">Delete</Button>
//               </td>
//             </tr>
//           ))
//         }
//       </tbody>
//     </Table>
//     {/* Modal */}
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Thêm mới người dùng</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="AccountID1">
//             <Form.Label htmlFor="AccountID">AccountID</Form.Label>
//             <Form.Control id="AccountID" value={valueForm?.AccountID} onChange={handleChangeValue} type="text"/>
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="Username1">
//             <Form.Label htmlFor="Username">Username</Form.Label>
//             <Form.Control id="Username" type="text" value={valueForm?.Username} onChange={handleChangeValue}/>
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="FullName1">
//             <Form.Label htmlFor="FullName">FullName</Form.Label>
//             <Form.Control id="FullName" type="text" value={valueForm?.FullName} onChange={handleChangeValue}/>
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="Address1">
//             <Form.Label htmlFor="Address">Address</Form.Label>
//             <Form.Control id="Address" type="text" value={valueForm?.Address} onChange={handleChangeValue}/>
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   </Layouts>
// }
const Admin = () => {}

export default Admin;