"use client";

import { Flex, Input, Pagination } from "antd";
import OrderCard from "./components/ordercard";
import { usePaginatedOrders } from "./hooks/usePaginatedOrders";
import { OrderPriorityType } from "./types";

const SelectOrderStep = () => {
  const {
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    total,
    paginatedOrders,
  } = usePaginatedOrders({ machineId: "press-01" });

  return (
    <Flex
      vertical
      justify="center"
      gap="1rem"
      style={{ width: "100%", backgroundColor: "transparent" }}
    >
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
            onSelect={(order) => {
              console.log("Selected order:", order);
            }}
            order={{
              id: String(order.id),
              orderCode: order.orderCode,
              operation: order.operation,
              quantity: order.quantity,
              deadline: order.deadline,
              priority: order.priority as OrderPriorityType,
            }}
          />
        ))}
      </Flex>

      <Pagination
        current={currentPage}
        total={total}
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
