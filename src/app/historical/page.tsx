"use client";
import { Button } from "antd";
import Link from "next/link";
import * as React from "react";

interface IHistoricalProps {}

const Historical: React.FunctionComponent<IHistoricalProps> = (props) => {
  return (
    <Button>
      <Link href="/">Control Panel</Link>
    </Button>
  );
};

export default Historical;
