import axios from "axios";
import { ACCESS_TOKEN, ENV_BE } from "../constands";

axios.defaults.baseURL = ENV_BE;


export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getValues = async () => {
  const response = await api.get("/");
  return response.data;
};

export const getAPILogin = async ({ path, params, query }: { path: string; params?: string, query?: string }) => {
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
    alert(error);
    return error;
  }
}

export const postAPILogin = ({ path, body }: { path: string, body: any }) => {
  const getToken = localStorage.getItem(ACCESS_TOKEN);
  try {
  
  return axios.post(path, body, {
    headers: {
      "Authorization": `Bearer ${getToken}`
    }
  }
  );

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
  alert(error);
  return error;
}
  
}

export const postAPI = ({ path, body }: { path: string; body: any }) => {
  return axios.post(path, body);
};

export const putAPI = ({ path, body }: { path: string; body: any }) => {
  return axios.put(path, body);
};

export const deleteAPI = ({ path }: { path: string }) => {
    return axios.delete(path);
  };