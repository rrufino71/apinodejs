const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const roleRoutes = require("./routes/roleRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use(errorMiddleware);
app.use("/api/auth", authRoutes);
app.use("/api/roles", roleRoutes);


app.get("/api/private", authMiddleware, (req, res) => {
  res.json({ message: "Ruta protegida", user: req.user });
});

module.exports = app;



