import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { reportWebVitals } from "./services/webVitals";
import "./styles/globals.css";
import SmoothScroll from "./components/SmoothScroll";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import CustomCursor from "./components/common/CustomCursor";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <SmoothScroll>
      <CustomCursor />
      <App />
      <FloatingWhatsApp />
    </SmoothScroll>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

reportWebVitals();
