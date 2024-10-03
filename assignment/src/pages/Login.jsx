import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (login(username, password)) {
      navigate("/home"); 
    } else {
      alert("Invalid credentials"); // Alert on failed login
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="page-container">
        <div className="container">
          <h1>Login here</h1>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>
            Login
          </button>
        </div>
      </div>
      </form>
    </>
  );
}
