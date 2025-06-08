"use client";

import { Flex, Tag } from "antd";

interface IStatusTagProps {
  color: string;
  text: string;
}

const StatusTag: React.FunctionComponent<IStatusTagProps> = ({
  color,
  text,
}) => {
  return (
    <Flex>
      <Tag
        style={{
          padding: "0.3rem 4rem",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
        color={color}
      >
        {text}
      </Tag>
    </Flex>
  );
};

export default StatusTag;
