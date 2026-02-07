import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function ArrayEasy() {
  // ---------------- PROBLEM LIST ----------------
  const problems = [
  { "id": 1, "title": "Reverse a String", "link": "https://www.geeksforgeeks.org/reverse-a-string/" },
  { "id": 2, "title": "Check Palindrome", "link": "https://www.geeksforgeeks.org/check-whether-the-given-string-is-palindrome-or-not/" },
  { "id": 3, "title": "Count Vowels & Consonants", "link": "https://www.geeksforgeeks.org/program-count-vowels-consonants-string/" },
  { "id": 4, "title": "Remove Spaces", "link": "https://www.geeksforgeeks.org/remove-spaces-from-a-given-string/" },
  { "id": 5, "title": "Check Anagram", "link": "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/" },
  { "id": 6, "title": "Toggle Case of Characters", "link": "https://www.geeksforgeeks.org/toggle-case-of-a-character/" },
  { "id": 7, "title": "Count Occurrences of Character", "link": "https://www.geeksforgeeks.org/count-occurrences-of-a-given-character-in-a-string/" },
  { "id": 8, "title": "Find ASCII Value", "link": "https://www.geeksforgeeks.org/program-to-find-ascii-value-of-character/" },
  { "id": 9, "title": "Check Pangram", "link": "https://www.geeksforgeeks.org/pangram-checking/" },
  { "id": 10, "title": "Remove Vowels", "link": "https://www.geeksforgeeks.org/remove-vowels-from-a-string/" },
  { "id": 11, "title": "String Length Without Function", "link": "https://www.geeksforgeeks.org/find-length-of-string-without-library-function/" },
  { "id": 12, "title": "Sort Characters", "link": "https://www.geeksforgeeks.org/sort-string-characters/" },
  { "id": 13, "title": "Replace Character", "link": "https://www.geeksforgeeks.org/remove-all-duplicates-from-a-given-string/" },
  { "id": 14, "title": "Check Subsequence", "link": "https://www.geeksforgeeks.org/check-subsequence-given-array/" },
  { "id": 15, "title": "Frequency of Characters", "link": "https://www.geeksforgeeks.org/counting-frequencies-of-array-elements/" },
  { "id": 16, "title": "Check if Two Strings are Rotation", "link": "https://www.geeksforgeeks.org/check-if-a-string-is-rotation-of-another-string/" },
  { "id": 17, "title": "Remove Duplicates", "link": "https://www.geeksforgeeks.org/remove-duplicates-from-a-given-string/" },
  { "id": 18, "title": "Check Isogram", "link": "https://www.geeksforgeeks.org/check-whether-a-given-string-is-isogram-or-not/" },
  { "id": 19, "title": "Capitalize First Letter", "link": "https://www.geeksforgeeks.org/program-to-capitalize-the-first-and-last-character-of-each-word/" },
  { "id": 20, "title": "Convert Lowercase to Uppercase", "link": "https://www.geeksforgeeks.org/program-to-convert-lowercase-string-to-uppercase/" },
  { "id": 21, "title": "Check Binary String", "link": "https://www.geeksforgeeks.org/program-check-binary-string/" },
  { "id": 22, "title": "Count Words in String", "link": "https://www.geeksforgeeks.org/count-words-in-a-given-string/" },
  { "id": 23, "title": "Remove Character", "link": "https://www.geeksforgeeks.org/remove-character-string/" },
  { "id": 24, "title": "Print Duplicate Characters", "link": "https://www.geeksforgeeks.org/print-duplicate-characters-string/" },
  { "id": 25, "title": "Check String Rotation", "link": "https://www.geeksforgeeks.org/check-if-a-string-is-rotation-of-another-string/" },
  { "id": 26, "title": "Replace Spaces with %20", "link": "https://www.geeksforgeeks.org/urlify-a-given-string-replace-spaces-with-20/" },
  { "id": 27, "title": "Check Palindrome After One Removal", "link": "https://leetcode.com/problems/valid-palindrome-ii/" },
  { "id": 28, "title": "Make String Uppercase", "link": "https://www.geeksforgeeks.org/program-to-convert-lowercase-string-to-uppercase/" },
  { "id": 29, "title": "Check Balanced Parentheses", "link": "https://leetcode.com/problems/valid-parentheses/" },
  { "id": 30, "title": "Remove All Non-Alphabetic Characters", "link": "https://www.geeksforgeeks.org/remove-all-non-alphabet-alphabets-characters-string/" }
];

const [checked, setChecked] = useState({});

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  fetch(`https://algomate-backend-gg3u.onrender.com/api/progress/me`, {
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
      // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`string-easy-`)
).length;
  return (
    <div className="HomePage">
      <Navbar />
      <h1 id="heading1">Strings – Easy Level Problems</h1>
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
  topic="string"
/>
        {/* LEVELS BOX */}
    <LevelBox level="String" path1="/stringmedium" path2="/stringhard"
    leveltext1="medium" leveltext2="hard" level1="Medium" level2="Hard"/>
      </div>
      <Footer />
    </div>
  );
}
