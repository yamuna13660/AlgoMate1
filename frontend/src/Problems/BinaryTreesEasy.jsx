import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function BinaryTreesEasy() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
  { id: 1, title: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
  { id: 2, title: "Binary Tree Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
  { id: 3, title: "Binary Tree Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
  { id: 4, title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
  { id: 5, title: "Minimum Depth of Binary Tree", link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/" },
  { id: 6, title: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/" },
  { id: 7, title: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/" },
  { id: 8, title: "Same Tree", link: "https://leetcode.com/problems/same-tree/" },
  { id: 9, title: "Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/" },
  { id: 10, title: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/" },
  { id: 11, title: "Path Sum", link: "https://leetcode.com/problems/path-sum/" },
  { id: 12, title: "Mirror Tree", link: "https://www.geeksforgeeks.org/problems/mirror-tree/1" }
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
        const solvedEasy = data.easyProblems || {};
        const checkedMap = {};
  
        solvedEasy.forEach(id => {
          checkedMap[id] = true;
        });
  
        setChecked(checkedMap); // ✅ correct
      });
  }, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`binarytrees-easy-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">BinaryTrees – Easy Level Problems</h1>
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
  topic="binarytrees"
/>
        {/* LEVELS BOX */}
    <LevelBox level="BinaryTrees" path1="/binarytreesmedium" path2="/binarytreeshard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
