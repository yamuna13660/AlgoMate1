import { useState, useEffect } from "react";

import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function HeapHard() {
  // ---------------- PROBLEM LIST ----------------
 const problems = [
  { id: 20, title: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/" },
  { id: 21, title: "Sliding Window Median", link: "https://leetcode.com/problems/sliding-window-median/" },
  { id: 22, title: "Merge K Sorted Arrays", link: "https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1" },
  { id: 23, title: "Trapping Rain Water II", link: "https://leetcode.com/problems/trapping-rain-water-ii/" },
  { id: 24, title: "Minimum Cost to Hire K Workers", link: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/" },
  { id: 25, title: "IPO (Maximize Capital)", link: "https://leetcode.com/problems/ipo/" },
  { id: 26, title: "The Skyline Problem", link: "https://leetcode.com/problems/the-skyline-problem/" }
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
      const solvedHard = data.hardProblems || [];
      const checkedMap = {};

      solvedHard.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`heap-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Heap – Hard Level Problems</h1>
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
  topic="heap"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Heap" path1="/heapeasy" path2="/heapmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}
