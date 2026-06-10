const { z } = require("zod");
const prisma = require("../utils/prisma");
const slugify = require("slugify");

// Schema Validation
const categorySchema = z.object({ name: z.string().min(1) });
const tagSchema = z.object({ name: z.string().min(1) });
const blogSchema = z.object({
  title: z.string().min(1),
  excerpt: z.string().optional(),
  content: z.string(),
  categoryId: z.preprocess((val) => Number(val), z.number()),
  tags: z.preprocess((val) => (typeof val === "string" ? JSON.parse(val) : val), z.array(z.string()).optional()),
  seoTitle: z.string().optional(),
  seoDesc: z.string().optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
  readTime: z.preprocess((val) => Number(val), z.number().optional()),
});

// ========================
// BLOG CATEGORIES
// ========================
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await prisma.blogCategory.findMany();
    res.json({ success: true, data: categories });
  } catch (err) { next(err); }
};

exports.createCategory = async (req, res, next) => {
  try {
    const { name } = categorySchema.parse(req.body);
    const slug = slugify(name, { lower: true, strict: true });
    const category = await prisma.blogCategory.create({ data: { name, slug } });
    res.status(201).json({ success: true, data: category });
  } catch (err) { next(err); }
};

// ========================
// BLOG TAGS
// ========================
exports.getTags = async (req, res, next) => {
  try {
    const tags = await prisma.blogTag.findMany();
    res.json({ success: true, data: tags });
  } catch (err) { next(err); }
};

exports.createTag = async (req, res, next) => {
  try {
    const { name } = tagSchema.parse(req.body);
    const slug = slugify(name, { lower: true, strict: true });
    const tag = await prisma.blogTag.create({ data: { name, slug } });
    res.status(201).json({ success: true, data: tag });
  } catch (err) { next(err); }
};

// ========================
// BLOGS
// ========================
exports.getBlogs = async (req, res, next) => {
  try {
    const { status, category } = req.query;
    const where = {};
    if (status) where.status = status;
    if (category) where.category = { slug: category };

    const blogs = await prisma.blog.findMany({
      where,
      include: {
        category: true,
        tags: true,
        author: { select: { id: true, name: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ success: true, data: blogs });
  } catch (err) { next(err); }
};

exports.getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug: req.params.slug },
      include: {
        category: true,
        tags: true,
        author: { select: { id: true, name: true } }
      }
    });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, data: blog });
  } catch (err) { next(err); }
};

exports.createBlog = async (req, res, next) => {
  try {
    const data = blogSchema.parse(req.body);
    const slug = slugify(data.title, { lower: true, strict: true }) + "-" + Date.now().toString().slice(-4);
    
    let featuredImage = null;
    if (req.file) {
      featuredImage = `/uploads/${req.file.filename}`;
    }

    const blog = await prisma.blog.create({
      data: {
        title: data.title,
        slug,
        excerpt: data.excerpt || data.content.substring(0, 150) + "...",
        content: data.content,
        featuredImage,
        seoTitle: data.seoTitle,
        seoDesc: data.seoDesc,
        status: data.status || 'DRAFT',
        readTime: data.readTime || 0,
        publishedAt: data.status === 'PUBLISHED' ? new Date() : null,
        authorId: req.user.id,
        categoryId: data.categoryId,
        tags: {
          connectOrCreate: data.tags ? data.tags.map(name => {
            const tagSlug = slugify(name, { lower: true, strict: true });
            return {
              where: { slug: tagSlug },
              create: { name, slug: tagSlug }
            };
          }) : []
        }
      },
      include: { category: true, tags: true }
    });
    res.status(201).json({ success: true, data: blog });
  } catch (err) { next(err); }
};

exports.updateBlog = async (req, res, next) => {
  try {
    const data = blogSchema.parse(req.body);
    let updateData = {
      title: data.title,
      excerpt: data.excerpt || data.content.substring(0, 150) + "...",
      content: data.content,
      seoTitle: data.seoTitle,
      seoDesc: data.seoDesc,
      status: data.status || 'DRAFT',
      readTime: data.readTime || 0,
      categoryId: data.categoryId,
    };
    if (data.status === 'PUBLISHED') updateData.publishedAt = new Date();
    if (req.file) updateData.featuredImage = `/uploads/${req.file.filename}`;
    if (data.tags) {
      updateData.tags = {
        set: [],
        connectOrCreate: data.tags.map(name => {
          const tagSlug = slugify(name, { lower: true, strict: true });
          return { where: { slug: tagSlug }, create: { name, slug: tagSlug } };
        })
      };
    }

    const blog = await prisma.blog.update({
      where: { slug: req.params.slug },
      data: updateData,
      include: { category: true, tags: true }
    });
    res.json({ success: true, data: blog });
  } catch (err) { next(err); }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    await prisma.blog.delete({ where: { slug: req.params.slug } });
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) { next(err); }
};
