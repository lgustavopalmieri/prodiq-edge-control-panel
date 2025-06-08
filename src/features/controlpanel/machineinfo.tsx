"use client";

import MachineInfoItem from "@/components/machineinfoitem";
import { SectionHeader } from "@/components/sectionheader";
import StatusTag from "@/components/statustag";
import { Flex } from "antd";
import { Activity } from "lucide-react";

interface IMachineInfoProps {
  machineName: string;
  operation: string;
  oee: string;
  uptime: string;
  status: string;
  statusColor: string;
}

const MachineInfo: React.FunctionComponent<IMachineInfoProps> = ({
  machineName,
  operation,
  oee,
  uptime,
  status,
  statusColor,
}) => {
  return (
    <Flex
      wrap="wrap"
      gap="2rem"
      align="end"
      justify="space-between"
      style={{ height: "6%", width: "100%" }}
    >
      <SectionHeader
        icon={<Activity size={24} color="#84e2d8" />}
        title={machineName}
      />
      <MachineInfoItem label="Current Operation" value={operation} />
      <MachineInfoItem label="OEE" value={oee} />
      <MachineInfoItem label="Uptime" value={uptime} />
      <StatusTag color={statusColor} text={status} />
    </Flex>
  );
};

export default MachineInfo;
