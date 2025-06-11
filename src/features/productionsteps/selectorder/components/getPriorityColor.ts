export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "red";
    case "Medium":
      return "gold";
    case "Low":
      return "green";
    default:
      return "default";
  }
};
