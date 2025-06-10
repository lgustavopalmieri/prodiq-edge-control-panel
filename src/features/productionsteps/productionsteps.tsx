"use client";

import { Steps, Flex } from "antd";
import type { StepProps } from "antd/es/steps";
import React from "react";
import SelectOrderStep from "./selectorder/selectorderstep";
import ConfirmSetupStep from "./confirmsetup/confirmsetupstep";
import { ConfirmSetupType } from "./confirmsetup/types";
import { confirmMock } from "./confirmsetup/mock";

const ProducingStep = () => <div>⚙️ Operation in progress...</div>;
const AdjustParametersStep = () => (
  <div>🧪 Adjust or justify parameters...</div>
);
const FinishStep = () => (
  <div>✅ Finalize operation and enter quantities...</div>
);

const stepContentMap: Record<number, JSX.Element> = {
  0: <SelectOrderStep />,
  1: (
    <ConfirmSetupStep
      data={{
        order_code: confirmMock.order_code,
        operation_code: confirmMock.operation_code,
        product: {
          product_id: confirmMock.product.product_id,
          sku: confirmMock.product.sku,
          name: confirmMock.product.name,
        },
        total_order_quantity: confirmMock.total_order_quantity,
        quantity: confirmMock.quantity,
        dispatched_at: confirmMock.dispatched_at,
        expected_cycle_time_sec: confirmMock.expected_cycle_time_sec,
        standard_quantity_per_cycle: confirmMock.standard_quantity_per_cycle,
        cycle_type: confirmMock.cycle_type as any,
        required_setup: {
          materials: [...confirmMock.required_setup.materials],
          tools: [...confirmMock.required_setup.tools],
        },
      }}
      onConfirm={function (updated: ConfirmSetupType): void {
        throw new Error("Function not implemented.");
      }}
    />
  ),
  2: <ProducingStep />,
  3: <AdjustParametersStep />,
  4: <FinishStep />,
};

const stepTitles = [
  "Select Order",
  "Confirm Setup",
  "Producing",
  "Adjust Parameters?",
  "Finish",
];

interface IProductionStepsProps {
  currentStep: number;
}

const ProductionSteps: React.FunctionComponent<IProductionStepsProps> = ({
  currentStep,
}) => {
  const stepsItems: StepProps[] = stepTitles.map((title, index) => {
    let status: StepProps["status"] = "wait";
    if (index < currentStep) status = "finish";
    else if (index === currentStep) status = "process";
    return { title, status };
  });

  return (
    <Flex
      gap="1rem"
      vertical
      style={{ width: "100%", flex: 1, overflow: "auto" }}
    >
      <Steps size="small" current={currentStep} items={stepsItems} />
      <Flex
        style={{
          flex: 1,
          padding: "1rem",
          backgroundColor: "#1a1a1a",
          borderRadius: "0.5rem",
          overflow: "auto",
        }}
      >
        {stepContentMap[currentStep]}
      </Flex>
    </Flex>
  );
};

export default ProductionSteps;
