import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Verdana, sans-serif",
        focusRing: "never",
        defaultRadius: "2em",
      }}
      defaultColorScheme="dark"
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
