"use client";

import { useState } from "react";
import { Flex, Input, Pagination } from "antd";
import OrderCard from "./ordercard";
import { mockOrders } from "./mocks";

const SelectOrderStep = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const filteredOrders = mockOrders.filter((order) =>
    order.orderCode.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Flex vertical justify="center" gap="1rem" style={{ width: "100%" }}>
      <Flex justify="space-between" align="center">
        <Input
          placeholder="Search order code..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          style={{ maxWidth: 300 }}
        />
      </Flex>

      <Flex wrap="wrap" gap="1rem" justify="start">
        {paginatedOrders.map((order) => (
          <OrderCard
            key={order.id}
            order={{
              id: order.id,
              orderCode: order.orderCode,
              operation: order.operation,
              quantity: order.quantity,
              deadline: order.deadline,
              priority: order.priority as "Low" | "Medium" | "High",
            }}
          />
        ))}
      </Flex>

      <Pagination
        current={currentPage}
        total={filteredOrders.length}
        pageSize={pageSize}
        showSizeChanger={true}
        pageSizeOptions={["6", "12", "20"]}
        onChange={(page, size) => {
          setCurrentPage(page);
          setPageSize(size);
        }}
      />
    </Flex>
  );
};

export default SelectOrderStep;
