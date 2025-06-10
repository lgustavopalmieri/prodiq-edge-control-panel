"use client";

import { Steps, Flex } from "antd";
import React from "react";
import { confirmMock } from "./confirmsetup/mock";
import { stepContentMap } from "./stepContentMap";
import { stepsItems } from "./stepItems";

interface IProductionStepsProps {
  currentStep: number;
}

const ProductionSteps: React.FunctionComponent<IProductionStepsProps> = ({
  currentStep,
}) => {
  return (
    <Flex
      gap="1rem"
      vertical
      style={{ width: "100%", flex: 1, overflow: "auto" }}
    >
      <Steps
        size="small"
        current={currentStep}
        items={stepsItems(currentStep)}
      />
      <Flex
        style={{
          flex: 1,
          padding: "1rem",
          backgroundColor: "#1a1a1a",
          borderRadius: "0.5rem",
          overflow: "auto",
        }}
      >
        {stepContentMap(confirmMock)[currentStep]}
      </Flex>
    </Flex>
  );
};

export default ProductionSteps;
