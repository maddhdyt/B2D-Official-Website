const { z } = require("zod");
const prisma = require("../utils/prisma");

const leadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  interestedService: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1)
});

exports.getLeads = async (req, res, next) => {
  try {
    const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, data: leads });
  } catch (err) { next(err); }
};

exports.createLead = async (req, res, next) => {
  try {
    const data = leadSchema.parse(req.body);
    const lead = await prisma.lead.create({ data });
    res.status(201).json({ success: true, data: lead, message: "Thank you for reaching out!" });
  } catch (err) { next(err); }
};

exports.updateLeadStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!["NEW", "CONTACTED", "CLOSED"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }
    const lead = await prisma.lead.update({
      where: { id: Number(req.params.id) },
      data: { status }
    });
    res.json({ success: true, data: lead });
  } catch (err) { next(err); }
};

exports.deleteLead = async (req, res, next) => {
  try {
    await prisma.lead.delete({ where: { id: Number(req.params.id) } });
    res.json({ success: true, message: "Lead deleted successfully" });
  } catch (err) { next(err); }
};
