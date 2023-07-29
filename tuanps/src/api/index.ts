import axios, { AxiosError } from 'axios';
import { ACCESS_TOKEN, ENV_BE, REFRESH_TOKEN } from '../constants';

// const getToken = localStorage.getItem(ACCESS_TOKEN);

// axios.defaults.headers.common['Authorization'] = getToken;
axios.defaults.baseURL = ENV_BE;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const getAPI = async ({ path, params, query }: { path: string; params?: string, query?: string }) => {
  const getToken = localStorage.getItem(ACCESS_TOKEN);
  try {
    const response = await axios.get(`${path}`, {
      params,
      headers: {
        "Authorization": `Bearer ${getToken}`
      }
    });
    return response;
  } catch (error: any) {
    // check token expired - kiem tra token het han => refresh lai acccess new.
    // if (error && error.response && error.response.status === 401) {
    //   const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    //   const refreshTokenResponse = await postAPI({
    //     path: 'auth/refresh-token',
    //     body: {
    //       refreshToken,
    //     }
    //   });
    //   localStorage.setItem(ACCESS_TOKEN, refreshTokenResponse.data.accessToken);
    //   return refreshTokenResponse;
    // }
    return error;
  }
}

// POST
export const postAPI = ({ path, body }: { path: string, body: any }) => {
  const getToken = localStorage.getItem(ACCESS_TOKEN);
  return axios.post(path, body, {
    headers: {
      "Authorization": `Bearer ${getToken}`
    }
  });
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