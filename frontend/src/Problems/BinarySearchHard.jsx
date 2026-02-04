import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function BinarySearchHard() {
  // ---------------- PROBLEM LIST ----------------
  const problems =  [
    { "id": 1, "title": "Median of Two Sorted Arrays", "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
    { "id": 2, "title": "Aggressive Cows", "link": "https://www.geeksforgeeks.org/aggressive-cows-problem/" },
    { "id": 3, "title": "Split Array Largest Sum", "link": "https://leetcode.com/problems/split-array-largest-sum/" },
    { "id": 4, "title": "Find the Smallest Divisor Given a Threshold", "link": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/" },
    { "id": 5, "title": "Koko Eating Bananas", "link": "https://leetcode.com/problems/koko-eating-bananas/" },
    { "id": 6, "title": "Search in 2D Matrix II", "link": "https://leetcode.com/problems/search-a-2d-matrix-ii/" }
  ]

  // ---------------- STATE ----------------
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
  key => key.startsWith(`binarysearch-hard-`)
).length;


  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">BinarySearch – Hard Level Problems</h1>
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
  topic="binarysearch"
/>
        {/* LEVELS BOX */}
    <LevelBox level="BinarySearch" path1="/binarysearcheasy" path2="/binarysearchmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}
