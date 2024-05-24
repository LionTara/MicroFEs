import React from "react";
import { createRoot } from "react-dom/client";

import Expenses from "./Expenses";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <h2 className="text-2xl font-bold mb-4">Your Expenses</h2>
    <Expenses />
  </div>
);
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />); 