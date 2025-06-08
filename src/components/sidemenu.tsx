"use client";
import { Flex, Menu } from "antd";
import { SlidersVertical, History } from "lucide-react";
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
            icon: <SlidersVertical />,
            label: <Link href="/">Control Panel</Link>,
          },
          {
            key: "/historical",
            icon: <History />,
            label: <Link href="/historical">Historical Data</Link>,
          },
        ]}
      />
    </Flex>
  );
};

export default SideMenu;
