// React;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Global Css;
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
