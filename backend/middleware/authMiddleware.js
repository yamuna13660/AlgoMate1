const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect= async (req, res, next) => {
  let token;

  // 1️⃣ Check token exists in header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 2️⃣ Get token from header
      token = req.headers.authorization.split(" ")[1];

      // 3️⃣ Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4️⃣ Get user from DB (remove password)
      req.user = await User.findById(decoded.id).select("-password");

      // 5️⃣ Allow request
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = {protect};
