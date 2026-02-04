import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function RecursionEasy() {
  // ---------------- PROBLEM LIST ----------------
  const problems =  [
    { "id": 1, "title": "Print Numbers from 1 to N using Recursion", "link": "https://www.geeksforgeeks.org/print-1-to-n-without-using-loops/" },
    { "id": 2, "title": "Factorial of a Number", "link": "https://www.geeksforgeeks.org/program-for-factorial-of-a-number/" },
    { "id": 3, "title": "Sum of First N Natural Numbers", "link": "https://www.geeksforgeeks.org/sum-of-natural-numbers-using-recursion/" },
    { "id": 4, "title": "Power of a Number (x^n)", "link": "https://www.geeksforgeeks.org/write-a-program-to-calculate-powxn/" },
    { "id": 5, "title": "Fibonacci Number", "link": "https://leetcode.com/problems/fibonacci-number/" },
    { "id": 6, "title": "Check if a String is Palindrome", "link": "https://www.geeksforgeeks.org/recursive-function-check-string-palindrome/" }
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
      const solvedEasy = data.easyProblems || {};
      const checkedMap = {};

      solvedEasy.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); 
      // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`recursion-easy-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Recursion – Easy Level Problems</h1>
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
  topic="recursion"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Recursion" path1="/recursionmedium" path2="/recursionhard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
