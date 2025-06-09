import { ThemeConfig, theme } from "antd";

export const themeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#13C2C2",
    colorBgBase: "#18181B",
    colorTextBase: "#E4E4E7",
    colorBorderSecondary: "#3F3F46",
    borderRadius: 6,
    fontSize: 15,
  },
  components: {
    Layout: {
      algorithm: true,
      headerBg: "#1F1F22",
      siderBg: "#1A1A1D",
    },
    Menu: {
      algorithm: true,
      itemColor: "#A1A1AA",
      itemHoverColor: "#36CFC9",
      itemSelectedColor: "#5CDBD3",
      itemBg: "#1F1F22",
    },
    Button: {
      algorithm: true,
      defaultBg: "#1F1F22",
      defaultColor: "#E4E4E7",
      defaultHoverBg: "#13C2C2",
      defaultHoverColor: "#FFF",

      colorPrimaryHover: "#006d75",
    },
    Card: {
      algorithm: true,
      headerBg: "#1F1F22",
      colorBgContainer: "#1F1F22",
      colorBorderSecondary: "#3F3F46",
    },
  },
};
