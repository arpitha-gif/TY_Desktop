import axios from "axios";

// Development URL
const baseURL = "http://172.20.10.3:3000";

const axiosInstance = axios.create({ baseURL });
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    "content-type": "application/json",
    ...config.headers,
  };
  return config;
});
export { axiosInstance };
