const chakraThemeConfig = {
  colors: {
    primary: { 100: "#3D3336", 200: "#EBA59E", 400: "#DA584B" },
    secondary: { 100: "#333D37", 400: "#70B252" },
    tertiary: { 100: "#403D36", 400: "#E5B454" },
    neutral: {
      100: "#36393D",
      200: "#94979A",
      300: "#393D41",
      400: "#2C2F33",
      500: "#222528",
    },
    "neutral.light": {
      100: "#36393d",
      400: "#fff",
    },
  },
  styles: {
    global: {
      html: {
        height: "100%",
      },
      body: {
        minHeight: "100vh",
        bg: "neutral.500",
        color: "white",
      },
    },
  },
  config: {
    initialColorMode: "dark",
  },
};

export default chakraThemeConfig;
