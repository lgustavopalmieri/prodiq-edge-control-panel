import { Button } from "antd";

interface ISetupButtonProps {
  type: "button" | "submit";
  color: "primary" | "default";
  text: string;
  onClick?: () => void;
}

const SetupButton: React.FunctionComponent<ISetupButtonProps> = ({
  type,
  color,
  text,
  onClick,
}: ISetupButtonProps) => {
  return (
    <Button
      htmlType={type}
      type={color}
      block
      size="large"
      style={{
        fontWeight: "bold",
        boxShadow: "0 0 0.2rem transparent",
        transition: "all 0.2s ease-in-out",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default SetupButton;
