import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock OTP verification
    if (otp === "1234") {
      alert("Login successful");
      navigate("/add-bank-account");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
