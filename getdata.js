const axios = require("axios");

const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        resolve(res.data.users);
      })
      .catch((err) => {
        reject;
      });
  });
};

module.exports = {
  fetchUsers,
};
