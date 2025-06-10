export const confirmMock = {
  step_number: 1,
  operation_id: "op-STAMP-PNL",
  operation_code: "STAMP-PNL",
  operation_name: "Stampagem de painéis da carroceria",
  machine_group: "STAMPING_PRESSES",
  expected_cycle_time_sec: 55,
  standard_quantity_per_cycle: 1,
  cycle_type: "count",
  dispatch_strategy: "parallel",
  required_setup: {
    materials: [
      {
        material_code: "STL-CR-SHEET",
        name: "Cold Rolled Steel Sheet",
        quantity: 2.2,
        unit: "ton",
      },
    ],
    tools: [
      {
        tool_code: "DIE-BODY-VWP",
        description: "Stamping Die Set - Polo Body Panels",
      },
    ],
  },
  status: "ready",
  dispatched_at: "2025-05-26T09:04:01.388480Z",
  task_id: "task-2e5da20a-a4fc-4f2c-a01f-6615ca88b8f7-1-press-01",
  machine_id: "press-01",
  quantity: 13,
  order_id: "2e5da20a-a4fc-4f2c-a01f-6615ca88b8f7",
  order_code: "ORD-POLO-001",
  product: {
    product_id: "prod-vwpolo-1.6",
    sku: "VW-POLO-1.6-MSI-HB-BR",
    name: "Volkswagen Polo 1.6 MSI",
  },
  total_order_quantity: 25,
  tenant_id: "vw-anchieta",
};
