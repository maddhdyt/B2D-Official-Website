const express = require("express");
const { getAllSeoSettings, getSeoByPage, updateSeoSetting } = require("../controllers/seoController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.get("/", getAllSeoSettings);
router.get("/:page", getSeoByPage);
router.put("/:page", authenticate, authorize("ADMIN"), upload.single("ogImage"), updateSeoSetting);

module.exports = router;
