import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function HashingMedium(){
   const problems= [
  { id: 13, title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/" },
  { id: 14, title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/" },
  { id: 15, title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
  { id: 16, title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
  { id: 17, title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { id: 18, title: "4Sum", link: "https://leetcode.com/problems/4sum/" },
  { id: 19, title: "Find All Anagrams in a String", link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
  { id: 20, title: "Insert Delete GetRandom O(1)", link: "https://leetcode.com/problems/insert-delete-getrandom-o1/" },
  { id: 21, title: "Brick Wall", link: "https://leetcode.com/problems/brick-wall/" }
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
  key => key.startsWith(`hashing-medium-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Hashing – Medium Level Problems</h1>
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
   topic="hashing"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Hashing" path1="/hashingeasy" path2="/hashinghard"
    leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}