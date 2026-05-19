import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import { initErrorTracking } from "./lib/errorTracking";
import "./index.css";

export const createRoot = ViteReactSSG({ routes }, ({ isClient }) => {
  if (isClient) initErrorTracking();
});
