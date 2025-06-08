"use client";

import MachineInfoItem from "@/components/machineinfoitem";
import { SectionHeader } from "@/components/sectionheader";
import StatusTag from "@/components/statustag";
import { Card, Typography, Space, Flex, Tag, Statistic } from "antd";
import { Bot, Wrench, Activity } from "lucide-react";

interface IHomeProps {}
const { Title } = Typography;
const { Timer } = Statistic;
const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Flex style={{ height: "100%" }}>
      <Flex
        wrap="wrap"
        gap="2rem"
        align="end"
        justify="space-between"
        style={{ height: "6%", width: "100%" }}
      >
        <SectionHeader
          icon={<Activity size={24} color="#84e2d8" />}
          title="KUKA KR QUANTEC Series"
        />
        <MachineInfoItem label="Current Operation" value="Spot Welding" />
        <MachineInfoItem label="OEE" value="88.3%" />
        <MachineInfoItem label="Uptime" value="03:47:22" />

        <StatusTag color={"cyan"} text={"RUNNING"} />
      </Flex>
    </Flex>
  );
};

export default Home;
