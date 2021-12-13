import axios from "axios";

// DEV URL : http://localhost/rockers-laravel-demo/api
// PROD URL : https://eventwithtickets.com/equityrealestate/api/api

const instance = axios.create({
  baseURL: "https://equity-api.eu-4.evennode.com/api/v1/",
});

const token = localStorage.getItem("token");
instance.interceptors.request.use(function (config) {
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  config.headers.common["Access-Control-Allow-Origin"] = "*";
  return config;
});

export default instance;
