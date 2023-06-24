import axios from 'axios';


axios.defaults.headers.common['Authorization'] = 'tuanps';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// GET
export const getAPI = (id: string) => {
  // fetch('${URL}', {
  //   method: 'GET',
  //   body: 
  // })
  axios.get(`http://localhost:8888/account/${id}`);

}
// POST

export const postAPI = () => {
  const body = {
    "Email": "admintest@gmail.com",
    "Username": "admin",
    "FullName": "admin",
    "AvatarImageName": "admin10.jpg",
    "Mobile": "0336030998",
    "Address": "Nam Từ Liêm - Hà Nộii",
    "Password": "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",
    "Status": 1
  }
  
  return axios.post('http://localhost:8888/account', body).then((response) => {
    return response.status;
  })
}

// PUT

export const putAPI = () => {
  const body = {
    "AccountID": 10,
    "Email": "admintest@gmail.com",
    "Username": "admin",
    "FullName": "admin",
    "AvatarImageName": "admin10.jpg",
    "Mobile": "0336030998",
    "Address": "Nam Từ Liêm - Hà Nộii",
    "Password": "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",
    "Status": 1
  }
  
  return axios.put(`http://localhost:8888/account/${body.AccountID}`, body).then((response) => {
    return response.status;
  })
}

// DELETE

export const deleteAPI = (id: string) => {
  return axios.delete(`http://localhost:8888/account/${id}`);
}