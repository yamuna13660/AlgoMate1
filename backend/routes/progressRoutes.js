const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");
const {protect}  = require("../middleware/authMiddleware");

// ✅ Save progress
router.post("/add", protect, async (req, res) => {
  const { problemId, difficulty } = req.body;

  try {
    // avoid duplicate
    const exists = await Progress.findOne({
      userId: req.user.id,
      problemId
    });

    if (exists) {
      return res.status(400).json({ message: "Already solved" });
    }

    const progress = new Progress({
      userId: req.user.id,
      problemId,
      difficulty
    });

    await progress.save();
    res.json({ message: "Progress saved" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
router.delete("/remove", protect, async (req, res) => {
  const { problemId, difficulty } = req.body;

  try {
    const deleted = await Progress.findOneAndDelete({
      userId: req.user.id,
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
    const progress = await Progress.find({ userId: req.user.id });

    const stats = {
  easy: progress.filter(p => p.difficulty === "easy").length,
  medium: progress.filter(p => p.difficulty === "medium").length,
  hard: progress.filter(p => p.difficulty === "hard").length,
  easyProblems: progress.filter(p => p.difficulty === "easy").map(p => p.problemId),
  mediumProblems: progress.filter(p => p.difficulty === "medium").map(p => p.problemId),
  hardProblems: progress.filter(p => p.difficulty === "hard").map(p => p.problemId),
};
res.json(stats);
 // ✅ only numbers
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;
