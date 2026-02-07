import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function GreedyHard(){
 const problems= [
  { id: 20, title: "Candy", link: "https://leetcode.com/problems/candy/" },
  { id: 21, title: "Minimum Number of Refueling Stops", link: "https://leetcode.com/problems/minimum-number-of-refueling-stops/" },
  { id: 22, title: "Patching Array", link: "https://leetcode.com/problems/patching-array/" },
  { id: 23, title: "Find Minimum Time to Finish All Jobs", link: "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/" },
  { id: 24, title: "Course Schedule III", link: "https://leetcode.com/problems/course-schedule-iii/" },
  { id: 25, title: "Earliest Possible Day of Full Bloom", link: "https://leetcode.com/problems/earliest-possible-day-of-full-bloom/" },
  { id: 26, title: "Minimum Cost to Hire K Workers", link: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/" }
];
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
      const solvedHard = data.hardProblems || [];
      const checkedMap = {};

      solvedHard.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);

const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`greedy-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Greedy Algorithms – Hard Level Problems</h1>
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
   topic="greedy"
/>
        {/* LEVELS BOX */}
    <LevelBox level="GreedyAlgorithms" path1="/greedyeasy" path2="/greedymedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}