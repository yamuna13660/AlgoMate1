import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function RecursionMedium() {
  // ---------------- PROBLEM LIST ----------------
  const problems =  [
    { "id": 1, "title": "Reverse an Array using Recursion", "link": "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/" },
    { "id": 2, "title": "Generate All Subsequences of a String", "link": "https://www.geeksforgeeks.org/print-subsequences-string/" },
    { "id": 3, "title": "Subset Sum Problem", "link": "https://www.geeksforgeeks.org/subset-sum-problem-dp-25/" },
    { "id": 4, "title": "Permutations of a String", "link": "https://leetcode.com/problems/permutations/" },
    { "id": 5, "title": "Combination Sum", "link": "https://leetcode.com/problems/combination-sum/" },
    { "id": 6, "title": "Tower of Hanoi", "link": "https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/" },
    { "id": 7, "title": "Print All Binary Strings of Length N", "link": "https://www.geeksforgeeks.org/generate-all-binary-strings-from-given-pattern/" }
  ]



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
  key => key.startsWith(`recursion-medium-`)
).length;
  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Recursion – Medium Level Problems</h1>
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
  topic="recursion"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Recursion" path1="/recursioneasy" path2="/recursionhard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
