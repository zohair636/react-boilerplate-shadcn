import axios from "axios";
import { env } from "./env";
import { getLocalStorage } from "@/utils/localstorage-utils";

const axiosInstance = axios.create({
  baseURL: env.VITE_API_BASE_URL,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalStorage(env.VITE_AUTH_TOKEN_SECRET);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;