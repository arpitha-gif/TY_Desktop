import axios from "axios";

// Development URL
const baseURL = "http://169.254.197.78:9090/";

const axiosInstance = axios.create({ baseURL });
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    "content-type": "application/json",
    // "content-type":
    //   "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
    // "content-type": "multipart/form-data",
    ...config.headers,
  };
  return config;
});
export { axiosInstance };
