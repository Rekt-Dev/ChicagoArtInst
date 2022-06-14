import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TestComponent } from "./components/TestComponent";
import { Row } from "./components/Row";
import { OpenCard } from "./components/OpenCard";
import "bulma/css/bulma.min.css";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
      <App />
  </StrictMode>
);
