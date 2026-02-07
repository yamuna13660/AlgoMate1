import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function SearchingMedium() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
  { id: 13, title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
  { id: 14, title: "Find First and Last Position of Element", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
  { id: 15, title: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
  { id: 16, title: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/" },
  { id: 17, title: "Single Element in a Sorted Array", link: "https://leetcode.com/problems/single-element-in-a-sorted-array/" },
  { id: 18, title: "Koko Eating Bananas", link: "https://leetcode.com/problems/koko-eating-bananas/" },
  { id: 19, title: "Capacity To Ship Packages Within D Days", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
  { id: 20, title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
  { id: 21, title: "Peak Index in a Mountain Array", link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/" }
];



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
      const solvedMedium = data.mediumProblems || [];
      const checkedMap = {};

      solvedMedium.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`searching-medium-`)
).length;
  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Searching Algortihms – Medium Level Problems</h1>
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
  topic="searching"
/>
        {/* LEVELS BOX */}
    <LevelBox level="SearchingAlgorithm" path1="/searchingeasy" path2="/searchinghard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
