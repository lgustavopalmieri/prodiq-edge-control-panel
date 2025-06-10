import ConfirmSetupStep from "./confirmsetup/confirmsetupstep";
import { OrderExecutionType } from "./confirmsetup/types";
import SelectOrderStep from "./selectorder/selectorderstep";

const ProducingStep = () => <div>⚙️ Operation in progress...</div>;
const AdjustParametersStep = () => (
  <div>🧪 Adjust or justify parameters...</div>
);
const FinishStep = () => (
  <div>✅ Finalize operation and enter quantities...</div>
);

export const stepContentMap = (
  data: OrderExecutionType
): Record<number, JSX.Element> => ({
  0: <SelectOrderStep />,
  1: (
    <ConfirmSetupStep
      data={{
        order_code: data.order_code,
        operation_code: data.operation_code,
        product: {
          product_id: data.product.product_id,
          sku: data.product.sku,
          name: data.product.name,
        },
        total_order_quantity: data.total_order_quantity,
        quantity: data.quantity,
        dispatch_strategy: data.dispatch_strategy as any,
        dispatched_at: data.dispatched_at,
        expected_cycle_time_sec: data.expected_cycle_time_sec,
        standard_quantity_per_cycle: data.standard_quantity_per_cycle,
        cycle_type: data.cycle_type as any,
        required_setup: {
          materials: [...data.required_setup.materials],
          tools: [...data.required_setup.tools],
        },
      }}
      onConfirm={(value) => console.log(value)}
      onAbort={() => console.log("Setup aborted")}
    />
  ),
  2: <ProducingStep />,
  3: <AdjustParametersStep />,
  4: <FinishStep />,
});
