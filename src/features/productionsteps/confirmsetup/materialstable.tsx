import { Table } from "antd";
import { MaterialsType } from "./types";

interface IMaterialsTableProps {
  materialsData: MaterialsType[];
}

const MaterialsTable: React.FunctionComponent<IMaterialsTableProps> = ({
  materialsData,
}: IMaterialsTableProps) => {
  return (
    <Table
      dataSource={materialsData}
      pagination={false}
      rowKey="material_code"
      columns={[
        { title: "Material Code", dataIndex: "material_code" },
        { title: "Name", dataIndex: "name" },
        { title: "Quantity", dataIndex: "quantity" },
        { title: "Unit", dataIndex: "unit" },
      ]}
    />
  );
};

export default MaterialsTable;
