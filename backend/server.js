require("dotenv").config();
const express = require("express");
console.log("SERVER FILE IS RUNNING");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

app.use(cors({
  origin: [
    "https://algomate-to9n.onrender.com",
    "https://algomate1.onrender.com",
    "https://algomate-frontend-bpql.onrender.com",
    "http://localhost:5173",
    "http://localhost:5174",
  ],
  credentials: true
}));

app.use(express.json());

connectDB();

// ALL routes before app.listen
app.get("/", (req, res) => res.send("Backend running"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/hint", require("./routes/hint"));
app.use("/api/progress", require("./routes/progressRoutes"));
app.use("/api/auth", require("./routes/auth"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});