import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function QueueMedium() {
  // ---------------- PROBLEM LIST ----------------
  const problems =   [
    { "id": 1, "title": "Implement Queue Using Stacks", "link": "https://leetcode.com/problems/implement-queue-using-stacks/" },
    { "id": 2, "title": "Sliding Window Maximum", "link": "https://leetcode.com/problems/sliding-window-maximum/" },
    { "id": 3, "title": "First Negative Number in Every Window of Size K", "link": "https://www.geeksforgeeks.org/first-negative-integer-every-window-size-k/" },
    { "id": 4, "title": "Interleave the First Half of Queue with Second Half", "link": "https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/" },
    { "id": 5, "title": "LRU Cache", "link": "https://leetcode.com/problems/lru-cache/" },
    { "id": 6, "title": "Rotting Oranges", "link": "https://leetcode.com/problems/rotting-oranges/" },
    { "id": 7, "title": "Design Circular Queue", "link": "https://leetcode.com/problems/design-circular-queue/" },
    { "id": 8, "title": "Number of Recent Calls", "link": "https://leetcode.com/problems/number-of-recent-calls/" }
  ]


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
  key => key.startsWith(`queue-medium-`)
).length;
  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Queue – Medium Level Problems</h1>
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
  topic="queue"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Queue" path1="/queueeasy" path2="/queuehard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
