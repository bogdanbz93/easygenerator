import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
