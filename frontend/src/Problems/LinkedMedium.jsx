import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function LinkedMedium(){
    const problems= [
    { "id": 1, "title": "Remove Nth Node From End", "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
    { "id": 2, "title": "Detect and Remove Loop", "link": "https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/" },
    { "id": 3, "title": "Add Two Numbers", "link": "https://leetcode.com/problems/add-two-numbers/" },
    { "id": 4, "title": "Intersection of Two Linked Lists", "link": "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
    { "id": 5, "title": "Reverse Linked List in Groups", "link": "https://www.geeksforgeeks.org/reverse-a-linked-list-in-groups-of-given-size/" },
    { "id": 6, "title": "Check Palindrome Linked List", "link": "https://leetcode.com/problems/palindrome-linked-list/" },
    { "id": 7, "title": "Odd Even Linked List", "link": "https://leetcode.com/problems/odd-even-linked-list/" },
    { "id": 8, "title": "Delete Middle Node", "link": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/" },
    { "id": 9, "title": "Swap Nodes in Pairs", "link": "https://leetcode.com/problems/swap-nodes-in-pairs/" },
    { "id": 10, "title": "Rotate Linked List", "link": "https://leetcode.com/problems/rotate-list/" }
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
  key => key.startsWith(`linked-medium-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">LinkedList – Medium Level Problems</h1>
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
   topic="linked"
/>
        {/* LEVELS BOX */}
    <LevelBox level="LinkedList" path1="/linkedeasy" path2="/linkedhard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}