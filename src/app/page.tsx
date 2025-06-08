"use client";

import MachineInfo from "@/features/controlpanel/machineinfo";
import { Divider, Flex, Steps } from "antd";

interface IHomeProps {}

const stepsItems = [
  {
    title: "Selecionar Ordem",
  },
  {
    title: "Confirmar Setup",
  },
  {
    title: "Produzindo",
  },
  {
    title: "Finalizar",
  },
];

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Flex vertical style={{ height: "100%" }}>
      <MachineInfo
        machineName="KUKA KR QUANTEC Series"
        operation="Spot Welding"
        oee="88.3%"
        uptime="03:47:22"
        status="RUNNING"
        statusColor="cyan"
      />
      <Divider />
      <Steps current={3} items={stepsItems} />
    </Flex>
  );
};

export default Home;
