import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function LinkedHard(){
    const problems= [
    { "id": 1, "title": "Merge K Sorted Lists", "link": "https://leetcode.com/problems/merge-k-sorted-lists/" },
    { "id": 2, "title": "Reverse Nodes in K Group", "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
    { "id": 3, "title": "Copy List with Random Pointer", "link": "https://leetcode.com/problems/copy-list-with-random-pointer/" },
    { "id": 4, "title": "LRU Cache (Using Linked List)", "link": "https://leetcode.com/problems/lru-cache/" },
    { "id": 5, "title": "Flatten a Multilevel Doubly Linked List", "link": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/" },
    { "id": 6, "title": "Reorder List", "link": "https://leetcode.com/problems/reorder-list/" },
    { "id": 7, "title": "Sort Linked List", "link": "https://leetcode.com/problems/sort-list/" },
    { "id": 8, "title": "Split Linked List in Parts", "link": "https://leetcode.com/problems/split-linked-list-in-parts/" }
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
      const solvedHard = data.hardProblems || {};
      const checkedMap = {};

      solvedHard.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);

const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`linked-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">LinkedList – Hard Level Problems</h1>
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
   topic="linked"
/>
        {/* LEVELS BOX */}
    <LevelBox level="LinkedList" path1="/linkedeasy" path2="/linkedmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}