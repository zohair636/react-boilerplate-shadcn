import { isAxiosError } from "axios";
import axiosInstance from "./axios-instance";
import { removeLocalStorageStorageItem } from "@/utils/localstorage-utils";

const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (status === 401) {
        removeLocalStorageStorageItem("token");
      window.location.href = "/auth/login";
    }

    throw new Error(message || "Something went wrong");
  }

  throw new Error("Unexpected error");
};

export const apiClient = {
  get: async (url: string, config = {}, params = {}) => {
    try {
      const mergeConfig = {
        ...config,
        params,
      };
      const response = await axiosInstance.get(url, mergeConfig);
      const { payload } = response.data;

      return payload;
    } catch (error) {
      handleError(error);
    }
  },
  post: async (url: string, data: unknown = {}, config = {}) => {
    try {
      const response = await axiosInstance.post(url, data, config);
      const { payload } = response.data;

      return payload;
    } catch (error) {
      handleError(error);
    }
  },
  put: async (url: string, data: unknown = {}, config = {}) => {
    try {
      const response = await axiosInstance.put(url, data, config);
      const { payload } = response.data;

      return payload;
    } catch (error) {
      handleError(error);
    }
  },
  patch: async (url: string, data: unknown = {}, config = {}) => {
    try {
      const response = await axiosInstance.patch(url, data, config);
      const { payload } = response.data;

      return payload;
    } catch (error) {
      handleError(error);
    }
  },
  delete: async (url: string, config = {}) => {
    try {
      const response = await axiosInstance.delete(url, config);
      const { payload } = response.data;

      return payload;
    } catch (error) {
      handleError(error);
    }
  },
};