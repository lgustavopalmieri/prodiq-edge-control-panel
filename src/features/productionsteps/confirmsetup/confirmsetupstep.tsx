"use client";

import React from "react";
import { Card, Divider, Typography, Flex } from "antd";
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
import ToolsTable from "./components/toolstable";
import SetupInfoTitles from "./components/setupinfotitles";
import OrderDescription from "./components/oderdescription";
import AdjustableParameters from "./components/adjustableparamameters";
import MaterialsTable from "./components/materialstable";
import SetupButton from "./components/setupbutton";

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
            <SetupInfoTitles
              icon={<FileTextOutlined />}
              text={`Order: ${data?.order_code}`}
            />
          }
        >
          <OrderDescription data={data} />

          <Divider />

          <Typography.Title level={5}>
            <SetupInfoTitles
              icon={<SlidersOutlined />}
              text="Adjustable Parameters"
            />
          </Typography.Title>

          <AdjustableParameters
            control={control}
            maxQuantityToProduce={data?.total_order_quantity}
          />
        </Card>

        <Card
          title={
            <SetupInfoTitles
              icon={<AppstoreOutlined />}
              text="Materials Required"
            />
          }
        >
          <MaterialsTable materialsData={data?.required_setup.materials} />
        </Card>

        <Card
          title={
            <SetupInfoTitles icon={<ToolOutlined />} text="Tools Required" />
          }
        >
          <ToolsTable toolsData={data?.required_setup.tools} />
        </Card>

        <Flex justify="space-between" gap="2rem">
          <SetupButton
            type="button"
            color="default"
            text="Back"
            onClick={onAbort}
          />
          <SetupButton type="submit" color="primary" text="Confirm Setup" />
        </Flex>
      </Flex>
    </form>
  );
};

export default ConfirmSetupStep;
