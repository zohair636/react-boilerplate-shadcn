import { apiClient } from "@/config/api-client";
import {
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseQueryOptions,
} from "@tanstack/react-query";

export const useGetQuery = <TData = unknown>(
  key: string[],
  url: string,
  config = {},
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

export const usePostMutation = <TData = unknown, TResponse = unknown>(
  key: string,
  url: string,
  config = {},
  options: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation({
    mutationKey: [key],
    mutationFn: async (data: TData) => {
      const response = await apiClient.post(url, data, config);
      return response || {};
    },
    ...options,
  });

  return mutation;
};

export const usePutMutation = <TData = unknown, TResponse = unknown>(
  key: string,
  url: string,
  config = {},
  options: Omit<
    UseMutationOptions<TResponse, Error, TData>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation({
    mutationKey: [key],
    mutationFn: async (data: TData) => {
      const response = await apiClient.put(url, data, config);
      return response || {};
    },
    ...options,
  });

  return mutation;
};

export const usePatchMutation = <TData = unknown, TResponse = unknown>(
  key: string,
  url: string,
  data = {},
  config = {},
  options: Omit<
    UseMutationOptions<TData, Error, TResponse>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation({
    mutationKey: [key],
    mutationFn: async () => {
      const response = await apiClient.patch(url, data, config);
      return response || {};
    },
    ...options,
  });

  return mutation;
};

export const useDeleteMutation = <TData = unknown, TResponse = unknown>(
  key: string | string[],
  url: string,
  config = {},
  options: Omit<
    UseMutationOptions<TData, Error, TResponse>,
    "mutationKey" | "mutationFn"
  > = {},
) => {
  const mutation = useMutation({
    mutationKey: [key],
    mutationFn: async () => {
      const response = await apiClient.delete(url, config);
      return response || {};
    },
    ...options,
  });

  return mutation;
};
