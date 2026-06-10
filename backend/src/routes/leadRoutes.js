const express = require("express");
const { getLeads, createLead, updateLeadStatus, deleteLead } = require("../controllers/leadController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/")
  .get(authenticate, authorize("ADMIN", "EDITOR"), getLeads)
  .post(createLead); // Public endpoint for Contact Us form

router.route("/:id")
  .put(authenticate, authorize("ADMIN", "EDITOR"), updateLeadStatus)
  .delete(authenticate, authorize("ADMIN", "EDITOR"), deleteLead);

module.exports = router;
