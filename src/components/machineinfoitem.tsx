"use client";
import { Flex, Typography } from "antd";

interface IMachineInfoItemProps {
  label: string;
  value: string;
}

const MachineInfoItem: React.FunctionComponent<IMachineInfoItemProps> = ({
  label,
  value,
}: IMachineInfoItemProps) => {
  return (
    <Flex vertical align="center">
      <Typography.Text type="secondary" style={{ fontSize: "0.8rem" }}>
        {label}
      </Typography.Text>
      <Typography.Title level={5} style={{ margin: 0 }}>
        {value}
      </Typography.Title>
    </Flex>
  );
};

export default MachineInfoItem;
