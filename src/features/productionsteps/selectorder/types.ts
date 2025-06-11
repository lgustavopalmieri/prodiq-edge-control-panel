export type OrderPriorityType = "low" | "medium" | "high" | "critical";

export type ProductionOrderType = {
  id: number | string;
  orderCode: string;
  operation: string;
  quantity: number;
  deadline: string;
  priority: OrderPriorityType;
};
