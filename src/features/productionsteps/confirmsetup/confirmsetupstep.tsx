"use client";

import React, { useState } from "react";
import {
  Card,
  Descriptions,
  Divider,
  InputNumber,
  Table,
  Typography,
  Button,
  Flex,
} from "antd";
import type { ConfirmSetupType } from "./types";

interface ConfirmSetupStepProps {
  data: ConfirmSetupType;
  onConfirm: (updated: ConfirmSetupType) => void;
}

const ConfirmSetupStep: React.FC<ConfirmSetupStepProps> = ({
  data,
  onConfirm,
}) => {
  const [quantity, setQuantity] = useState(data?.quantity);
  const [expectedCycleTime, setExpectedCycleTime] = useState(
    data?.expected_cycle_time_sec
  );
  const [standardPerCycle, setStandardPerCycle] = useState(
    data?.standard_quantity_per_cycle
  );

  return (
    <Flex vertical gap="1rem" style={{ width: "100%" }}>
      <Card title={`Order: ${data?.order_code}`} bordered={false}>
        <Descriptions size="small" column={2}>
          <Descriptions.Item label="Product">
            {data?.product.name}
          </Descriptions.Item>
          <Descriptions.Item label="Operation Code">
            {data?.operation_code}
          </Descriptions.Item>
          <Descriptions.Item label="Total Order Quantity">
            {data?.total_order_quantity}
          </Descriptions.Item>
          <Descriptions.Item label="Cycle Type">
            {data?.cycle_type}
          </Descriptions.Item>
          <Descriptions.Item label="Dispatched At">
            {new Date(data?.dispatched_at).toLocaleString()}
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        <Typography.Title level={5}>Adjustable Parameters</Typography.Title>

        <Flex gap="2rem" wrap>
          <div>
            <label>Quantity to Produce</label>
            <InputNumber
              min={1}
              max={data?.total_order_quantity}
              value={quantity}
              onChange={(val) => setQuantity(val ?? 0)}
            />
          </div>

          <div>
            <label>Expected Cycle Time (sec)</label>
            <InputNumber
              min={1}
              value={expectedCycleTime}
              onChange={(val) => setExpectedCycleTime(val ?? 0)}
            />
          </div>

          <div>
            <label>Standard Qty / Cycle</label>
            <InputNumber
              min={1}
              value={standardPerCycle}
              onChange={(val) => setStandardPerCycle(val ?? 0)}
            />
          </div>
        </Flex>
      </Card>

      <Card title="Materials Required">
        <Table
          dataSource={data?.required_setup.materials}
          pagination={false}
          rowKey="material_code"
          columns={[
            { title: "Material Code", dataIndex: "material_code" },
            { title: "Name", dataIndex: "name" },
            { title: "Quantity", dataIndex: "quantity" },
            { title: "Unit", dataIndex: "unit" },
          ]}
        />
      </Card>

      <Card title="Tools Required">
        <Table
          dataSource={data?.required_setup.tools}
          pagination={false}
          rowKey="tool_code"
          columns={[
            { title: "Tool Code", dataIndex: "tool_code" },
            { title: "Description", dataIndex: "description" },
          ]}
        />
      </Card>

      <Flex justify="end">
        <Button
          type="primary"
          block
          size="large"
          style={{
            boxShadow: "0 0 0.2rem #13C2C2",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={() =>
            onConfirm({
              ...data,
              quantity,
              expected_cycle_time_sec: expectedCycleTime,
              standard_quantity_per_cycle: standardPerCycle,
            })
          }
        >
          Confirm Setup
        </Button>
      </Flex>
    </Flex>
  );
};

export default ConfirmSetupStep;
