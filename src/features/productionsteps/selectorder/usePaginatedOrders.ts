"use client";

import { useEffect, useMemo, useState } from "react";
import { mockOrders } from "./mocks";

export type ProductionOrder = {
  id: number;
  orderCode: string;
  operation: string;
  quantity: number;
  deadline: string;
  priority: "Low" | "Medium" | "High";
};

interface UsePaginatedOrdersOptions {
  pageSize?: number;
}

export function usePaginatedOrders({
  pageSize: initialPageSize = 6,
}: UsePaginatedOrdersOptions = {}) {
  const [orders, setOrders] = useState<ProductionOrder[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  useEffect(() => {
    const fetchOrders = async () => {
      // simulate delay
      await new Promise((res) => setTimeout(res, 300));
      setOrders(mockOrders);
    };
    fetchOrders();
  }, []);

  const filteredOrders = useMemo(
    () =>
      orders.filter((order) =>
        order.orderCode.toLowerCase().includes(search.toLowerCase())
      ),
    [orders, search]
  );

  const paginatedOrders = useMemo(
    () =>
      filteredOrders.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      ),
    [filteredOrders, currentPage, pageSize]
  );

  return {
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    total: filteredOrders.length,
    paginatedOrders,
  };
}
