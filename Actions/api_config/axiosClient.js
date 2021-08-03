import axios from "axios";

const instance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BPUSER_API_URL,
  baseURL: "http://localhost:3002"
});

instance.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem("org_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    if (error.response.status === 401) {
      if (process.browser) {
        window.localStorage.clear();
        window.location.reload(true);
      }
    } else if (error.response.status === 522) {
      if (process.browser) {
        window.localStorage.clear();
        window.location.reload(true);
        window.location.href = process.env.NEXT_PUBLIC_BPUSER_API_URL;
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
