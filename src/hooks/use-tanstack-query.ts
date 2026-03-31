import { apiClient } from "@/config/api-client";
import {
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseQueryOptions,
} from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";

export const useGetQuery = <TData = unknown>(
  key: string[],
  url: string,
  config: AxiosRequestConfig = {},
  params = {},
  options: Omit<
    UseQueryOptions<TData, Error, TData>,
    "queryKey" | "queryFn"
  > = {},
) => {
  const query = useQuery({
    queryKey: [...key, url, params],
    queryFn: async (): Promise<TData> => {
      const response = await apiClient.get(url, config, params);
      return (response ?? {}) as TData;
    },
    ...options,
  });

  return query;
};

export const useGetMutation = <TData = unknown, TResponse = unknown>(
  key: string,
  url: string,
  config: AxiosRequestConfig = {},
  options: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation({
    mutationKey: [key],
    mutationFn: async (params: TData) => {
      const response = await apiClient.get<TResponse>(
        url,
        config,
        params || {},
      );
      return response;
    },
    ...options,
  });

  return mutation;
};

export const usePostMutation = <TData = unknown, TResponse = unknown>(
  key: string,
  url: string,
  config: AxiosRequestConfig = {},
  options: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation<TResponse, Error, TData>({
    mutationKey: [key],
    mutationFn: async (data: TData) => {
      const response = await apiClient.post<TResponse>(url, data, config);
      return response;
    },
    ...options,
  });

  return mutation;
};

export const usePutMutation = <TData = unknown, TResponse = unknown>(
  key: string,
  url: string | ((variables: TData) => string),
  config: AxiosRequestConfig = {},
  options: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation<TResponse, Error, TData>({
    mutationKey: [key],
    mutationFn: async (data: TData) => {
      const resolvedUrl =
        typeof url === "function" ? url(data) : url;
      const payload = typeof url === "function" ? {} : data;
      const response = await apiClient.put<TResponse>(resolvedUrl, payload, config);
      return response;
    },
    ...options,
  });

  return mutation;
};

export const usePatchMutation = <TData = unknown, TResponse = unknown>(
  key: string,
  url: string | ((variables: TData) => string),
  config: AxiosRequestConfig = {},
  options: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation<TResponse, Error, TData>({
    mutationKey: [key],
    mutationFn: async (data: TData) => {
      const resolvedUrl =
        typeof url === "function" ? url(data) : url;
      const payload = typeof url === "function" ? {} : data;
      const response = await apiClient.patch<TResponse>(resolvedUrl, payload, config);
      return response;
    },
    ...options,
  });

  return mutation;
};

export const useDeleteMutation = <TData = unknown, TResponse = unknown>(
  key: string | string[],
  url: string | ((variables: TData) => string),
  config: AxiosRequestConfig = {},
  options?: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  >,
) => {
  return useMutation<TResponse, Error, TData>({
    mutationKey: [key],
    mutationFn: (data: TData) => {
      const resolvedUrl =
        typeof url === "function" ? url(data) : url;
      if (typeof url === "function") {
        return apiClient.delete<TResponse>(resolvedUrl, config);
      }
      return apiClient.delete<TResponse>(resolvedUrl, { ...config, data });
    },
    ...options,
  });
};
