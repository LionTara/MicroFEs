import React from "react";
import { createRoot } from "react-dom/client";

import User from "user/User";
import Balance from "balance/Balance";
import Expenses from "expenses/Expenses";
import ToDo from "todo/ToDo";

import "./index.scss";

const EmptyComponent = () => {
  return <div className=" p-6 rounded-lg h-full"></div>;
};

const App = () => (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="flex flex-col lg:flex-row mt-10 text-3xl mx-auto max-w-6xl gap-10">
      <div className="flex-1 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <User />
        </div>
        <div className="flex space-x-6">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <Balance />
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <EmptyComponent />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Expenses />
        </div>
      </div>
      <div className="w-full lg:w-1/3 lg:ml-10">
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
          <ToDo />
        </div>
      </div>
    </div>
  </div>
);

const rootElement = document.getElementById("app");

const root = createRoot(rootElement);
root.render(<App />);
