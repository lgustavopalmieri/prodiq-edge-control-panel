"use client";
import { Flex, Menu } from "antd";
import { ControlOutlined, HistoryOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ISideMenuProps {
  colorBgContainer: string;
}

const SideMenu: React.FunctionComponent<ISideMenuProps> = ({
  colorBgContainer,
}: ISideMenuProps) => {
  const pathname = usePathname();
  return (
    <Flex
      vertical
      justify="space-between"
      style={{
        flex: 1,
        height: "100%",
      }}
    >
      <Menu
        style={{ height: "100%", backgroundColor: colorBgContainer }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[pathname]}
        items={[
          {
            key: "/",
            icon: <ControlOutlined />,
            label: <Link href="/">Control Panel</Link>,
          },
          {
            key: "/historical",
            icon: <HistoryOutlined />,
            label: <Link href="/historical">Historical Data</Link>,
          },
        ]}
      />
    </Flex>
  );
};

export default SideMenu;
