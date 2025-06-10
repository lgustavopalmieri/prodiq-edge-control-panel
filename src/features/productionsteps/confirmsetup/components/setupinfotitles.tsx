import { Flex } from "antd";
import * as React from "react";

interface ISetupInfoTitlesProps {
  icon: React.ReactNode;
  text: React.ReactNode | string;
}

const SetupInfoTitles: React.FunctionComponent<ISetupInfoTitlesProps> = ({
  icon,
  text,
}: ISetupInfoTitlesProps) => {
  return (
    <Flex gap="0.5rem" align="center">
      <Flex style={{ color: "#13C2C2" }}>{icon}</Flex>
      {text}
    </Flex>
  );
};

export default SetupInfoTitles;
