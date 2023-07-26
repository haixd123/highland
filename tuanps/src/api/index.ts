import axios from 'axios';
import { ENV_BE } from '../constants';

axios.defaults.headers.common['Authorization'] = 'token';
axios.defaults.baseURL = ENV_BE;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const getAPI = ({ path, params, query }: { path: string; params: string, query: string }) => {
  return axios.get(`${path}/${query}`, {
    params,
  }
  );
}
// POST
export const postAPI = ({ path, body }: { path: string, body: any }) => {
  return axios.post(path, body)
}

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