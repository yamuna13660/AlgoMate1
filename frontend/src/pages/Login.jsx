import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ store token
        localStorage.setItem("token", data.token);

        // ✅ store user info
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/practice");
      } else {
        alert(data.message || "Login failed");
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Server error");
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

        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "rgb(234,118,63)", fontWeight: "bold" }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
