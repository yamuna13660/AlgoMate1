import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function GreedyMedium(){
  const problems = [
  { id: 11, title: "Gas Station", link: "https://leetcode.com/problems/gas-station/" },
  { id: 12, title: "Jump Game", link: "https://leetcode.com/problems/jump-game/" },
  { id: 13, title: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/" },
  { id: 14, title: "Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/" },
  { id: 15, title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/" },
  { id: 16, title: "Fractional Knapsack", link: "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1" },
  { id: 17, title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/" },
  { id: 18, title: "Job Sequencing Problem", link: "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1" },
  { id: 19, title: "Minimize Cash Flow among Friends", link: "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-of-friends-who-have-borrowed-money-from-each-other/" }
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
      const solvedMedium = data.mediumProblems || {};
      const checkedMap = {};

      solvedMedium.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`greedy-medium-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Greedy Algorithms – Medium Level Problems</h1>
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
   topic="greedy"
/>
        {/* LEVELS BOX */}
    <LevelBox level="GreedyAlgorithms" path1="/greedyeasy" path2="/greedyhard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}