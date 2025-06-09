"use client";

import MachineInfo from "@/features/controlpanel/machineinfo";
import ProductionSteps from "@/features/productionsteps/productionsteps";
import { Divider, Flex, Steps } from "antd";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Flex vertical justify="space-between" style={{ width: "100%", flex: 1 }}>
      <MachineInfo
        machineName="KUKA KR QUANTEC Series"
        operation="Spot Welding"
        oee="88.3%"
        uptime="03:47:22"
        status="RUNNING"
        statusColor="cyan"
      />
      <Divider />
      <Flex style={{ height: "100%" }}>
        <ProductionSteps currentStep={0} />
      </Flex>
    </Flex>
  );
};

export default Home;
