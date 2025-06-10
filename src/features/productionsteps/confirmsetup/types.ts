export type ProductReferenceType = {
  product_id: string;
  sku: string;
  name: string;
};

export type MaterialsType = {
  material_code: string;
  name: string;
  quantity: number;
  unit: string;
};

export type ToolsType = {
  tool_code: string;
  description: string;
};

export type RequiredSetupType = {
  materials: MaterialsType[];
  tools: ToolsType[];
};

export type OrderStatusType =
  | "pending"
  | "ready"
  | "dispatched"
  | "in_progress"
  | "completed"
  | "failed";

export type CycleTypeType = "count" | "weight" | "volume" | "length";

export type DispatchStrategyType =
  | "auto"
  | "round_robin"
  | "manual"
  | "parallel";

export type OrderExecutionType = {
  step_number: number;
  operation_id: string;
  operation_code: string;
  operation_name: string;
  machine_group: string;
  expected_cycle_time_sec: number;
  standard_quantity_per_cycle: number;
  cycle_type: CycleTypeType;
  dispatch_strategy: DispatchStrategyType;
  required_setup: RequiredSetupType;
  status: OrderStatusType;
  dispatched_at: string; // ISO string
  task_id: string;
  machine_id: string;
  quantity: number;
  order_id: string;
  order_code: string;
  product: ProductReferenceType;
  total_order_quantity: number;
  tenant_id: string;
};

export type ConfirmSetupType = {
  order_code: string;
  operation_code: string;
  product: ProductReferenceType;
  total_order_quantity: number;
  quantity: number;
  dispatched_at: string;
  expected_cycle_time_sec: number;
  standard_quantity_per_cycle: number;
  cycle_type: CycleTypeType;
  required_setup: RequiredSetupType;
};
