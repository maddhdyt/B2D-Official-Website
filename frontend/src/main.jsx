import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { reportWebVitals } from "./services/webVitals";
import "./styles/globals.css";
import SmoothScroll from "./components/SmoothScroll";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

reportWebVitals();
