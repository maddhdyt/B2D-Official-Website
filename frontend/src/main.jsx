import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { reportWebVitals } from "./services/webVitals";
import "./styles/globals.css";
import SmoothScroll from "./components/SmoothScroll";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import CustomCursor from "./components/common/CustomCursor";
import { AuthProvider } from "./contexts/AuthContext";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <AuthProvider>
      <SmoothScroll>
        <CustomCursor />
        <App />
        <FloatingWhatsApp />
      </SmoothScroll>
    </AuthProvider>
  </StrictMode>
);

const root = createRoot(rootElement);
root.render(app);

reportWebVitals();
