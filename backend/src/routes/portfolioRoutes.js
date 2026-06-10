const express = require("express");
const { 
  getPortfolios, getPortfolioBySlug, createPortfolio, updatePortfolio, deletePortfolio,
  getCategories, createCategory,
  addGalleryImages
} = require("../controllers/portfolioController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.route("/")
  .get(getPortfolios)
  .post(authenticate, authorize("ADMIN", "EDITOR"), upload.single("coverImage"), createPortfolio);

router.route("/categories")
  .get(getCategories)
  .post(authenticate, authorize("ADMIN", "EDITOR"), createCategory);

router.route("/:slug")
  .get(getPortfolioBySlug)
  .put(authenticate, authorize("ADMIN", "EDITOR"), upload.single("coverImage"), updatePortfolio)
  .delete(authenticate, authorize("ADMIN", "EDITOR"), deletePortfolio);

router.post("/:id/gallery", authenticate, authorize("ADMIN", "EDITOR"), upload.array("images", 10), addGalleryImages);

module.exports = router;
