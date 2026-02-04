import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function SortingHard() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
    { "id": 1, "title": "Count Inversions in Array", "link": "https://www.geeksforgeeks.org/counting-inversions/" },
    { "id": 2, "title": "Largest Number Formed from Array", "link": "https://leetcode.com/problems/largest-number/" },
    { "id": 3, "title": "Reverse Pairs", "link": "https://leetcode.com/problems/reverse-pairs/" },
    { "id": 4, "title": "Sort a Linked List", "link": "https://leetcode.com/problems/sort-list/" },
    { "id": 5, "title": "Wiggle Sort II", "link": "https://leetcode.com/problems/wiggle-sort-ii/" }
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
  key => key.startsWith(`sorting-hard-`)
).length;
  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">SortingAlgorithms – Hard Level Problems</h1>
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
  topic="sorting"
/>
        {/* LEVELS BOX */}
    <LevelBox level="SortingAlgorithms" path1="/sortingeasy" path2="/sortingmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}
