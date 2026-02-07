import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function SearchingHard() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
  { id: 22, title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
  { id: 23, title: "Split Array Largest Sum", link: "https://leetcode.com/problems/split-array-largest-sum/" },
  { id: 24, title: "Find Minimum in Rotated Sorted Array II", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/" },
  { id: 25, title: "Allocate Minimum Number of Pages", link: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1" },
  { id: 26, title: "Median in a row-wise sorted Matrix", link: "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1" },
  { id: 27, title: "Aggressive Cows", link: "https://www.geeksforgeeks.org/problems/aggressive-cows/1" },
  { id: 28, title: "Smallest Good Base", link: "https://leetcode.com/problems/smallest-good-base/" }
];




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
  key => key.startsWith(`searching-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Searching Algorithms – Hard Level Problems</h1>
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
  topic="searching"
/>
        {/* LEVELS BOX */}
    <LevelBox level="SearchingAlgorithm" path1="/searchingeasy" path2="/searchingmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}
