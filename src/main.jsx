// React;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React-router-dom
import { BrowserRouter } from "react-router-dom";

// Context;
import { FetchMangasProvider } from "./contexts/FetchMangasContext.jsx";

// Global Css;
import "./index.css";

// Pages
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FetchMangasProvider>
        <App />
      </FetchMangasProvider>
    </BrowserRouter>
  </StrictMode>,
);
