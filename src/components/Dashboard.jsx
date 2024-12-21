import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SendMoney from "./SendMoney";
import ReceiveMoney from "./ReceiveMoney";
import TransactionHistory from "./TransactionHistory";

const Dashboard = () => {
  return (
    <div>
      <nav>
        <Link to="send-money">Send Money</Link>
        <Link to="receive-money">Receive Money</Link>
        <Link to="transaction-history">Transaction History</Link>
      </nav>
      <Routes>
        <Route path="send-money" element={<SendMoney />} />
        <Route path="receive-money" element={<ReceiveMoney />} />
        <Route path="transaction-history" element={<TransactionHistory />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
