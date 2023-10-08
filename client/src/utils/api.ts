import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
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
