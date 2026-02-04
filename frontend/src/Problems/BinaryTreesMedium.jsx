import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function BinaryTreesMedium() {
  // ---------------- PROBLEM LIST ----------------
 const problems = [
  { id: 13, title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
  { id: 14, title: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
  { id: 15, title: "Binary Tree Right Side View", link: "https://leetcode.com/problems/binary-tree-right-side-view/" },
  { id: 16, title: "Top View of Binary Tree", link: "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1" },
  { id: 17, title: "Bottom View of Binary Tree", link: "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1" },
  { id: 18, title: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
  { id: 19, title: "Construct Tree from Preorder and Inorder", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
  { id: 20, title: "Vertical Order Traversal", link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" },
  { id: 21, title: "Flatten Binary Tree to Linked List", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" }
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
      const solvedMedium = data.mediumProblems || {};
      const checkedMap = {};

      solvedMedium.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`binarytrees-medium-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">BinaryTrees – Medium Level Problems</h1>
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
  topic="binarytrees"
/>
        {/* LEVELS BOX */}
    <LevelBox level="BinaryTrees" path1="/binarytreeseasy" path2="/binarytreeshard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
