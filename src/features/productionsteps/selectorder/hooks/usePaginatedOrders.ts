"use client";

import { useEffect, useMemo, useState } from "react";

export type ProductionOrder = {
  id: string;
  orderCode: string;
  operation: string;
  quantity: number;
  deadline: string;
  priority: "low" | "medium" | "high" | "Critical";
};

interface UsePaginatedOrdersOptions {
  machineId: string;
  pageSize?: number;
}

export function usePaginatedOrders({
  machineId,
  pageSize: initialPageSize = 6,
}: UsePaginatedOrdersOptions) {
  const [orders, setOrders] = useState<ProductionOrder[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8080/order-execution/available?machine_id=${machineId}&page=${currentPage}&page_size=${pageSize}`,
          {
            method: "GET",
            headers: {
              "X-Tenant-ID": "vw-anchieta",
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const json = await res.json();

        if (json.success) {
          const mapped = json.data.map((item: any) => ({
            id: item.OrderExecutionID,
            orderCode: item.OrderCode,
            operation: item.OperationName,
            quantity: item.Quantity,
            deadline: item.DispatchedAt,
            priority: item.OrderPriority,
          }));

          setOrders(mapped);
          setTotal(json.pagination.total_items);
        }
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [machineId, currentPage, pageSize]);

  const filteredOrders = useMemo(
    () =>
      orders.filter((order) =>
        order.orderCode.toLowerCase().includes(search.toLowerCase())
      ),
    [orders, search]
  );

  return {
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    total,
    paginatedOrders: filteredOrders,
    loading,
  };
}
