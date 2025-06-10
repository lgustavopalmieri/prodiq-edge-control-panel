import { Flex, InputNumber } from "antd";
import * as React from "react";
import { Control, Controller } from "react-hook-form";

interface IAdjustableParametersProps {
  maxQuantityToProduce: number;
  control: Control<
    {
      quantity: number;
      expected_cycle_time_sec: number;
      standard_quantity_per_cycle: number;
    },
    any,
    {
      quantity: number;
      expected_cycle_time_sec: number;
      standard_quantity_per_cycle: number;
    }
  >;
}

const AdjustableParameters: React.FunctionComponent<
  IAdjustableParametersProps
> = ({ control, maxQuantityToProduce }: IAdjustableParametersProps) => {
  return (
    <Flex gap="2rem" wrap>
      <Controller
        name="quantity"
        control={control}
        render={({ field }) => (
          <Flex gap="0.5rem" align="center">
            <label>Quantity to Produce</label>
            <InputNumber {...field} min={1} max={maxQuantityToProduce} />
          </Flex>
        )}
      />

      <Controller
        name="expected_cycle_time_sec"
        control={control}
        render={({ field }) => (
          <Flex gap="0.5rem" align="center">
            <label>Expected Cycle Time (sec)</label>
            <InputNumber {...field} min={1} />
          </Flex>
        )}
      />

      <Controller
        name="standard_quantity_per_cycle"
        control={control}
        render={({ field }) => (
          <Flex gap="0.5rem" align="center">
            <label>Standard Qty / Cycle</label>
            <InputNumber {...field} min={1} />
          </Flex>
        )}
      />
    </Flex>
  );
};

export default AdjustableParameters;
