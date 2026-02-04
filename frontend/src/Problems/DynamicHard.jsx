import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function DynamicHard(){
const problems = [
  { id: 22, title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/" },
  { id: 23, title: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/" },
  { id: 24, title: "Super Egg Drop", link: "https://leetcode.com/problems/super-egg-drop/" },
  { id: 25, title: "Matrix Chain Multiplication", link: "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1" },
  { id: 26, title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/" },
  { id: 27, title: "Maximum Profit in Job Scheduling", link: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/" },
  { id: 28, title: "Minimum Cost to Cut a Stick", link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/" }
];
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
  key => key.startsWith(`dynamic-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Dynamic Programming – Hard Level Problems</h1>
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
   topic="dynamic"
/>
        {/* LEVELS BOX */}
    <LevelBox level="DynamicProgramming" path1="/dynamiceasy" path2="/dynamicmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}