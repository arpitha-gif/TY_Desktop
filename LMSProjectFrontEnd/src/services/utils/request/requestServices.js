import serviceUtil from "../../index";

const requestGetAll = () => {
  return serviceUtil
    .get("lmsuser/allemployees")
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

const requestReject = (payload) => {
  return serviceUtil
    .put("/lmsuser/empregisterreject", payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

export { requestGetAll, requestReject };
