import { useState, useEffect } from "react";

export default function LevelBox2({ problems, checked, setChecked, difficulty,topic }) {
  const leetIcon = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
      alt="leetcode"
      className="icon"
    />
  );

  const gfgIcon = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
      alt="gfg"
      className="icon"
    />
  );

  function getIcon(link) {
    if (link.includes("leetcode.com")) return leetIcon;
    if (link.includes("geeksforgeeks.org")) return gfgIcon;
    return "Solve";
  }

  const [page, setPage] = useState(1);
  const problemsPerPage = 10;
  const totalPages = Math.ceil(problems.length / problemsPerPage);
  const startIndex = (page - 1) * problemsPerPage;
  const currentProblems = problems.slice(startIndex, startIndex + problemsPerPage);
const handleCheck = async (problemId) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const isChecked = !!checked[problemId];

  // instant UI update
  setChecked(prev => {
    const copy = { ...prev };
    if (isChecked) delete copy[problemId];
    else copy[problemId] = true;
    return copy;
  });

  try {
    if (!isChecked) {
      await fetch(`https://algomate-backend-gg3u.onrender.com/api/progress/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          problemId,
          difficulty   // ✅ dynamic
        })
      });
    } else {
      await fetch(`https://algomate-backend-gg3u.onrender.com/api/progress/remove`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          problemId,
          difficulty   // ✅ REQUIRED for delete
        })
      });
    }
  } catch (err) {
    console.error("Progress update failed", err);
  }
};





  return (
    <div className="div2">
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Problem</th>
            <th>Practice</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {currentProblems.map((p, index) => {
  const globalIndex = startIndex + index + 1;
  const problemId = `${topic}-${difficulty}-${globalIndex}`;

  return (
    <tr key={problemId}>
      <td>
        <input
          type="checkbox"
          checked={!!checked[problemId]}
          onChange={() => handleCheck(problemId)}
        />
      </td>

      <td>{p.title}</td>

      <td className="solve-col">
        <a href={p.link} target="_blank" rel="noopener noreferrer">
          {getIcon(p.link)}
        </a>
      </td>

      <td>
        <span className={`difficulty-badge ${difficulty}-badge`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </td>
    </tr>
  );
})}

        </tbody>
      </table>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>⬅ Prev</button>
        <span>Page {page} / {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next ➡</button>
      </div>
    </div>
  );
}
