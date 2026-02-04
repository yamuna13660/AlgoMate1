import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function BinarySearchMedium() {
  // ---------------- PROBLEM LIST ----------------
  const problems =  [
    { "id": 1, "title": "Search in Rotated Sorted Array", "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
    { "id": 2, "title": "Find Minimum in Rotated Sorted Array", "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
    { "id": 3, "title": "Peak Element", "link": "https://leetcode.com/problems/find-peak-element/" },
    { "id": 4, "title": "Find Square Root of a Number", "link": "https://www.geeksforgeeks.org/square-root-of-an-integer/" },
    { "id": 5, "title": "Kth Missing Positive Number", "link": "https://leetcode.com/problems/kth-missing-positive-number/" },
    { "id": 6, "title": "Allocate Minimum Number of Pages", "link": "https://www.geeksforgeeks.org/allocate-minimum-number-pages/" },
    { "id": 7, "title": "Capacity to Ship Packages Within D Days", "link": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" }
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
      const solvedMedium = data.mediumProblems || {};
      const checkedMap = {};

      solvedMedium.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`binarysearch-medium-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">BinarySearch – Medium Level Problems</h1>
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
  topic="binarysearch"
/>
        {/* LEVELS BOX */}
    <LevelBox level="BinarySearch" path1="/binarysearcheasy" path2="/binarysearchhard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
