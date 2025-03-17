const express = require("express");
const { getData, createData, deleteData } = require("../controllers/data.controller");
const verifyToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", verifyToken, getData);
router.post("/", verifyToken, createData);
router.delete("/:id", verifyToken, deleteData);

module.exports = router;
