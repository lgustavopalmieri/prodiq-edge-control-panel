import { ConfigProvider } from "antd";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { themeConfig } from "@/theme/themeConfig";
import LayoutTemplate from "@/theme/layoutTemplate";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider theme={themeConfig}>
            <LayoutTemplate>{children}</LayoutTemplate>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
