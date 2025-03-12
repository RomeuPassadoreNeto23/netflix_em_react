import React from "react";
import ReactDOM from "react-dom/client"; // Importe createRoot

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Crie um root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);