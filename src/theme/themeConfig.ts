import { ThemeConfig, theme } from "antd";

export const themeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#4F9D69", // Verde industrial (controle)
    colorBgBase: "#141414", // Fundo escuro neutro
    colorTextBase: "#E5E5E5", // Texto claro
    colorBorderSecondary: "#303030",
    borderRadius: 6,
    // colorBgContainer: "red",
  },
  components: {
    Layout: {
      headerBg: "#1F1F1F",
      siderBg: "#1A1A1A",
    },
    Menu: {
      itemSelectedColor: "#4F9D69",
      itemHoverColor: "#4F9D69",
      itemColor: "#CCCCCC",
    },

    Button: {
      // defaultColor: "#E5E5E5",
      // defaultBg: "#333333",
      // defaultBorderColor: "#4F9D69",
      // primaryColor: "#fff",
      // primaryBg: "#4F9D69",
    },
  },
};
