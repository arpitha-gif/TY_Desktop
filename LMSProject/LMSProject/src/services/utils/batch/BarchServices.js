import serviceUtil from "../../index";

const batchGetAll = () => {
  return serviceUtil
    .get("lms/v1/admin/batch")
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

const batchSubmit = (payload) => {
  return serviceUtil
    .post("lms/v1/admin/batch", payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
  
};

const batchDelete = (payload) => {
  return serviceUtil
    .deleteAll("", payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

export { batchGetAll, batchSubmit, batchDelete };
