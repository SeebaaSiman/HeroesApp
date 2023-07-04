import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { HeoresApp } from "./HeoresApp";
import "./style.css";
import { StyleGlobal } from "./ui/StyleGlobal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <StyleGlobal />
      <HeoresApp />
    </React.StrictMode>
  </BrowserRouter>
);
