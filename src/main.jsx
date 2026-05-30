// React;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Global Css;
import "./index.css";

// Components;
import App from "./App.jsx";

// Context Provider;
import { ThemeContextProvider } from "./contexts/ThemContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
);
