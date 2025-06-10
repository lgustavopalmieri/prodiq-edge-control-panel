import { Descriptions } from "antd";
import * as React from "react";
import { ConfirmSetupType } from "./types";

interface IOrderDescriptionProps {
  data: ConfirmSetupType;
}

const OrderDescription: React.FunctionComponent<IOrderDescriptionProps> = ({
  data,
}: IOrderDescriptionProps) => {
  return (
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
  );
};

export default OrderDescription;
