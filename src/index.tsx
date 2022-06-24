import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "bulma/css/bulma.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
