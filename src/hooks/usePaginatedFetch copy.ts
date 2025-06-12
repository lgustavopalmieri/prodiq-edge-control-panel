import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { useAuthStore } from "@/features/auth/auth-store";

interface UsePaginatedFetchOptions<T> {
  url: string;
  pageSize?: number;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  mapData: (item: any) => T;
  onError?: (error: unknown) => void;
}

export function usePaginatedFetch<T>({
  url,
  pageSize: initialPageSize = 6,
  params = {},
  headers = {},
  mapData,
  onError,
}: UsePaginatedFetchOptions<T>) {
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  useEffect(() => {
    // const { tenantId } = useAuthStore();
    const fetchData = async () => {
      setLoading(true);

      try {
        const config: AxiosRequestConfig = {
          method: "GET",
          url,
          params: {
            ...params,
            page: currentPage,
            page_size: pageSize,
          },
          headers: {
            "X-Tenant-ID": "vw-anchieta",
            "Content-Type": "application/json",
          },
        };

        const response = await axios(config);
        const json = response.data;

        if (json.success) {
          const mapped = json.data.map(mapData);
          setData(mapped);
          setTotal(json.pagination.total_items);
        }
      } catch (err) {
        if (onError) onError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, pageSize]);

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
