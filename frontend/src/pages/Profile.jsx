import "../Components/Profile.css";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({ fullName: "" });
  const [stats, setStats] = useState({ easy: 0, medium: 0, hard: 0 });
  const TOTAL_PROBLEMS = 484;

  useEffect(() => {
    // ✅ SAFE user load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const displayName = userData.name || userData.fullName || userData.email || "User";
setUser({ fullName: displayName });
    }

    // ✅ Fetch progress
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${import.meta.env.VITE_API_URL}/api/progress/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setStats({
            easy: data.easy || 0,
            medium: data.medium || 0,
            hard: data.hard || 0
          });
        })
        .catch(err => console.error(err));
    }
  }, []);


const username = user.fullName
  ? user.fullName.toLowerCase().replace(/\s+/g, "_")
  : "";

  const totalSolved = stats.easy + stats.medium + stats.hard;
  const totalPercent = (totalSolved / TOTAL_PROBLEMS) * 100;

  return (
    <div className="profile-page">
      {/* LEFT PANEL */}
      <div className="profile-left">
        <div className="avatar premium-avatar">
  <span>{user.fullName ? user.fullName.charAt(0).toUpperCase() : "?"}</span>
</div>

        <h3>{username}</h3>
        <p className="fullname">{user.fullName}</p>
      </div>

      {/* MIDDLE PANEL */}
      <div className="profile-middle">
        <h2>Problem Solving Stats</h2>

        <div className="progress-section">
          <p>{totalSolved} / {TOTAL_PROBLEMS} Problems Solved</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${totalPercent}%` }}></div>
          </div>

          <div className="legend">
            <span className="easy-dot">Easy: {stats.easy}</span>
            <span className="medium-dot">Medium: {stats.medium}</span>
            <span className="hard-dot">Hard: {stats.hard}</span>
          </div>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h3>{totalSolved}</h3>
            <p>Total Solved</p>
          </div>
          <div className="stat-card easy-card">
            <h3>{stats.easy}</h3>
            <p>Easy</p>
          </div>
          <div className="stat-card medium-card">
            <h3>{stats.medium}</h3>
            <p>Medium</p>
          </div>
          <div className="stat-card hard-card">
            <h3>{stats.hard}</h3>
            <p>Hard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
