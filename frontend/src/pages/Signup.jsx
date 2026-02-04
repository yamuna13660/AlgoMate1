import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // import Link
import "../Components/Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();
  const [accountCreated, setAccountCreated] = useState(false); // ✅ track if signup was successful

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully! 🎉");
        setAccountCreated(true); // ✅ show the button
      } else {
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Server error!");
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create Account</h2>
        <p>Join AlgoMate and start coding 🚀</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>

        {/* 🔹 Show Go to Login button if account is created */}
        {accountCreated && (
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <Link to="/login">
              <button className="signup-btn">Go to Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
