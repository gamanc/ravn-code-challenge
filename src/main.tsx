import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import chakraThemeConfig from "./config/theme.ts";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript
      initialColorMode={chakraThemeConfig.config.initialColorMode}
    />
    <App />
  </React.StrictMode>
);
