import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function StackMedium() {
  // ---------------- PROBLEM LIST ----------------
  const problems =  [
    { "id": 1, "title": "Next Greater Element II", "link": "https://leetcode.com/problems/next-greater-element-ii/" },
    { "id": 2, "title": "Stock Span Problem", "link": "https://www.geeksforgeeks.org/the-stock-span-problem/" },
    { "id": 3, "title": "Min Stack", "link": "https://leetcode.com/problems/min-stack/" },
    { "id": 4, "title": "Infix to Postfix Conversion", "link": "https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/" },
    { "id": 5, "title": "Daily Temperatures", "link": "https://leetcode.com/problems/daily-temperatures/" },
    { "id": 6, "title": "Remove Adjacent Duplicates", "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/" },
    { "id": 7, "title": "Simplify Path", "link": "https://leetcode.com/problems/simplify-path/" },
    { "id": 8, "title": "Asteroid Collision", "link": "https://leetcode.com/problems/asteroid-collision/" }
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
      const solvedMedium = data.mediumProblems || [];
      const checkedMap = {};

      solvedMedium.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`stack-medium-`)
).length;
  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Stack – Medium Level Problems</h1>
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
  topic="stack"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Stack" path1="/stackeasy" path2="/stackhard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
