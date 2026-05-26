require("dotenv").config();
const express = require("express");
console.log("SERVER FILE IS RUNNING");

const cors = require("cors");
const connectDB = require("./config/db");


const app = express();

// middleware (VERY IMPORTANT)
// After
app.use(cors({
  origin: [
    "https://algomate-to9n.onrender.com",
    "https://algomate1.onrender.com",
    "https://algomate-frontend-bpql.onrender.com",  // ← add this
    "http://localhost:5173",
    "http://localhost:5174",
  ],
  credentials: true
}));

app.use(express.json()); // <-- without this POST body won't work

const userRoutes = require("./routes/userRoutes");

// DB
connectDB();

// routes
app.use("/api/users", userRoutes);



// test
app.get("/", (req, res) => {
  res.send("Backend running");
});
app.use("/api/hint", require("./routes/hint"));
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});

app.use("/api/progress", require("./routes/progressRoutes"));
app.use("/api/auth", require("./routes/auth"));
