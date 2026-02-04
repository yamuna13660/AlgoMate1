import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function StringHard(){
    const problems=[
  { "id": 1, "title": "Wildcard Matching", "link": "https://leetcode.com/problems/wildcard-matching/" },
  { "id": 2, "title": "Regular Expression Matching", "link": "https://leetcode.com/problems/regular-expression-matching/" },
  { "id": 3, "title": "Edit Distance", "link": "https://leetcode.com/problems/edit-distance/" },
  { "id": 4, "title": "Shortest Palindrome", "link": "https://leetcode.com/problems/shortest-palindrome/" },
  { "id": 5, "title": "Palindrome Partitioning II", "link": "https://leetcode.com/problems/palindrome-partitioning-ii/" },
  { "id": 6, "title": "Minimum Window Substring", "link": "https://leetcode.com/problems/minimum-window-substring/" },
  { "id": 7, "title": "Distinct Subsequences", "link": "https://leetcode.com/problems/distinct-subsequences/" },
  { "id": 8, "title": "Text Justification", "link": "https://leetcode.com/problems/text-justification/" },
  { "id": 9, "title": "Word Ladder II", "link": "https://leetcode.com/problems/word-ladder-ii/" },
  { "id": 10, "title": "Word Search II", "link": "https://leetcode.com/problems/word-search-ii/" },
  { "id": 11, "title": "Scramble String", "link": "https://leetcode.com/problems/scramble-string/" },
  { "id": 12, "title": "Interleaving String", "link": "https://leetcode.com/problems/interleaving-string/" },
  { "id": 13, "title": "Smallest Subsequence of Distinct Characters", "link": "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/" },
  { "id": 14, "title": "Restore IP Addresses", "link": "https://leetcode.com/problems/restore-ip-addresses/" },
  { "id": 15, "title": "Find All Concatenated Words", "link": "https://leetcode.com/problems/concatenated-words/" },
  { "id": 16, "title": "Alien Dictionary", "link": "https://leetcode.com/problems/alien-dictionary/" },
  { "id": 17, "title": "String Transform to Another String", "link": "https://leetcode.com/problems/string-transforms-into-another-string/" },
  { "id": 18, "title": "Longest Duplicate Substring", "link": "https://leetcode.com/problems/longest-duplicate-substring/" },
  { "id": 19, "title": "Binary Expression Tree Evaluation", "link": "https://leetcode.com/problems/evaluate-boolean-expression-tree/" },
  { "id": 20, "title": "Longest Happy Prefix", "link": "https://leetcode.com/problems/longest-happy-prefix/" },
  { "id": 21, "title": "Remove Invalid Parentheses", "link": "https://leetcode.com/problems/remove-invalid-parentheses/" },
  { "id": 22, "title": "Word Break II", "link": "https://leetcode.com/problems/word-break-ii/" },
  { "id": 23, "title": "Find Kth Smallest Number in Lexicographical Order", "link": "https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/" },
  { "id": 24, "title": "Basic Calculator", "link": "https://leetcode.com/problems/basic-calculator/" },
  { "id": 25, "title": "Parse Lisp Expression", "link": "https://leetcode.com/problems/parse-lisp-expression/" },
  { "id": 26, "title": "String Multiplication Large Numbers", "link": "https://leetcode.com/problems/multiply-strings/" },
  { "id": 27, "title": "Word Squares", "link": "https://leetcode.com/problems/word-squares/" },
  { "id": 28, "title": "Palindrome Pairs", "link": "https://leetcode.com/problems/palindrome-pairs/" },
  { "id": 29, "title": "Optimal String Compression", "link": "https://leetcode.com/problems/string-compression-ii/" },
  { "id": 30, "title": "Longest Ideal Subsequence", "link": "https://leetcode.com/problems/longest-ideal-subsequence/" }
]
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
  key => key.startsWith(`string-hard-`)
).length;
    return(
       <div className="HomePage">
             <Navbar />
             <h1 id="heading1">Strings – Hard Level Problems</h1>
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
         topic="string"
       />
               {/* LEVELS BOX */}
           <LevelBox level="String" path1="/stringeasy" path2="/stringmedium"
           leveltext1="easy" leveltext2="medium" level1="Easy" level2="Medium"/>
             </div>
             <Footer />
           </div>
    )
}