import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBankAccount = () => {
  const [account, setAccount] = useState("");
  const navigate = useNavigate();

  const handleAddBank = () => {
    alert("Bank account added: " + account);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Add Bank Account</h2>
      <input
        type="text"
        placeholder="Bank Account Number"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        required
      />
      <button type="button" onClick={handleAddBank}>
        Add Account
      </button>
    </div>
  );
};

export default AddBankAccount;
