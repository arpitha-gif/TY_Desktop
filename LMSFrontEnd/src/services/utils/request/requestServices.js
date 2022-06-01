import serviceUtil from "../../index";

const requestGetAll = () => {
  return serviceUtil
    .get("")
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

const requestSubmit = (payload) => {
  return serviceUtil
    .post("", payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

export { requestGetAll, requestSubmit };
