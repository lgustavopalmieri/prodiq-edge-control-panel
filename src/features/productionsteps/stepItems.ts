import { StepProps } from "antd";

const stepTitles = [
  "Select Order",
  "Confirm Setup",
  "Producing",
  "Adjust Parameters?",
  "Finish",
];

export const stepsItems = (currentStep: number): StepProps[] => {
  return stepTitles.map((title, index) => {
    let status: StepProps["status"] = "wait";
    if (index < currentStep) status = "finish";
    else if (index === currentStep) status = "process";
    return { title, status };
  });
};
