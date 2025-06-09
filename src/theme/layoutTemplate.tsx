"use client";

import { useState } from "react";
import { Layout, theme } from "antd";
import Logo from "@/components/logo";
import SideMenu from "@/components/sidemenu";
import HeaderLayout from "@/components/headerlayout";

const { Sider, Content } = Layout;

interface ILayoutTemplateProps {
  children: React.ReactNode;
}
const LayoutTemplate: React.FunctionComponent<ILayoutTemplateProps> = ({
  children,
}: ILayoutTemplateProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ maxHeight: "100vh", minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Logo collapsed={collapsed} />
        <SideMenu colorBgContainer={colorBgContainer} />
      </Sider>

      <Layout>
        <HeaderLayout
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          colorBgContainer={colorBgContainer}
        />
        <Content
          style={{
            margin: "1.5rem 1rem",
            padding: "1.5rem ",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: "100%",
            overflowY: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutTemplate;
