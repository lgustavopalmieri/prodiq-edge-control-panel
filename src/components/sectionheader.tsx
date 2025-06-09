"use client";
import { Flex, Typography } from "antd";

const { Title } = Typography;

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
}

export const SectionHeader: React.FunctionComponent<SectionHeaderProps> = ({
  icon,
  title,
}) => (
  <Flex gap="1rem" align="center">
    <Title level={4} style={{ margin: 0 }}>
      {icon}
    </Title>

    <Title level={4} style={{ margin: 0 }}>
      {title}
    </Title>
  </Flex>
);
