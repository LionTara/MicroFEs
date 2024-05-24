import React, { useState } from "react";
import AddToBalance from "./AddToBalance";
import "./index.scss";

const Balance = () => {
  const [balance, setBalance] = useState(0);

  const addToBalance = (amount) => {
    const numAmount = Number(amount);
    if (!isNaN(numAmount)) {
      setBalance((prevBalance) => prevBalance + numAmount);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Balance</h2>
      <div className="flex items-center justify-between mb-6">
        <div className="text-4xl font-semibold">${balance.toFixed(2)}</div>
        <AddToBalance addToBalance={addToBalance} />
      </div>
    </div>
  );
};

export default Balance;
