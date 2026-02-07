import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function SearchingEasy() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
  { id: 1, title: "Binary Search", link: "https://leetcode.com/problems/binary-search/" },
  { id: 2, title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/" },
  { id: 3, title: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/" },
  { id: 4, title: "Sqrt(x)", link: "https://leetcode.com/problems/sqrtx/" },
  { id: 5, title: "Guess Number Higher or Lower", link: "https://leetcode.com/problems/guess-number-higher-or-lower/" },
  { id: 6, title: "Valid Perfect Square", link: "https://leetcode.com/problems/valid-perfect-square/" },
  { id: 7, title: "Find Target Indices After Sorting", link: "https://leetcode.com/problems/find-target-indices-after-sorting-array/" },
  { id: 8, title: "Check If N and Its Double Exist", link: "https://leetcode.com/problems/check-if-n-and-its-double-exist/" },
  { id: 9, title: "Count Negative Numbers in a Sorted Matrix", link: "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/" },
  { id: 10, title: "Fair Candy Swap", link: "https://leetcode.com/problems/fair-candy-swap/" },
  { id: 11, title: "Missing Number", link: "https://leetcode.com/problems/missing-number/" },
  { id: 12, title: "Searching an element in a sorted array", link: "https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1" }
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
  key => key.startsWith(`searching-easy-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Searching Algorithms – Easy Level Problems</h1>
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
  topic="searching"
/>
        {/* LEVELS BOX */}
    <LevelBox level="SearchingAlgorithm" path1="/searchingmedium" path2="/searchinghard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
