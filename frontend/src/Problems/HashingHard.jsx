import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function HashingHard(){
    const problems = [
  { id: 22, title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/" },
  { id: 23, title: "Substring with Concatenation of All Words", link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/" },
  { id: 24, title: "Max Points on a Line", link: "https://leetcode.com/problems/max-points-on-a-line/" },
  { id: 25, title: "Longest Chunked Palindrome Decomposition", link: "https://leetcode.com/problems/longest-chunked-palindrome-decomposition/" },
  { id: 26, title: "Naming a Company", link: "https://leetcode.com/problems/naming-a-company/" },
  { id: 27, title: "Grid Illumination", link: "https://leetcode.com/problems/grid-illumination/" },
  { id: 28, title: "Design Twitter (Hash Map + Heap)", link: "https://leetcode.com/problems/design-twitter/" }
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
  key => key.startsWith(`hashing-hard-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Hashing – Hard Level Problems</h1>
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
   topic="hashing"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Hashing" path1="/hashingeasy" path2="/hashingmedium"
    leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
      </div>
      <Footer />
    </div>
  );
}