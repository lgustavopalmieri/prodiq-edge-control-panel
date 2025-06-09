"use client";

import { Button, Card, Tag, Typography } from "antd";

type ProductionOrder = {
  id: number;
  orderCode: string;
  operation: string;
  quantity: number;
  deadline: string;
  priority: "Low" | "Medium" | "High";
};

interface IOrderCardProps {
  order: ProductionOrder;
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "red";
    case "Medium":
      return "gold";
    case "Low":
      return "green";
    default:
      return "default";
  }
};

const OrderCard: React.FunctionComponent<IOrderCardProps> = ({
  order,
}: IOrderCardProps) => {
  return (
    <Card
      key={order.id}
      title={order.orderCode}
      style={{ width: 300, minHeight: 200 }}
      actions={[
        <Button type="primary" block size="large">
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
      <Tag color={getPriorityColor(order.priority)}>
        {order.priority} Priority
      </Tag>
    </Card>
  );
};

export default OrderCard;
