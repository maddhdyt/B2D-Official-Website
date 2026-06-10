const { z } = require("zod");
const prisma = require("../utils/prisma");

const seoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  keywords: z.string().min(1),
});

exports.getAllSeoSettings = async (req, res, next) => {
  try {
    const settings = await prisma.seoSetting.findMany();
    res.json({ success: true, data: settings });
  } catch (err) { next(err); }
};

exports.getSeoByPage = async (req, res, next) => {
  try {
    const setting = await prisma.seoSetting.findUnique({
      where: { pageName: req.params.page }
    });
    if (!setting) return res.status(404).json({ success: false, message: "SEO setting not found" });
    res.json({ success: true, data: setting });
  } catch (err) { next(err); }
};

exports.updateSeoSetting = async (req, res, next) => {
  try {
    const data = seoSchema.parse(req.body);
    let ogImage = undefined;
    if (req.file) {
      ogImage = `/uploads/${req.file.filename}`;
    }

    const setting = await prisma.seoSetting.update({
      where: { pageName: req.params.page },
      data: { ...data, ...(ogImage && { ogImage }) }
    });
    res.json({ success: true, data: setting });
  } catch (err) { next(err); }
};
