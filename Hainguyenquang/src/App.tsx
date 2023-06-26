import './App.css';
import React from 'react';
import HomePage from '../src/home/home'
import TestSearch from './testSearch/TestSearch'
// import { useFormik } from 'formik';


function App() {
    
    return (
        <>
        <TestSearch />
        <div>Hello các bạn</div>
        <HomePage />
        </>
    )
  
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <div style={{display: 'flex' , justifyContent: 'center'}} className="App">


//     <form style={{display: 'grid',}} onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">Email</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />
//       <label htmlFor="lastName">username</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />
//       <label htmlFor="email">fullname</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       <div>
//       <button type="submit">Create</button>
//       <button type="button">Reset</button>
//       </div>
//     </form>
//     </div>

//   );
};

export default App;
