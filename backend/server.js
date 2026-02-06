require("dotenv").config();
const express = require("express");
console.log("SERVER FILE IS RUNNING");

const cors = require("cors");
const connectDB = require("./config/db");


const app = express();

// middleware (VERY IMPORTANT)
app.use(cors({
  origin: "https://algomate-to9n.onrender.com",
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

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});

app.use("/api/progress", require("./routes/progressRoutes"));
app.use("/api/auth", require("./routes/auth"));
