const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get user from DB
      req.user = await User.findById(decoded.id).select("-password");

      // CRITICAL CHECK: If the user was deleted but token is still valid
      if (!req.user) {
        return res.status(401).json({ message: "User no longer exists" });
      }

      return next(); // Use 'return' to stop execution here
    } catch (error) {
      console.error("JWT Error:", error.message);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };