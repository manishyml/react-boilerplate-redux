import axios from "axios";
axios.defaults.headers.common["Content-Type"] = "application/json";
const getData = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then(response => resolve(response.data))
      .catch(error => {
        reject(error);
      });
  });
};
export { getData };
