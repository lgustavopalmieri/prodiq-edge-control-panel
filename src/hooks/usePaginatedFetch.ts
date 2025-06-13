import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import api from "@/api/provider";

type PaginationParams = {
  searchBy?: string;
  search?: string;
  orderByField?: string;
  orderDesc?: boolean;
};

interface UsePaginatedFetchOptions<T> {
  url: string;
  pageSize?: number;
  params?: Record<string, any>;
  paginationParams?: PaginationParams;
  mapData: (item: any) => T;
  onError?: (error: unknown) => void;
}

export function usePaginatedFetch<T>({
  url,
  pageSize: initialPageSize = 6,
  params = {},
  paginationParams = {},
  mapData,
  onError,
}: UsePaginatedFetchOptions<T>) {
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const queryParams = {
          ...params,
          page: currentPage,
          page_size: pageSize,
          ...(paginationParams.searchBy && {
            search_by: paginationParams.searchBy,
          }),
          ...(paginationParams.search && {
            search: paginationParams.search,
          }),
          ...(paginationParams.orderByField && {
            order_by_field: paginationParams.orderByField,
          }),
          ...(typeof paginationParams.orderDesc === "boolean" && {
            order_desc: paginationParams.orderDesc,
          }),
        };

        const config: AxiosRequestConfig = {
          method: "GET",
          url,
          params: queryParams,
        };

        const response = await api(config);
        const json = response.data;

        if (json.success) {
          setData(json.data.map(mapData));
          setTotal(json.pagination.total_items);
        }
      } catch (err) {
        onError?.(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [
    currentPage,
    pageSize,
    JSON.stringify(params),
    JSON.stringify(paginationParams),
  ]);

  return {
    data,
    total,
    loading,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
  };
}
