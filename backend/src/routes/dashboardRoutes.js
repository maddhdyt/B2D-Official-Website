const express = require("express");
const { getStats } = require("../controllers/dashboardController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/stats", authenticate, authorize("ADMIN", "EDITOR"), getStats);

module.exports = router;
