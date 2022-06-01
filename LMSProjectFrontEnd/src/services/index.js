import { axiosInstance } from "../axiosConfig";

const get = (url) => {
  return axiosInstance.get(url);
};

const post = (url, payload) => {
  return axiosInstance.post(url, payload);
};

const put = (url, payload) => {
  return axiosInstance.put(url, payload);
};

const deleteAll = (url, payload) => {
  return axiosInstance.delete(url, { data: payload });
};

const serviceUtil = { get, post, put, deleteAll };
export default serviceUtil;
