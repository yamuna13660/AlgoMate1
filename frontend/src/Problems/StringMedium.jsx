import { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import "../Components/Array.css";
import Footer from "../pages/Footer";
import LevelBox from "../pages/LevelBox";
import LevelBox1 from "../pages/LevelBox1";
import LevelBox2 from "../pages/LevelBox2";

export default function StringMedium(){
    const problems=[
  { "id": 1, "title": "Longest Substring Without Repeating Characters", "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { "id": 2, "title": "String Compression", "link": "https://leetcode.com/problems/string-compression/" },
  { "id": 3, "title": "Group Anagrams", "link": "https://leetcode.com/problems/group-anagrams/" },
  { "id": 4, "title": "Longest Palindromic Substring", "link": "https://leetcode.com/problems/longest-palindromic-substring/" },
  { "id": 5, "title": "Valid Anagram", "link": "https://leetcode.com/problems/valid-anagram/" },
  { "id": 6, "title": "Valid Parentheses", "link": "https://leetcode.com/problems/valid-parentheses/" },
  { "id": 7, "title": "Add Strings", "link": "https://leetcode.com/problems/add-strings/" },
  { "id": 8, "title": "Multiply Strings", "link": "https://leetcode.com/problems/multiply-strings/" },
  { "id": 9, "title": "Implement strStr()", "link": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
  { "id": 10, "title": "String to Integer (atoi)", "link": "https://leetcode.com/problems/string-to-integer-atoi/" },
  { "id": 11, "title": "Longest Common Prefix", "link": "https://leetcode.com/problems/longest-common-prefix/" },
  { "id": 12, "title": "Repeated Substring Pattern", "link": "https://leetcode.com/problems/repeated-substring-pattern/" },
  { "id": 13, "title": "Minimum Remove to Make Valid Parentheses", "link": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/" },
  { "id": 14, "title": "Custom Sort String", "link": "https://leetcode.com/problems/custom-sort-string/" },
  { "id": 15, "title": "String Rotation Check", "link": "https://www.geeksforgeeks.org/check-if-a-string-is-rotation-of-another-string/" },
  { "id": 16, "title": "Longest Common Subsequence (LCS)", "link": "https://leetcode.com/problems/longest-common-subsequence/" },
  { "id": 17, "title": "Count Palindromic Substrings", "link": "https://leetcode.com/problems/palindromic-substrings/" },
  { "id": 18, "title": "Z-Algorithm for Pattern Searching", "link": "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/" },
  { "id": 19, "title": "Rabin-Karp Pattern Matching", "link": "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/" },
  { "id": 20, "title": "KMP Algorithm", "link": "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/" },
  { "id": 21, "title": "Word Break Problem", "link": "https://leetcode.com/problems/word-break/" },
  { "id": 22, "title": "Longest Palindromic Subsequence", "link": "https://leetcode.com/problems/longest-palindromic-subsequence/" },
  { "id": 23, "title": "Check Anagram in Substring", "link": "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
  { "id": 24, "title": "Reverse Words in a String", "link": "https://leetcode.com/problems/reverse-words-in-a-string/" },
  { "id": 25, "title": "Letter Case Permutation", "link": "https://leetcode.com/problems/letter-case-permutation/" },
  { "id": 26, "title": "Decode String", "link": "https://leetcode.com/problems/decode-string/" },
  { "id": 27, "title": "Check Isomorphic Strings", "link": "https://leetcode.com/problems/isomorphic-strings/" },
  { "id": 28, "title": "Remove K Digits", "link": "https://leetcode.com/problems/remove-k-digits/" },
  { "id": 29, "title": "Basic Calculator II", "link": "https://leetcode.com/problems/basic-calculator-ii/" },
  { "id": 30, "title": "Longest Repeating Character Replacement", "link": "https://leetcode.com/problems/longest-repeating-character-replacement/" }
]
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
      const solvedMedium = data.mediumProblems || [];
      const checkedMap = {};

      solvedMedium.forEach(id => {
        checkedMap[id] = true;
      });

      setChecked(checkedMap); // ✅ correct
    });
}, []);
const completedCount = Object.keys(checked).filter(
  key => key.startsWith(`string-medium-`)
).length;
    return(
        <div className="HomePage">
              <Navbar />
              <h1 id="heading1">Strings – Medium Level Problems</h1>
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
          topic="string"
        />
                {/* LEVELS BOX */}
            <LevelBox level="String" path1="/stringeasy" path2="/stringhard"
            leveltext1="easy" leveltext2="hard" level1="Easy" level2="Hard"/>
              </div>
              <Footer />
            </div>
    )
}