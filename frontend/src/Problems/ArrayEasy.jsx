import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";
import "../Components/Array.css";

export default function ArrayEasy() {
 const problems = [
  { id: 1, title: "Find the Largest Element", link: "https://www.geeksforgeeks.org/problems/largest-element-in-array1110/1" },
  { id: 2, title: "Find Second Largest Element", link: "https://www.geeksforgeeks.org/problems/second-largest3735/1" },
  { id: 3, title: "Check if Array is Sorted", link: "https://www.geeksforgeeks.org/problems/check-if-array-is-sorted-and-rotated-1587115620/1" },
  { id: 4, title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
  { id: 5, title: "Move Zeroes", link: "https://leetcode.com/problems/move-zeroes/" },
  { id: 6, title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
  { id: 7, title: "Rotate Array by K", link: "https://leetcode.com/problems/rotate-array/" },
  { id: 8, title: "Linear Search", link: "https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1" },
  { id: 9, title: "Binary Search", link: "https://leetcode.com/problems/binary-search/" },
  { id: 10, title: "Check Palindrome Array", link: "https://www.geeksforgeeks.org/problems/palindrome-array0817/1" },
  { id: 11, title: "Count Frequency of Elements", link: "https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1" },
  { id: 12, title: "Missing Number", link: "https://leetcode.com/problems/missing-number/" },
  { id: 13, title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/" },
  { id: 14, title: "Union of Two Arrays", link: "https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1" },
  { id: 15, title: "Find Single Number", link: "https://leetcode.com/problems/single-number/" },
  { id: 16, title: "Plus One", link: "https://leetcode.com/problems/plus-one/" },
  { id: 17, title: "Largest Number At Least Twice of Others", link: "https://leetcode.com/problems/largest-number-at-least-twice-of-others/" },
  { id: 18, title: "Sort Colors (0s, 1s, 2s)", link: "https://leetcode.com/problems/sort-colors/" },
  { id: 19, title: "Richest Customer Wealth", link: "https://leetcode.com/problems/richest-customer-wealth/" },
  { id: 20, title: "Kids With Greatest Candies", link: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/" }
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
  key => key.startsWith(`array-easy-`)
).length;


  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Array – Easy Level Problems</h1>
      <h3 className="progress-count">
  Completed: {completedCount} / {problems.length}
</h3>


      <div className="practice">
        <LevelBox1 level="easy" />
        <LevelBox2 problems={problems} checked={checked} setChecked={setChecked} difficulty="easy" topic="array"/>
        <LevelBox
          level="Array"
          path1="/arraymedium"
          path2="/arrayhard"
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
