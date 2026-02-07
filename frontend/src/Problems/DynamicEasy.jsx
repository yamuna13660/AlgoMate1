import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function DynamicEasy(){
 const problems = [
  { id: 1, title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" },
  { id: 2, title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/" },
  { id: 3, title: "N-th Tribonacci Number", link: "https://leetcode.com/problems/n-th-tribonacci-number/" },
  { id: 4, title: "Min Cost Climbing Stairs", link: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
  { id: 5, title: "House Robber", link: "https://leetcode.com/problems/house-robber/" },
  { id: 6, title: "Divisor Game", link: "https://leetcode.com/problems/divisor-game/" },
  { id: 7, title: "Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/" },
  { id: 8, title: "Is Subsequence", link: "https://leetcode.com/problems/is-subsequence/" },
  { id: 9, title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
  { id: 10, title: "Counting Bits", link: "https://leetcode.com/problems/counting-bits/" },
  { id: 11, title: "Maximum Subarray (Kadane's)", link: "https://leetcode.com/problems/maximum-subarray/" },
  { id: 12, title: "Get Maximum in Generated Array", link: "https://leetcode.com/problems/get-maximum-in-generated-array/" }
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
      const solvedEasy = data.easyProblems || [];
      const checkedMap = {};

      solvedEasy.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`dynamic-easy-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Dynamic Programming – Easy Level Problems</h1>
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
  topic="dynamic"
/>
        {/* LEVELS BOX */}
    <LevelBox level="DynamicProgramming" path1="/dynamicmedium" path2="/dynamichard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}