import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const colors = {
  primary: { 2: "#EBA59E", 4: "#DA584B" },
  secondary: { 4: "#70B252" },
  tertiary: { 4: "#E5B454" },
  neutral: {
    2: "#94979A",
    3: "#393D41",
    4: "#2C2F33",
    5: "#222528",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
