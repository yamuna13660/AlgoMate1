import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function GraphMedium(){
   const problems = [
  { id: 11, title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/" },
  { id: 12, title: "Course Schedule (Cycle Detection)", link: "https://leetcode.com/problems/course-schedule/" },
  { id: 13, title: "Rotting Oranges (Multisource BFS)", link: "https://leetcode.com/problems/rotting-oranges/" },
  { id: 14, title: "Course Schedule II (Topological Sort)", link: "https://leetcode.com/problems/course-schedule-ii/" },
  { id: 15, title: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/" },
  { id: 16, title: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
  { id: 17, title: "Dijkstra Algorithm (Shortest Path)", link: "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1" },
  { id: 18, title: "Number of Enclaves", link: "https://leetcode.com/problems/number-of-enclaves/" },
  { id: 19, title: "As Far from Land as Possible", link: "https://leetcode.com/problems/as-far-from-land-as-possible/" }
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
      const solvedMedium = data.mediumProblems || [];
      const checkedMap = {};

      solvedMedium.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`graph-medium-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Graphs – Medium Level Problems</h1>
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
   topic="graph"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Graph" path1="/grapheasy" path2="/graphhard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}