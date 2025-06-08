"use client";

import { Dispatch, SetStateAction } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";

interface IHeaderLayoutProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  colorBgContainer: string;
}

const { Header } = Layout;

const HeaderLayout: React.FunctionComponent<IHeaderLayoutProps> = ({
  collapsed,
  setCollapsed,
  colorBgContainer,
}: IHeaderLayoutProps) => {
  return (
    <Header style={{ padding: 0 }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "1.5rem",
          width: "4rem",
          height: "4rem",
        }}
      />
    </Header>
  );
};

export default HeaderLayout;
