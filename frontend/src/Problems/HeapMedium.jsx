import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function HeapMedium() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
  { id: 11, title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
  { id: 12, title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
  { id: 13, title: "K Closest Points to Origin", link: "https://leetcode.com/problems/k-closest-points-to-origin/" },
  { id: 14, title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/" },
  { id: 15, title: "Merge K Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/" },
  { id: 16, title: "Reorganize String", link: "https://leetcode.com/problems/reorganize-string/" },
  { id: 17, title: "Smallest Number in Infinite Set", link: "https://leetcode.com/problems/smallest-number-in-infinite-set/" },
  { id: 18, title: "Kth Smallest Element in a Sorted Matrix", link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/" },
  { id: 19, title: "Maximum Subsequence Score", link: "https://leetcode.com/problems/maximum-subsequence-score/" }
];


  // ---------------- STATE ----------------
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
      const solvedMedium = data.mediumProblems || {};
      const checkedMap = {};

      solvedMedium.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);

const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`heap-medium-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Heap – Medium Level Problems</h1>
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
  topic="heap"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Heap" path1="/heapeasy" path2="/heaphard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
