import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function SortingMedium() {
  // ---------------- PROBLEM LIST ----------------
  const problems =  [
    { "id": 1, "title": "Merge Sort", "link": "https://www.geeksforgeeks.org/merge-sort/" },
    { "id": 2, "title": "Quick Sort", "link": "https://www.geeksforgeeks.org/quick-sort/" },
    { "id": 3, "title": "Sort Characters by Frequency", "link": "https://leetcode.com/problems/sort-characters-by-frequency/" },
    { "id": 4, "title": "Sort Array by Parity", "link": "https://leetcode.com/problems/sort-array-by-parity/" },
    { "id": 5, "title": "Top K Frequent Elements", "link": "https://leetcode.com/problems/top-k-frequent-elements/" },
    { "id": 6, "title": "Kth Largest Element in an Array", "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
    { "id": 7, "title": "Minimum Number of Swaps to Sort Array", "link": "https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/" }
  ]
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
      const solvedMedium = data.mediumProblems || [];
      const checkedMap = {};

      solvedMedium.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`sorting-medium-`)
).length;
  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">SortingAlgorithms – Medium Level Problems</h1>
      {/* COMPLETED COUNTER */}
    <h3 className="progress-count">
  Completed: {completedCount} / {problems.length}
</h3>

 
      <div className="practice"> 
        {/* LEFT SIDE CATEGORY LIST */}
     <LevelBox1 level="medium"></LevelBox1>
        {/* RIGHT SIDE TABLE */}
       <LevelBox2 
  problems={problems} 
  checked={checked} 
  setChecked={setChecked}
  difficulty="medium"
  topic="sorting"
/>
        {/* LEVELS BOX */}
    <LevelBox level="SortingAlgorithms" path1="/sortingeasy" path2="/sortinghard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
