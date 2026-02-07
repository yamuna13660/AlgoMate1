import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function StackHard() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
    { "id": 1, "title": "Largest Rectangle in Histogram", "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
    { "id": 2, "title": "Maximal Rectangle", "link": "https://leetcode.com/problems/maximal-rectangle/" },
    { "id": 3, "title": "Sliding Window Maximum", "link": "https://leetcode.com/problems/sliding-window-maximum/" },
    { "id": 4, "title": "Trapping Rain Water", "link": "https://leetcode.com/problems/trapping-rain-water/" },
    { "id": 5, "title": "Decode String", "link": "https://leetcode.com/problems/decode-string/" },
    { "id": 6, "title": "Remove K Digits", "link": "https://leetcode.com/problems/remove-k-digits/" },
    { "id": 7, "title": "Basic Calculator", "link": "https://leetcode.com/problems/basic-calculator/" }
  ]

// ---------------- STATE ----------------
  const [checked, setChecked] = useState({});

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  fetch(`https://algomate-backend-gg3u.onrender.com/api/progress/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      const solvedHard = data.hardProblems || [];
      const checkedMap = {};

      solvedHard.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`stack-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Stack – Hard Level Problems</h1>
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
  topic="stack"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Stack" path1="/stackeasy" path2="/stackmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}
