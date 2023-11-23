import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import chakraThemeConfig from "./constants/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript
      initialColorMode={chakraThemeConfig.config.initialColorMode}
    />
    <App />
  </React.StrictMode>
);
