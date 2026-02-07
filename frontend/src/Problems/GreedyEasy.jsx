import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function GreedyEasy(){
const problems = [
  { id: 1, title: "Assign Cookies", link: "https://leetcode.com/problems/assign-cookies/" },
  { id: 2, title: "Lemonade Change", link: "https://leetcode.com/problems/lemonade-change/" },
  { id: 3, title: "Maximum Units on a Truck", link: "https://leetcode.com/problems/maximum-units-on-a-truck/" },
  { id: 4, title: "Array Partition I", link: "https://leetcode.com/problems/array-partition/" },
  { id: 5, title: "Minimum Sum of Four Digit Number", link: "https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/" },
  { id: 6, title: "Can Place Flowers", link: "https://leetcode.com/problems/can-place-flowers/" },
  { id: 7, title: "Minimum Cost of Buying Candies with Discount", link: "https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/" },
  { id: 8, title: "Valid Palindrome II", link: "https://leetcode.com/problems/valid-palindrome-ii/" },
  { id: 9, title: "Maximum 69 Number", link: "https://leetcode.com/problems/maximum-69-number/" },
  { id: 10, title: "Split a String in Balanced Strings", link: "https://leetcode.com/problems/split-a-string-in-balanced-strings/" }
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
      const solvedEasy = data.easyProblems || [];
      const checkedMap = {};

      solvedEasy.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`greedy-easy-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Greedy Algorithms – Easy Level Problems</h1>
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
  topic="greedy"
/>
        {/* LEVELS BOX */}
    <LevelBox level="GreedyAlgorithms" path1="/greedymedium" path2="/greedyhard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}