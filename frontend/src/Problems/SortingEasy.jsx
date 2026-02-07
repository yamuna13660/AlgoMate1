import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function SoritngEasy() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
    { "id": 1, "title": "Bubble Sort", "link": "https://www.geeksforgeeks.org/bubble-sort/" },
    { "id": 2, "title": "Selection Sort", "link": "https://www.geeksforgeeks.org/selection-sort/" },
    { "id": 3, "title": "Insertion Sort", "link": "https://www.geeksforgeeks.org/insertion-sort/" },
    { "id": 4, "title": "Sort an Array of 0s, 1s and 2s", "link": "https://leetcode.com/problems/sort-colors/" },
    { "id": 5, "title": "Check if Array is Sorted", "link": "https://www.geeksforgeeks.org/check-if-an-array-is-sorted-and-rotated/" },
    { "id": 6, "title": "Merge Two Sorted Arrays", "link": "https://www.geeksforgeeks.org/merge-two-sorted-arrays/" }
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
      const solvedEasy = data.easyProblems || [];
      const checkedMap = {};

      solvedEasy.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); 
      // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`sorting-easy-`)
).length;
  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">SortingAlgorithms – Easy Level Problems</h1>
      {/* COMPLETED COUNTER */}
  <h3 className="progress-count">
  Completed: {completedCount} / {problems.length}
</h3>

 
      <div className="practice"> 
        {/* LEFT SIDE CATEGORY LIST */}
     <LevelBox1 level="easy"></LevelBox1>
        {/* RIGHT SIDE TABLE */}
       <LevelBox2 
  problems={problems} 
  checked={checked} 
  setChecked={setChecked}
  difficulty="easy"
  topic="sorting"
/>
        {/* LEVELS BOX */}
    <LevelBox level="SortingAlgorithms" path1="/sortingmedium" path2="/sortinghard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
