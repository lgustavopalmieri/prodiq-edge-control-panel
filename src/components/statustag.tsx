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
          minWidth: "6rem",
          padding: "0.3rem 2rem",
          fontSize: "1rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
        color={color}
      >
        {text}
      </Tag>
    </Flex>
  );
};

export default StatusTag;
