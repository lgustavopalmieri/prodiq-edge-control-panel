export type OrderPriorityType = "Low" | "Medium" | "High";

export type ProductionOrderType = {
  id: number;
  orderCode: string;
  operation: string;
  quantity: number;
  deadline: string;
  priority: OrderPriorityType;
};
