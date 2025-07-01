import "@fontsource-variable/overpass/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster position="top-center" />
  </StrictMode>,
);
