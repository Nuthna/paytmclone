import React, { useState } from "react";

const ReceiveMoney = () => {
  const [amount, setAmount] = useState("");

  const handleReceive = (e) => {
    e.preventDefault();
    alert(`Received $${amount}`);
    setAmount(""); // Reset form
  };

  return (
    <div className="receive-money">
      <h2>Receive Money</h2>
      <form onSubmit={handleReceive} className="form-container">
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-control mb-3"
          required
        />
        <button type="submit" className="btn btn-success">
          Receive Money
        </button>
      </form>
    </div>
  );
};

export default ReceiveMoney;
