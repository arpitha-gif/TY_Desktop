import serviceUtil from "../../index";

const categoryGet = (payload) => {
  return serviceUtil
    .get(`lms/v1/admin/technologies`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.message;
      return { errRes };
    });
};

export { categoryGet };
