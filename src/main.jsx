import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { HeoresApp } from "./HeoresApp";
import { StyleGlobal } from "./ui";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <StyleGlobal />
      <HeoresApp />
    </React.StrictMode>
  </BrowserRouter>
);
