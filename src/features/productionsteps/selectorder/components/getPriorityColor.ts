import { OrderPriorityType } from "../types";

export const getPriorityColor = (priority: OrderPriorityType) => {
  switch (priority) {
    case "high":
      return "red";
    case "medium":
      return "gold";
    case "low":
      return "green";
    default:
      return "default";
  }
};
