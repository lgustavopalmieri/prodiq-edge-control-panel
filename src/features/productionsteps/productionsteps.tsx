"use client";

import { Steps, Flex } from "antd";
import type { StepProps } from "antd/es/steps";
import React from "react";
import SelectOrderStep from "./selectorder/selectorderstep";

const ConfirmSetupStep = () => <div>🔧 Confirm machine setup...</div>;
const ProducingStep = () => <div>⚙️ Operation in progress...</div>;
const AdjustParametersStep = () => (
  <div>🧪 Adjust or justify parameters...</div>
);
const FinishStep = () => (
  <div>✅ Finalize operation and enter quantities...</div>
);

const stepContentMap: Record<number, JSX.Element> = {
  0: <SelectOrderStep />,
  1: <ConfirmSetupStep />,
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
