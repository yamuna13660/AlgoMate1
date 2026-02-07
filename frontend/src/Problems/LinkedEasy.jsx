import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function LinkedEasy(){
    const problems= [
    { "id": 1, "title": "Print Linked List", "link": "https://www.geeksforgeeks.org/traversal-of-linked-list/" },
    { "id": 2, "title": "Insert at Beginning", "link": "https://www.geeksforgeeks.org/insert-a-node-at-front-of-a-given-linked-list/" },
    { "id": 3, "title": "Insert at End", "link": "https://www.geeksforgeeks.org/insert-a-node-at-end-of-a-linked-list/" },
    { "id": 4, "title": "Delete a Node", "link": "https://www.geeksforgeeks.org/delete-a-linked-list-node-at-a-given-position/" },
    { "id": 5, "title": "Search an Element", "link": "https://www.geeksforgeeks.org/search-an-element-in-a-linked-list-iterative-and-recursive/" },
    { "id": 6, "title": "Find Length of Linked List", "link": "https://www.geeksforgeeks.org/find-length-of-a-linked-list/" },
    { "id": 7, "title": "Find Middle of Linked List", "link": "https://leetcode.com/problems/middle-of-the-linked-list/" },
    { "id": 8, "title": "Reverse Linked List", "link": "https://leetcode.com/problems/reverse-linked-list/" },
    { "id": 9, "title": "Detect Loop", "link": "https://leetcode.com/problems/linked-list-cycle/" },
    { "id": 10, "title": "Remove Duplicates (Sorted List)", "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/" }
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
      const solvedEasy = data.easyProblems || [];
      const checkedMap = {};

      solvedEasy.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`linked-easy-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">LinkedList – Easy Level Problems</h1>
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
  topic="linked"
/>
        {/* LEVELS BOX */}
    <LevelBox level="LinkedList" path1="/linkedmedium" path2="/linkedhard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}