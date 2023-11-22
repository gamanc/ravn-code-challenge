const chakraThemeConfig = {
  colors: {
    primary: { 2: "#EBA59E", 4: "#DA584B" },
    secondary: { 4: "#70B252" },
    tertiary: { 4: "#E5B454" },
    neutral: {
      2: "#94979A",
      3: "#393D41",
      4: "#2C2F33",
      5: "#222528",
    },
  },
  styles: {
    global: {
      html: {
        height: "100%",
      },
      body: {
        minHeight: "100vh",
        bg: "neutral.5",
        color: "white",
      },
    },
  },
  config: {
    initialColorMode: "dark",
  },
};

export default chakraThemeConfig;
