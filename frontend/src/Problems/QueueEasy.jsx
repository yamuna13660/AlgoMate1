import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function QueueEasy() {
  // ---------------- PROBLEM LIST ----------------
  const problems =  [
    { "id": 1, "title": "Implement Queue Using Array", "link": "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/" },
    { "id": 2, "title": "Implement Queue Using Linked List", "link": "https://www.geeksforgeeks.org/queue-linked-list-implementation/" },
    { "id": 3, "title": "Queue Operations (Enqueue, Dequeue)", "link": "https://www.geeksforgeeks.org/queue-data-structure/" },
    { "id": 4, "title": "Reverse a Queue", "link": "https://www.geeksforgeeks.org/reversing-a-queue/" },
    { "id": 5, "title": "Circular Queue Implementation", "link": "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/" },
    { "id": 6, "title": "Generate Binary Numbers from 1 to N", "link": "https://www.geeksforgeeks.org/generate-binary-numbers-1-n-using-queue/" },
    { "id": 7, "title": "First Non-Repeating Character in a Stream", "link": "https://www.geeksforgeeks.org/first-non-repeating-character-stream-characters/" },
    { "id": 8, "title": "Implement Stack Using Queue", "link": "https://leetcode.com/problems/implement-stack-using-queues/" }
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
  
        setChecked(checkedMap); // ✅ correct
      });
  }, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`queue-easy-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Queue – Easy Level Problems</h1>
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
   topic="queue"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Queue" path1="/queuemedium" path2="/queuehard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
