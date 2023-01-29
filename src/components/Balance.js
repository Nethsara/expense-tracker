import React, { useContext } from "react";
import { TransactionContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};
