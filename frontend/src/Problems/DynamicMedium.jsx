import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function DynamicMedium(){
  const problems = [
  { id: 13, title: "Coin Change", link: "https://leetcode.com/problems/coin-change/" },
  { id: 14, title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
  { id: 15, title: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/" },
  { id: 16, title: "Word Break", link: "https://leetcode.com/problems/word-break/" },
  { id: 17, title: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
  { id: 18, title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/" },
  { id: 19, title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/" },
  { id: 20, title: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/" },
  { id: 21, title: "0/1 Knapsack Problem", link: "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1" }
];

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
  key => key.startsWith(`dynamic-medium-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Dynamic Programming – Medium Level Problems</h1>
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
   topic="dynamic"
/>
        {/* LEVELS BOX */}
    <LevelBox level="DynamicProgramming" path1="/dynamiceasy" path2="/dynamichard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}