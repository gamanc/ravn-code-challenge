import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
  colors: {
    primary: { 100: "#3D3336", 200: "#EBA59E", 300: "#eb7c71", 400: "#DA584B" },
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
    global: (props: StyleFunctionProps) => ({
      html: {
        height: "100%",
      },
      body: {
        minHeight: "100vh",
        bg: mode("white", "neutral.500")(props),
        color: mode("neutral.500", "white")(props),
      },
    }),
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});
