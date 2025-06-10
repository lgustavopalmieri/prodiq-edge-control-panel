"use client";

import React from "react";
import {
  Card,
  Descriptions,
  Divider,
  Table,
  Typography,
  Button,
  Flex,
} from "antd";
import {
  FileTextOutlined,
  SlidersOutlined,
  AppstoreOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ConfirmSetupType } from "./types";
import { Controller } from "react-hook-form";
import { InputNumber } from "antd";

interface ConfirmSetupStepProps {
  data: ConfirmSetupType;
  onConfirm: (updated: ConfirmSetupType) => void;
  onAbort: () => void;
}

const schema = z.object({
  quantity: z.number().min(1),
  expected_cycle_time_sec: z.number().min(1),
  standard_quantity_per_cycle: z.number().min(1),
});

type FormValues = z.infer<typeof schema>;

const ConfirmSetupStep: React.FC<ConfirmSetupStepProps> = ({
  data,
  onConfirm,
  onAbort,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      quantity: data?.quantity,
      expected_cycle_time_sec: data?.expected_cycle_time_sec,
      standard_quantity_per_cycle: data?.standard_quantity_per_cycle,
    },
  });

  const submitForm = (values: FormValues) => {
    onConfirm({
      ...data,
      ...values,
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Flex vertical gap="1rem" style={{ width: "100%" }}>
        <Card
          title={
            <Flex gap="0.5rem" align="center">
              <FileTextOutlined style={{ color: "#13C2C2" }} />
              Order: {data?.order_code}
            </Flex>
          }
        >
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
            <Descriptions.Item label="Dispatch Strategy">
              {data?.dispatch_strategy}
            </Descriptions.Item>
            <Descriptions.Item label="Dispatched At">
              {new Date(data?.dispatched_at).toLocaleString()}
            </Descriptions.Item>
          </Descriptions>

          <Divider />

          <Typography.Title level={5}>
            <Flex gap="0.5rem" align="center">
              <SlidersOutlined style={{ color: "#13C2C2" }} />
              Adjustable Parameters
            </Flex>
          </Typography.Title>

          <Flex gap="2rem" wrap>
            <Controller
              name="quantity"
              control={control}
              render={({ field }) => (
                <Flex gap="0.5rem" align="center">
                  <label>Quantity to Produce</label>
                  <InputNumber
                    {...field}
                    min={1}
                    max={data?.total_order_quantity}
                  />
                </Flex>
              )}
            />

            <Controller
              name="expected_cycle_time_sec"
              control={control}
              render={({ field }) => (
                <Flex gap="0.5rem" align="center">
                  <label>Expected Cycle Time (sec)</label>
                  <InputNumber {...field} min={1} />
                </Flex>
              )}
            />

            <Controller
              name="standard_quantity_per_cycle"
              control={control}
              render={({ field }) => (
                <Flex gap="0.5rem" align="center">
                  <label>Standard Qty / Cycle</label>
                  <InputNumber {...field} min={1} />
                </Flex>
              )}
            />
          </Flex>
        </Card>

        <Card
          title={
            <Flex gap="0.5rem" align="center">
              <AppstoreOutlined style={{ color: "#13C2C2" }} />
              Materials Required
            </Flex>
          }
        >
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

        <Card
          title={
            <Flex gap="0.5rem" align="center">
              <ToolOutlined style={{ color: "#13C2C2" }} />
              Tools Required
            </Flex>
          }
        >
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

        <Flex justify="space-between" gap="2rem">
          <Button
            type="default"
            block
            size="large"
            style={{ fontWeight: "bold" }}
            onClick={onAbort}
          >
            Back
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            block
            size="large"
            style={{
              boxShadow: "0 0 0.2rem #13C2C2",
              transition: "all 0.2s ease-in-out",
            }}
          >
            Confirm Setup
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default ConfirmSetupStep;
