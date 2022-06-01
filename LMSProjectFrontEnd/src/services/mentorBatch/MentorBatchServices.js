import serviceUtil from "../../index";

const mentorBatchGetAll = () => {
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

const mentorBatchSubmit = (payload) => {
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

const mentorBatchDelete = (payload) => {
  return serviceUtil
    .deleteAll(`lms/v1/admin/batch/${payload}`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

export { mentorBatchGetAll, mentorBatchSubmit, mentorBatchDelete };
