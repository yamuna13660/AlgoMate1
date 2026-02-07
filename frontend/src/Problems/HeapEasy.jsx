import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
import "../Components/Array.css";

export default function HeapEasy() {
  const problems = [
  { id: 1, title: "Kth Largest Element in a Stream", link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
  { id: 2, title: "Last Stone Weight", link: "https://leetcode.com/problems/last-stone-weight/" },
  { id: 3, title: "Minimum Amount of Time to Fill Cups", link: "https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/" },
  { id: 4, title: "Mean of Array After Removing Elements", link: "https://leetcode.com/problems/mean-of-array-after-removing-some-elements/" },
  { id: 5, title: "Minimum Product of k Integers", link: "https://www.geeksforgeeks.org/problems/minimum-product-of-k-integers2549/1" },
  { id: 6, title: "Max Heap Implementation", link: "https://www.geeksforgeeks.org/problems/max-heap-implementation/1" },
  { id: 7, title: "Sort a Nearly Sorted Array", link: "https://www.geeksforgeeks.org/problems/nearly-sorted-1587115620/1" },
  { id: 8, title: "Take Gifts From the Richest Pile", link: "https://leetcode.com/problems/take-gifts-from-the-richest-pile/" },
  { id: 9, title: "Minimum Operations to Exceed Threshold", link: "https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/" },
  { id: 10, title: "Relative Ranks", link: "https://leetcode.com/problems/relative-ranks/" }
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
      const solvedEasy = data.easyProblems || [];
      const checkedMap = {};

      solvedEasy.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); 
       
    });
}, []);

const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`heap-easy-`)
).length;


  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Heap – Easy Level Problems</h1>
      <h3 className="progress-count">
  Completed: {completedCount} / {problems.length}
</h3>


      <div className="practice">
        <LevelBox1 level="easy" />
        <LevelBox2 problems={problems} checked={checked} setChecked={setChecked} difficulty="easy" topic="heap"/>
        <LevelBox
          level="Heap"
          path1="/heapmedium"
          path2="/heaphard"
          leveltext1="medium"
          leveltext2="hard"
          level1="Medium"
          level2="Hard"
        />
      </div>
      <Footer />
    </div>
  );
}
