const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.get("/verify", protect, (req, res) => {
  res.json({ user: req.user });
});
if (typeof protect !== "function") {
  throw new Error("protect middleware is not a function");
}

module.exports = router;
