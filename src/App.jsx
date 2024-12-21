import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddBankAccount from "./components/AddBankAccount";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Welcome to PhonePe</h1>
        <hr />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-bank-account" element={<AddBankAccount />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
