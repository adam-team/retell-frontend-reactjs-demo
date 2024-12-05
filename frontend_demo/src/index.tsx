import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Retirez l'extension .tsx

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  // Render your React component
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}