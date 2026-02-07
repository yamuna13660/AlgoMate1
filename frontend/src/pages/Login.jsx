import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Signup.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        // 🔹 Save token
        localStorage.setItem("token", data.token);
         window.location.href = "/practice";// redirect to profile
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Server error!");
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Welcome Back</h2>
        <p>Login to AlgoMate 🚀</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
