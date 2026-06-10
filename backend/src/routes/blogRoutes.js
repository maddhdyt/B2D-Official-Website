const express = require("express");
const {
  getBlogs, getBlogBySlug, createBlog, updateBlog, deleteBlog,
  getCategories, createCategory, getTags, createTag
} = require("../controllers/blogController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.route("/")
  .get(getBlogs)
  .post(authenticate, authorize("ADMIN", "EDITOR"), upload.single("featuredImage"), createBlog);

router.route("/categories")
  .get(getCategories)
  .post(authenticate, authorize("ADMIN", "EDITOR"), createCategory);

router.route("/tags")
  .get(getTags)
  .post(authenticate, authorize("ADMIN", "EDITOR"), createTag);

router.route("/:slug")
  .get(getBlogBySlug)
  .put(authenticate, authorize("ADMIN", "EDITOR"), upload.single("featuredImage"), updateBlog)
  .delete(authenticate, authorize("ADMIN"), deleteBlog);

module.exports = router;
