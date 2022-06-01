import serviceUtil from "../../index";

const login = (payload) => {
  return serviceUtil
    .post("lmsuser/login", payload)
    .then((res) => {
      const data = res && res.data;
      const header = res && res.headers;
      const dataRes = { data, header };

      return { dataRes };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

export { login };
