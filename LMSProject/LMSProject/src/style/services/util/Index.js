import { axiosInstance } from "../../axiosConfig";

const get = (url) => {
  return axiosInstance.get(url);
};

const post = (url, reqObj, config) => {
  return axiosInstance.post(url, reqObj, config);
};

const deleteAll = (url, reqObj) => {
  return axiosInstance.delete(url, { data: reqObj });
};

const put = (url, reqObj, config) => {
  return axiosInstance.put(url, reqObj, config);
};

const serviceUtil = { get, post, deleteAll, put };
export default serviceUtil;
