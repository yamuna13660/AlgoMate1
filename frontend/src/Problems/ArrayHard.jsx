import { useState, useEffect } from "react";

import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function ArrayHard() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
  { id: 1, title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
  { id: 2, title: "Maximum Sum Rectangle", link: "https://www.geeksforgeeks.org/problems/maximum-sum-rectangle2948/1" },
  { id: 3, title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/" },
  { id: 4, title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/" },
  { id: 5, title: "Max Chunks to Make Sorted II", link: "https://leetcode.com/problems/max-chunks-to-make-sorted-ii/" },

  { id: 6, title: "Shortest Subarray with Sum ≥ K", link: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/" },
  { id: 7, title: "Russian Doll Envelopes", link: "https://leetcode.com/problems/russian-doll-envelopes/" },
  { id: 8, title: "Count Submatrices with All Ones", link: "https://leetcode.com/problems/count-submatrices-with-all-ones/" },
  { id: 9, title: "Best Time to Buy/Sell Stock III", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/" },
  { id: 10, title: "Best Time to Buy/Sell Stock IV", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/" },

  { id: 11, title: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/" },
  { id: 12, title: "Kth Smallest Pair Distance", link: "https://leetcode.com/problems/find-k-th-smallest-pair-distance/" },
  { id: 13, title: "Max Points on a Line", link: "https://leetcode.com/problems/max-points-on-a-line/" },
  { id: 14, title: "Split Array Largest Sum", link: "https://leetcode.com/problems/split-array-largest-sum/" },
  { id: 15, title: "Minimum Moves to Equal Array Elements II", link: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/" },

  { id: 16, title: "Maximal Rectangle", link: "https://leetcode.com/problems/maximal-rectangle/" },
  { id: 17, title: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/" },
  { id: 18, title: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/" },
  { id: 19, title: "Count Smaller After Self", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
  { id: 20, title: "Min Fuel Stops", link: "https://leetcode.com/problems/minimum-number-of-refueling-stops/" },

  { id: 21, title: "Minimize Max Distance to Gas Station", link: "https://leetcode.com/problems/minimize-max-distance-to-gas-station/" },
  { id: 22, title: "Longest Increasing Path in Matrix", link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/" },
  { id: 23, title: "Wildcard Matching", link: "https://leetcode.com/problems/wildcard-matching/" },
  { id: 24, title: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/" },
  { id: 25, title: "Palindrome Partitioning II", link: "https://leetcode.com/problems/palindrome-partitioning-ii/" }
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
  key => key.startsWith(`array-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Array – Hard Level Problems</h1>
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
  topic="array"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Array" path1="/arrayeasy" path2="/arraymedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}
