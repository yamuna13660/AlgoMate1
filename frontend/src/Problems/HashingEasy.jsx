import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
export default function HashingEasy(){
   const problems = [
  { id: 1, title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
  { id: 2, title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/" },
  { id: 3, title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/" },
  { id: 4, title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/" },
  { id: 5, title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
  { id: 6, title: "Isomorphic Strings", link: "https://leetcode.com/problems/isomorphic-strings/" },
  { id: 7, title: "Check if Array Pairs Are Divisible by k", link: "https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/" },
  { id: 8, title: "Find Common Characters", link: "https://leetcode.com/problems/find-common-characters/" },
  { id: 9, title: "Majority Element", link: "https://leetcode.com/problems/majority-element/" },
  { id: 10, title: "Unique Number of Occurrences", link: "https://leetcode.com/problems/unique-number-of-occurrences/" },
  { id: 11, title: "Jewels and Stones", link: "https://leetcode.com/problems/jewels-and-stones/" },
  { id: 12, title: "Subarray Sum Equals K (Basic)", link: "https://www.geeksforgeeks.org/problems/subarrays-with-sum-k/1" }
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
  key => key.startsWith(`hashing-easy-`)
).length;

  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Hashing – Easy Level Problems</h1>
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
  topic="hashing"
/>
        {/* LEVELS BOX */}
    <LevelBox level="Hashing" path1="/hashingmedium" path2="/hashinghard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}