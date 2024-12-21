import React, { useState } from "react";

const SendMoney = () => {
  const [formData, setFormData] = useState({ recipient: "", amount: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    alert(`Sent $${formData.amount} to ${formData.recipient}`);
    setFormData({ recipient: "", amount: "" }); // Reset form
  };

  return (
    <div className="send-money">
      <h2>Send Money</h2>
      <form onSubmit={handleSend} className="form-container">
        <input
          type="text"
          name="recipient"
          placeholder="Recipient Name"
          value={formData.recipient}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />
        <button type="submit" className="btn btn-primary">
          Send Money
        </button>
      </form>
    </div>
  );
};

export default SendMoney;
