import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getValues = async () => {
  const response = await api.get("/");
  return response.data;
};

export const postAPI = ({ path, body }: { path: string; body: any }) => {
  return axios.post(path, body);
};

export const putAPI = ({ path, body }: { path: string; body: any }) => {
  return axios.put(path, body);
};

export const deleteAPI = ({ path }: { path: string }) => {
    return axios.delete(path);
  };