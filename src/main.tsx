import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const basePath = "/buildify-reactjs";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basePath}>
    <App />
  </BrowserRouter>,
);
