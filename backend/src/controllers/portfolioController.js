const { z } = require("zod");
const prisma = require("../utils/prisma");
const slugify = require("slugify");

// Schema Validation
const categorySchema = z.object({ name: z.string().min(1) });
const portfolioSchema = z.object({
  title: z.string().min(1),
  shortDesc: z.string(),
  fullDesc: z.string(),
  categoryId: z.preprocess((val) => Number(val), z.number()),
  techStack: z.preprocess((val) => (typeof val === "string" ? JSON.parse(val) : val), z.array(z.string())),
  clientName: z.string().optional(),
  duration: z.string().optional(),
  projectUrl: z.string().optional(),
  isFeatured: z.preprocess((val) => val === "true" || val === true, z.boolean().optional()),
  metrics: z.preprocess((val) => (typeof val === "string" ? JSON.parse(val) : val), z.any().optional()),
  results: z.string().optional(),
});

// ========================
// PORTFOLIO CATEGORIES
// ========================
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await prisma.portfolioCategory.findMany();
    res.json({ success: true, data: categories });
  } catch (err) { next(err); }
};

exports.createCategory = async (req, res, next) => {
  try {
    const { name } = categorySchema.parse(req.body);
    const slug = slugify(name, { lower: true, strict: true });
    const category = await prisma.portfolioCategory.create({ data: { name, slug } });
    res.status(201).json({ success: true, data: category });
  } catch (err) { next(err); }
};

// ========================
// PORTFOLIOS
// ========================
exports.getPortfolios = async (req, res, next) => {
  try {
    const { category, isFeatured } = req.query;
    const where = {};
    if (category) where.category = { slug: category };
    if (isFeatured === 'true') where.isFeatured = true;

    const portfolios = await prisma.portfolio.findMany({
      where,
      include: { category: true, galleries: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ success: true, data: portfolios });
  } catch (err) { next(err); }
};

exports.getPortfolioBySlug = async (req, res, next) => {
  try {
    const portfolio = await prisma.portfolio.findUnique({
      where: { slug: req.params.slug },
      include: { category: true, galleries: true }
    });
    if (!portfolio) return res.status(404).json({ success: false, message: "Portfolio not found" });
    res.json({ success: true, data: portfolio });
  } catch (err) { next(err); }
};

exports.createPortfolio = async (req, res, next) => {
  try {
    const data = portfolioSchema.parse(req.body);
    const slug = slugify(data.title, { lower: true, strict: true }) + "-" + Date.now().toString().slice(-4);
    
    let coverImage = null;
    if (req.file) {
      coverImage = `/uploads/${req.file.filename}`;
    }

    const portfolio = await prisma.portfolio.create({
      data: {
        title: data.title,
        slug,
        shortDesc: data.shortDesc,
        fullDesc: data.fullDesc,
        coverImage,
        categoryId: data.categoryId,
        techStack: data.techStack,
        clientName: data.clientName,
        duration: data.duration,
        projectUrl: data.projectUrl,
        isFeatured: data.isFeatured || false,
        metrics: data.metrics || {},
        results: data.results,
      },
      include: { category: true }
    });
    res.status(201).json({ success: true, data: portfolio });
  } catch (err) { next(err); }
};

exports.updatePortfolio = async (req, res, next) => {
  try {
    const data = portfolioSchema.parse(req.body);
    let updateData = {
      title: data.title,
      shortDesc: data.shortDesc,
      fullDesc: data.fullDesc,
      categoryId: data.categoryId,
      techStack: data.techStack,
      clientName: data.clientName,
      duration: data.duration,
      projectUrl: data.projectUrl,
      isFeatured: data.isFeatured || false,
      metrics: data.metrics || {},
      results: data.results,
    };
    if (req.file) updateData.coverImage = `/uploads/${req.file.filename}`;

    const portfolio = await prisma.portfolio.update({
      where: { slug: req.params.slug },
      data: updateData,
      include: { category: true }
    });
    res.json({ success: true, data: portfolio });
  } catch (err) { next(err); }
};

exports.deletePortfolio = async (req, res, next) => {
  try {
    await prisma.portfolio.delete({ where: { slug: req.params.slug } });
    res.json({ success: true, message: "Portfolio deleted successfully" });
  } catch (err) { next(err); }
};

// ========================
// PORTFOLIO GALLERY
// ========================
exports.addGalleryImages = async (req, res, next) => {
  try {
    const portfolioId = Number(req.params.id);
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "No images provided" });
    }

    const galleryData = req.files.map((file, index) => ({
      portfolioId,
      imageUrl: `/uploads/${file.filename}`,
      sortOrder: index
    }));

    await prisma.portfolioGallery.createMany({ data: galleryData });
    res.json({ success: true, message: `${req.files.length} images added to gallery` });
  } catch (err) { next(err); }
};
