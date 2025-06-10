import { Table } from "antd";
import { ToolsType } from "../types";

interface IToolsTableProps {
  toolsData: ToolsType[];
}

const ToolsTable: React.FunctionComponent<IToolsTableProps> = ({
  toolsData,
}) => {
  return (
    <Table
      dataSource={toolsData}
      pagination={false}
      rowKey="tool_code"
      columns={[
        { title: "Tool Code", dataIndex: "tool_code" },
        { title: "Description", dataIndex: "description" },
      ]}
    />
  );
};

export default ToolsTable;
