import { isAxiosError, type AxiosRequestConfig } from "axios";
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
  get: async <TResponse = unknown>(
    url: string,
    config: AxiosRequestConfig = {},
    params = {},
  ): Promise<TResponse> => {
    try {
      const mergeConfig = {
        ...config,
        params,
      };
      const response = await axiosInstance.get(url, mergeConfig);
      return response.data?.payload as TResponse;
    } catch (error) {
      return handleError(error);
    }
  },
  post: async <TResponse = unknown>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> => {
    try {
      const response = await axiosInstance.post(url, data, config);
      return response.data?.payload as TResponse;
    } catch (error) {
      return handleError(error);
    }
  },
  put: async <TResponse = unknown>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> => {
    try {
      const response = await axiosInstance.put(url, data, config);
      return response.data?.payload as TResponse;
    } catch (error) {
      return handleError(error);
    }
  },
  patch: async <TResponse = unknown>(
    url: string,
    data: unknown = {},
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> => {
    try {
      const response = await axiosInstance.patch(url, data, config);
      return response.data?.payload as TResponse;
    } catch (error) {
      return handleError(error);
    }
  },
  delete: async <TResponse = unknown>(
    url: string,
    config: AxiosRequestConfig = {},
  ): Promise<TResponse> => {
    try {
      const response = await axiosInstance.delete(url, config);
      return response.data?.payload as TResponse;
    } catch (error) {
      return handleError(error);
    }
  },
};