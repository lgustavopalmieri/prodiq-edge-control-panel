import { usePaginatedFetch } from "@/hooks/usePaginatedFetch";
import { useMemo, useState, useEffect } from "react";

export type ProductionOrder = {
  id: string;
  orderCode: string;
  operation: string;
  quantity: number;
  deadline: string;
  priority: "low" | "medium" | "high" | "critical";
};

interface UsePaginatedOrdersOptions {
  machineId: string;
  pageSize?: number;
}

export function usePaginatedOrders({
  machineId,
  pageSize = 6,
}: UsePaginatedOrdersOptions) {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const { data, total, loading, currentPage, setCurrentPage, setPageSize } =
    usePaginatedFetch<ProductionOrder>({
      url: "http://localhost:8080/order-execution/available",
      pageSize,
      params: {
        machine_id: machineId,
      },
      paginationParams: {
        searchBy: "order_code",
        search: debouncedSearch,
      },
      mapData: (item) => ({
        id: item.OrderExecutionID,
        orderCode: item.OrderCode,
        operation: item.OperationName,
        quantity: item.Quantity,
        deadline: item.DispatchedAt,
        priority: item.OrderPriority,
      }),
      onError: (error) => {
        console.error("Failed to fetch orders:", error);
      },
    });

  const filtered = useMemo(
    () =>
      data.filter((order) =>
        order.orderCode.toLowerCase().includes(debouncedSearch.toLowerCase())
      ),
    [data, debouncedSearch]
  );

  return {
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    total,
    paginatedOrders: filtered,
    loading,
  };
}
