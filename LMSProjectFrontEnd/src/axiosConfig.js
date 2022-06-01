import axios from "axios";

// Development URL
const baseURL = "http://localhost:3001";
const token = localStorage.getItem("token");

const axiosInstance = axios.create({ baseURL });
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    "content-type": "application/json",
    token: token ? token : "",
    ...config.headers,
  };
  return config;
});
export { axiosInstance };
