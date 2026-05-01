import { createRoot } from "react-dom/client";
import { createHead, UnheadProvider } from "@unhead/react/client";
import App from "./App.tsx";
import "./index.css";

const head = createHead();

createRoot(document.getElementById("root")!).render(
  <UnheadProvider head={head}>
    <App />
  </UnheadProvider>
);
