import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function StackEasy() {
  // ---------------- PROBLEM LIST ----------------
  const problems =  [
    { "id": 1, "title": "Implement Stack Using Array", "link": "https://www.geeksforgeeks.org/stack-data-structure-introduction-program/" },
    { "id": 2, "title": "Push and Pop Operations", "link": "https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/" },
    { "id": 3, "title": "Peek Operation in Stack", "link": "https://www.geeksforgeeks.org/stack-data-structure/" },
    { "id": 4, "title": "Check Balanced Parentheses", "link": "https://leetcode.com/problems/valid-parentheses/" },
    { "id": 5, "title": "Reverse a String Using Stack", "link": "https://www.geeksforgeeks.org/reverse-a-string-using-stack/" },
    { "id": 6, "title": "Next Greater Element (Basic)", "link": "https://leetcode.com/problems/next-greater-element-i/" },
    { "id": 7, "title": "Evaluate Postfix Expression", "link": "https://www.geeksforgeeks.org/stack-set-4-evaluation-postfix-expression/" },
    { "id": 8, "title": "Implement Stack Using Linked List", "link": "https://www.geeksforgeeks.org/implement-a-stack-using-singly-linked-list/" }
  ]



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
      const solvedEasy = data.easyProblems || [];
      const checkedMap = {};

      solvedEasy.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); 
      // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`stack-easy-`)
).length;
  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Stack – Easy Level Problems</h1>
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
  topic="stack"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Stack" path1="/stackmedium" path2="/stackhard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
