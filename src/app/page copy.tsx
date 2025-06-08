import {
  Alert,
  Badge,
  Button,
  Card,
  Descriptions,
  Divider,
  Flex,
  Space,
  Statistic,
  Steps,
} from "antd";
import {
  DashboardOutlined,
  ToolOutlined,
  AlertOutlined,
  PlayCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

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
    <Flex style={{ height: "100%" }}>
      <Flex wrap="wrap" gap={24}>
        {/* Left Panel */}
        <Flex vertical gap={24} style={{ flex: 1, minWidth: 400 }}>
          {/* Machine Status + Tool Info */}
          <Card title="Machine Status">
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Status">
                <Badge status="processing" text="Running" />
              </Descriptions.Item>
              <Descriptions.Item label="Tool">
                Insertion Head 42X
              </Descriptions.Item>
              <Descriptions.Item label="Operation">
                OP-128 | Front Axle Mounting
              </Descriptions.Item>
            </Descriptions>
          </Card>

          {/* Alert Panel */}
          <Alert
            message="Low pressure detected on hydraulic system."
            type="warning"
            showIcon
          />

          {/* Production Stats */}
          <Card title="Production Overview">
            <Space direction="vertical">
              <Statistic title="OEE" value={78.4} suffix="%" precision={1} />
              <Statistic title="Produced" value={1280} suffix="pcs" />
              <Statistic title="Defects" value={12} suffix="pcs" />
            </Space>
          </Card>
        </Flex>

        {/* Right Panel - Production Flow */}
        <Flex vertical gap={24} style={{ flex: 2, minWidth: 500 }}>
          <Card title="Production Setup">
            {/* <Steps current={1} size="small">
              <Steps title="Select Order" />
              <Step title="Confirm Setup" />
              <Step title="In Production" />
              <Step title="Finalize" />
            </Steps> */}
            <Steps current={0} items={stepsItems} />
            <Divider />

            {/* Setup Details */}
            <Descriptions column={2} size="small">
              <Descriptions.Item label="Order Code">ORD-2301</Descriptions.Item>
              <Descriptions.Item label="Product">
                VW Polo Frame
              </Descriptions.Item>
              <Descriptions.Item label="Quantity">400 pcs</Descriptions.Item>
              <Descriptions.Item label="Cycle Time">42 sec</Descriptions.Item>
            </Descriptions>

            <Divider />

            <Space>
              <Button type="primary" icon={<PlayCircleOutlined />}>
                Start Production
              </Button>
              <Button danger icon={<StopOutlined />}>
                Finalize
              </Button>
            </Space>
          </Card>

          {/* Quantity Adjustment + Justify Stops */}
          <Card title="Finish & Report">
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button block>Adjust Final Quantity</Button>
              <Button block>Justify Stop</Button>
            </Space>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
