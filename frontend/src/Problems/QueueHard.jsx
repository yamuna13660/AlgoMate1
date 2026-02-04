import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function QueueHard() {
  // ---------------- PROBLEM LIST ----------------
  const problems =    [
    { "id": 1, "title": "Shortest Subarray with Sum at Least K", "link": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/" },
    { "id": 2, "title": "Constrained Subsequence Sum", "link": "https://leetcode.com/problems/constrained-subsequence-sum/" },
    { "id": 3, "title": "Minimum Number of K Consecutive Bit Flips", "link": "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/" },
    { "id": 4, "title": "Sliding Window Maximum (Deque Optimized)", "link": "https://leetcode.com/problems/sliding-window-maximum/" },
    { "id": 5, "title": "Reveal Cards in Increasing Order", "link": "https://leetcode.com/problems/reveal-cards-in-increasing-order/" },
    { "id": 6, "title": "Gas Station", "link": "https://leetcode.com/problems/gas-station/" }
  ]



// ---------------- STATE ----------------
  const [checked, setChecked] = useState({});

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  fetch(`${import.meta.env.VITE_API_URL}/api/progress/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      const solvedHard = data.hardProblems || {};
      const checkedMap = {};

      solvedHard.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`queue-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Queue – Hard Level Problems</h1>
      {/* COMPLETED COUNTER */}
      <h3 className="progress-count">
  Completed: {completedCount} / {problems.length}
</h3>

 
      <div className="practice"> 
        {/* LEFT SIDE CATEGORY LIST */}
     <LevelBox1 level="hard"></LevelBox1>
        {/* RIGHT SIDE TABLE */}
       <LevelBox2 
  problems={problems} 
  checked={checked} 
  setChecked={setChecked}
  difficulty="hard"
  topic="queue"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Queue" path1="/queueeasy" path2="/queuemedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}
