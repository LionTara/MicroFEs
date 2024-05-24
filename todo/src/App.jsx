import React from "react";
import { createRoot } from "react-dom/client";
import ToDo from './ToDo'; 
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <ToDo />
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
