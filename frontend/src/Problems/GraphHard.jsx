import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function GraphHard(){
 const problems = [
  { id: 20, title: "Word Ladder II", link: "https://leetcode.com/problems/word-ladder-ii/" },
  { id: 21, title: "Critical Connections in a Network (Bridges)", link: "https://leetcode.com/problems/critical-connections-in-a-network/" },
  { id: 22, title: "Shortest Path in a Grid with Obstacles Elimination", link: "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/" },
  { id: 23, title: "Bridges in Graph (Tarjan's/Fleury's)", link: "https://www.geeksforgeeks.org/problems/bridge-edge-in-graph/1" },
  { id: 24, title: "Reconstruct Itinerary", link: "https://leetcode.com/problems/reconstruct-itinerary/" },
  { id: 25, title: "Making A Large Island", link: "https://leetcode.com/problems/making-a-large-island/" },
  { id: 26, title: "Longest Cycle in a Graph", link: "https://leetcode.com/problems/longest-cycle-in-a-graph/" }
];
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
  key => key.startsWith(`graph-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Graphs – Hard Level Problems</h1>
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
   topic="graph"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Graph" path1="/grapheasy" path2="/graphmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}