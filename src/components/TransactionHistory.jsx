import React from "react";

const TransactionHistory = () => {
  const transactions = [
    { id: 1, type: "Sent", recipient: "Alice", amount: 100 },
    { id: 2, type: "Received", sender: "Bob", amount: 200 },
    { id: 3, type: "Sent", recipient: "Charlie", amount: 50 },
  ];

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Person</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.type}</td>
              <td>
                {transaction.type === "Sent"
                  ? transaction.recipient
                  : transaction.sender}
              </td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
