"use client";

import { Button, Card, Tag, Typography } from "antd";
import { getPriorityColor } from "./getPriorityColor";
import { ProductionOrderType } from "../types";

interface IOrderCardProps {
  order: ProductionOrderType;
  onSelect: (order: ProductionOrderType) => void;
}

const OrderCard: React.FunctionComponent<IOrderCardProps> = ({
  order,
  onSelect,
}: IOrderCardProps) => {
  return (
    <Card
      key={order.id}
      title={order.orderCode}
      style={{ width: 300, minHeight: 200 }}
      actions={[
        <Button
          type="primary"
          block
          size="large"
          onClick={() => onSelect(order)}
          style={{
            boxShadow: "0 0 0.2rem #13C2C2",
            transition: "all 0.2s ease-in-out",
          }}
        >
          Select
        </Button>,
      ]}
    >
      <Typography.Text strong>{order.operation}</Typography.Text>
      <br />
      <Typography.Text>
        Quantity: <strong>{order.quantity}</strong>
      </Typography.Text>
      <br />
      <Typography.Text>
        Deadline: <strong>{order.deadline}</strong>
      </Typography.Text>
      <br />
      <Tag
        style={{
          marginTop: "0.4rem",
          fontWeight: "bold",
          padding: "0rem 1rem",
        }}
        color={getPriorityColor(order.priority)}
      >
        {order.priority} Priority
      </Tag>
    </Card>
  );
};

export default OrderCard;
