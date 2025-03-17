const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dataRoutes = require("./routes/data.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/data", dataRoutes);

connectDB();

module.exports = app;
