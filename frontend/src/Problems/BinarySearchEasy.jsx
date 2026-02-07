import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function BinarySearchEasy() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
    { "id": 1, "title": "Binary Search (Iterative)", "link": "https://leetcode.com/problems/binary-search/" },
    { "id": 2, "title": "Binary Search (Recursive)", "link": "https://www.geeksforgeeks.org/binary-search/" },
    { "id": 3, "title": "Find First and Last Position of Element", "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
    { "id": 4, "title": "Search Insert Position", "link": "https://leetcode.com/problems/search-insert-position/" },
    { "id": 5, "title": "Count Occurrences in Sorted Array", "link": "https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/" },
    { "id": 6, "title": "Floor and Ceil in Sorted Array", "link": "https://www.geeksforgeeks.org/floor-and-ceil-in-a-sorted-array/" },
    { "id": 7, "title": "Check If Array is Sorted", "link": "https://www.geeksforgeeks.org/check-if-an-array-is-sorted-and-rotated/" }
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
  
        setChecked(checkedMap); // ✅ correct
      });
  }, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`binarysearch-easy-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">BinarySearch – Easy Level Problems</h1>
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
  topic="binarysearch"
/>
        {/* LEVELS BOX */}
    <LevelBox level="BinarySearch" path1="/binarysearchmedium" path2="/binarysearchhard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
