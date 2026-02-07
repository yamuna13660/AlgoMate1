import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function ArrayMedium() {
  // ---------------- PROBLEM LIST ----------------
 const problems = [
  { id: 1, title: "3Sum", link: "https://leetcode.com/problems/3sum/" },
  { id: 2, title: "4Sum", link: "https://leetcode.com/problems/4sum/" },
  { id: 3, title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/" },
  { id: 4, title: "Majority Element II", link: "https://leetcode.com/problems/majority-element-ii/" },
  { id: 5, title: "Kth Largest Element", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
  { id: 6, title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/" },
  { id: 7, title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
  { id: 8, title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/" },
  { id: 9, title: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/" },
  { id: 10, title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },

  { id: 11, title: "Peak Element", link: "https://leetcode.com/problems/find-peak-element/" },
  { id: 12, title: "Kadane’s Algorithm (Max Subarray)", link: "https://leetcode.com/problems/maximum-subarray/" },
  { id: 13, title: "Insert Interval", link: "https://leetcode.com/problems/insert-interval/" },
  { id: 14, title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/" },
  { id: 15, title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/" },
  { id: 16, title: "Gas Station", link: "https://leetcode.com/problems/gas-station/" },
  { id: 17, title: "Jump Game", link: "https://leetcode.com/problems/jump-game/" },
  { id: 18, title: "Rotate Matrix 90°", link: "https://leetcode.com/problems/rotate-image/" },
  { id: 19, title: "Search 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
  { id: 20, title: "Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },

  { id: 21, title: "Missing and Repeating Number", link: "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1" },
  { id: 22, title: "Count Inversions", link: "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1" },
  { id: 23, title: "Rearrange by Sign", link: "https://leetcode.com/problems/rearrange-array-elements-by-sign/" },
  { id: 24, title: "Heap Sort", link: "https://www.geeksforgeeks.org/problems/heap-sort/1" },
  { id: 25, title: "Wave Array", link: "https://www.geeksforgeeks.org/problems/wave-array-1587115621/1" },
  { id: 26, title: "Zigzag Conversion", link: "https://leetcode.com/problems/zigzag-conversion/" },
  { id: 27, title: "Find the Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/" },
  { id: 28, title: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
  { id: 29, title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/" },
  { id: 30, title: "Max Consecutive Ones III", link: "https://leetcode.com/problems/max-consecutive-ones-iii/" }
];


  // ---------------- STATE ----------------
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
      const solvedMedium = data.mediumProblems || [];
      const checkedMap = {};

      solvedMedium.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);

const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`array-medium-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Array – Medium Level Problems</h1>
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
  topic="array"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Array" path1="/arrayeasy" path2="/arrayhard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
