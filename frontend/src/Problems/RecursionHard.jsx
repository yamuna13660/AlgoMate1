import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function RecursionHard() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
    { "id": 1, "title": "N-Queens Problem", "link": "https://leetcode.com/problems/n-queens/" },
    { "id": 2, "title": "Sudoku Solver", "link": "https://leetcode.com/problems/sudoku-solver/" },
    { "id": 3, "title": "Word Search", "link": "https://leetcode.com/problems/word-search/" },
    { "id": 4, "title": "Rat in a Maze Problem", "link": "https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/" },
    { "id": 5, "title": "Palindrome Partitioning", "link": "https://leetcode.com/problems/palindrome-partitioning/" }
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
  key => key.startsWith(`recursion-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Recursion – Hard Level Problems</h1>
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
  topic="recursion"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Recursion" path1="/recursioneasy" path2="/recursionmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}
