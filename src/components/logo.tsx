"use client";

import { AppstoreOutlined } from "@ant-design/icons";

interface ILogoProps {
  collapsed: boolean;
}

const Logo: React.FunctionComponent<ILogoProps> = ({
  collapsed,
}: ILogoProps) => {
  return (
    <div
      style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : "start",
        paddingLeft: collapsed ? 0 : 16,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        flexShrink: 0,
      }}
    >
      <AppstoreOutlined
        style={{ fontSize: 24, marginRight: collapsed ? 0 : 8 }}
      />
      {!collapsed && "ProdIQ"}
    </div>
  );
};

export default Logo;
