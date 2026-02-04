import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function GraphEasy(){
  const problems = [
  { id: 1, title: "Find Center of Star Graph", link: "https://leetcode.com/problems/find-center-of-star-graph/" },
  { id: 2, title: "Find if Path Exists in Graph", link: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
  { id: 3, title: "Flood Fill", link: "https://leetcode.com/problems/flood-fill/" },
  { id: 4, title: "Island Perimeter", link: "https://leetcode.com/problems/island-perimeter/" },
  { id: 5, title: "BFS Traversal of Graph", link: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1" },
  { id: 6, title: "DFS Traversal of Graph", link: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1" },
  { id: 7, title: "Employee Importance", link: "https://leetcode.com/problems/employee-importance/" },
  { id: 8, title: "Find the Town Judge", link: "https://leetcode.com/problems/find-the-town-judge/" },
  { id: 9, title: "Minimum Number of Vertices to Reach All Nodes", link: "https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/" },
  { id: 10, title: "Print Adjacency List", link: "https://www.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1" }
];

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

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`graph-easy-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Graphs – Easy Level Problems</h1>
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
  topic="graph"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Graph" path1="/graphmedium" path2="/graphhard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}