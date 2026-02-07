const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");
const { protect } = require("../middleware/authMiddleware");

// ✅ Save progress
router.post("/add", protect, async (req, res) => {
  const { problemId, difficulty } = req.body;

  try {
    // 1. CHANGE: Use req.user._id to ensure Mongoose recognizes the user object
    const exists = await Progress.findOne({
      userId: req.user._id, 
      problemId
    });

    if (exists) {
      return res.status(400).json({ message: "Already solved" });
    }

    const progress = new Progress({
      userId: req.user._id, // 2. CHANGE: Use _id
      problemId,
      difficulty
    });

    await progress.save();
    res.json({ message: "Progress saved" });

  } catch (err) {
    console.error("ADD ERROR:", err); // This helps you see the real error in Render logs
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/remove", protect, async (req, res) => {
  const { problemId, difficulty } = req.body;

  try {
    // 3. CHANGE: Use _id
    const deleted = await Progress.findOneAndDelete({
      userId: req.user._id,
      problemId,
      difficulty
    });

    if (!deleted) {
      return res.status(404).json({ message: "Progress not found" });
    }

    res.json({ message: "Progress removed" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/me", protect, async (req, res) => {
  try {
    // 4. CHANGE: Use _id and verify req.user exists
    if (!req.user) {
        return res.status(401).json({ message: "User not found" });
    }

    const progress = await Progress.find({ userId: req.user._id }) || [];

    // 5. CHANGE: Add safety checks inside the filter to prevent .difficulty crashes
    const stats = {
      easy: progress.filter(p => p && p.difficulty === "easy").length,
      medium: progress.filter(p => p && p.difficulty === "medium").length,
      hard: progress.filter(p => p && p.difficulty === "hard").length,
      easyProblems: progress.filter(p => p && p.difficulty === "easy").map(p => p.problemId),
      mediumProblems: progress.filter(p => p && p.difficulty === "medium").map(p => p.problemId),
      hardProblems: progress.filter(p => p && p.difficulty === "hard").map(p => p.problemId),
    };

    res.json(stats);
  } catch (err) {
    console.error("ME ROUTE ERROR:", err); // Check Render logs for this!
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;