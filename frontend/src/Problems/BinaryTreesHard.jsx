import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function BinaryTreesHard() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
  { id: 22, title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
  { id: 23, title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
  { id: 24, title: "Binary Tree Cameras", link: "https://leetcode.com/problems/binary-tree-cameras/" },
  { id: 25, title: "All Nodes Distance K in Binary Tree", link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/" },
  { id: 26, title: "Burning Tree", link: "https://www.geeksforgeeks.org/problems/burning-tree/1" },
  { id: 27, title: "Sum of Distances in Tree", link: "https://leetcode.com/problems/sum-of-distances-in-tree/" },
  { id: 28, title: "K-th Ancestor in a Tree", link: "https://www.geeksforgeeks.org/problems/kth-ancestor-in-a-tree/1" }
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
      const solvedHard = data.hardProblems || {};
      const checkedMap = {};

      solvedHard.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`binarytrees-hard-`)
).length;


  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">BinaryTrees – Hard Level Problems</h1>
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
  topic="binarytrees"
/>
        {/* LEVELS BOX */}
    <LevelBox level="BinaryTrees" path1="/binarytreeseasy" path2="/binarytreesmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}
