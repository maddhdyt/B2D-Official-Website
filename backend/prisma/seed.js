const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

async function main() {
  console.log('Starting seed...');

  // 1. Create Admin User
  const hashedPassword = await bcrypt.hash('admin123', 10);
  let admin = await prisma.user.findUnique({ where: { email: 'admin@b2dofficial.com' } });
  if (!admin) {
    admin = await prisma.user.create({
      data: {
        name: 'B2D Admin',
        email: 'admin@b2dofficial.com',
        password: hashedPassword,
        role: 'ADMIN'
      }
    });
    console.log('Admin user created');
  }

  // 2. Blog Categories
  const blogCategoryNames = ['Branding', 'Paid Advertising', 'CRM & Automation', 'Web Development', 'Business Growth', 'Social Media'];
  const blogCats = {};
  for (const name of blogCategoryNames) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    let cat = await prisma.blogCategory.findUnique({ where: { slug } });
    if (!cat) {
      cat = await prisma.blogCategory.create({ data: { name, slug } });
    }
    blogCats[name] = cat;
  }
  console.log('Blog categories seeded');

  // 3. Blogs
  const blogs = [
    {
      title: "Things to Look for When Comparing Branding Alternatives",
      slug: "digital-brand-identity-2026",
      categoryName: "Branding",
      excerpt: "Discover the essential criteria for evaluating brand identity solutions in a digital-first era.",
      image: "/src/assets/portfolio/creative.webp",
      content: `<h2>The Shift in Digital Branding</h2><p>Building a brand today is vastly different from a decade ago...</p>`,
      publishedAt: new Date("2026-06-14")
    },
    {
      title: "The Best Performing TikTok Ads Creative",
      slug: "tiktok-ads-creative-performance",
      categoryName: "Paid Advertising",
      excerpt: "Pola visual, hook, dan struktur creative yang mendorong performa kampanye short-form video.",
      image: "/src/assets/articles/tiktok-ads.webp",
      content: `<h2>Cracking the TikTok Algorithm</h2><p>TikTok has revolutionized how brands communicate with consumers...</p>`,
      publishedAt: new Date("2026-06-10")
    },
    {
      title: "5 Stand-out Features of Branding You Should Know",
      slug: "standout-features-branding",
      categoryName: "Branding",
      excerpt: "Learn the core components that separate a forgettable business from an iconic brand.",
      image: "/src/assets/portfolio/creative.webp",
      content: `<h2>Beyond the Logo</h2><p>Many businesses mistake their logo for their brand...</p>`,
      publishedAt: new Date("2026-06-05")
    },
    {
      title: "Scaling Revenue with Advanced CRM Automation",
      slug: "crm-automation-scaling",
      categoryName: "CRM & Automation",
      excerpt: "How modern businesses use automated workflows to close deals faster and retain customers longer.",
      image: "/src/assets/portfolio/crm.webp",
      content: `<h2>The Automation Advantage</h2><p>Manual follow-ups are a thing of the past...</p>`,
      publishedAt: new Date("2026-06-01")
    },
    {
      title: "Integrating Deep Analytics into Modern Web Apps",
      slug: "web-development-analytics",
      categoryName: "Web Development",
      excerpt: "Stop flying blind. Learn how to implement event-driven analytics architecture in your React applications.",
      image: "/src/assets/portfolio/analytics.webp",
      content: `<h2>Data is the New Code</h2><p>Building a fast web application is only step one...</p>`,
      publishedAt: new Date("2026-05-28")
    },
    {
      title: "Rookie Mistakes You're Making With Your Branding",
      slug: "rookie-mistakes-branding",
      categoryName: "Business Growth",
      excerpt: "Common pitfalls that drain marketing budgets and how to avoid them effectively.",
      image: "/src/assets/portfolio/creative.webp",
      content: `<h2>The Cost of Inconsistency</h2><p>One of the biggest rookie mistakes is inconsistency...</p>`,
      publishedAt: new Date("2026-05-20")
    }
  ];

  for (const b of blogs) {
    const existing = await prisma.blog.findUnique({ where: { slug: b.slug } });
    if (!existing) {
      await prisma.blog.create({
        data: {
          title: b.title,
          slug: b.slug,
          excerpt: b.excerpt,
          content: b.content,
          featuredImage: b.image,
          status: 'PUBLISHED',
          readTime: 5,
          publishedAt: b.publishedAt,
          authorId: admin.id,
          categoryId: blogCats[b.categoryName].id
        }
      });
    }
  }
  console.log('Blogs seeded');

  // 4. Portfolio Categories
  const portCats = ['Digital Advertising', 'Content & Creative', 'Web Design & Development'];
  const pcMap = {};
  for (const name of portCats) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    let cat = await prisma.portfolioCategory.findUnique({ where: { slug } });
    if (!cat) {
      cat = await prisma.portfolioCategory.create({ data: { name, slug } });
    }
    pcMap[name] = cat;
  }
  console.log('Portfolio categories seeded');

  // 5. Portfolios
  const portfolios = [
    {
      title: "Growth Intelligence",
      slug: "growth-intelligence",
      categoryName: "Digital Advertising",
      shortDesc: "Satu pusat kendali untuk membaca pertumbuhan, kanal, dan peluang konversi.",
      coverImage: "/src/assets/portfolio/analytics.webp",
      isFeatured: true
    },
    {
      title: "Nova Brand System",
      slug: "nova-brand-system",
      categoryName: "Content & Creative",
      shortDesc: "Identitas digital terpadu yang mengubah strategi menjadi pengalaman visual.",
      coverImage: "/src/assets/portfolio/creative.webp",
      isFeatured: true
    },
    {
      title: "Flow CRM",
      slug: "flow-crm",
      categoryName: "Web Design & Development",
      shortDesc: "Sistem pipeline dan nurturing yang membuat setiap peluang bergerak lebih cepat.",
      coverImage: "/src/assets/portfolio/crm.webp",
      isFeatured: true
    },
    {
      title: "Revenue Command",
      slug: "revenue-command",
      categoryName: "Digital Advertising",
      shortDesc: "Dashboard real-time untuk menyatukan performa kampanye dan revenue.",
      coverImage: "/src/assets/portfolio/analytics.webp",
      isFeatured: false
    },
    {
      title: "Digital Experience",
      slug: "digital-experience",
      categoryName: "Web Design & Development",
      shortDesc: "Ekosistem interface premium yang konsisten di seluruh customer journey.",
      coverImage: "/src/assets/portfolio/creative.webp",
      isFeatured: false
    }
  ];

  for (const p of portfolios) {
    const existing = await prisma.portfolio.findUnique({ where: { slug: p.slug } });
    if (!existing) {
      await prisma.portfolio.create({
        data: {
          title: p.title,
          slug: p.slug,
          shortDesc: p.shortDesc,
          fullDesc: `<p>${p.shortDesc} Details will be provided here.</p>`,
          coverImage: p.coverImage,
          techStack: ["React", "Node.js", "Tailwind CSS"],
          isFeatured: p.isFeatured,
          categoryId: pcMap[p.categoryName].id
        }
      });
    }
  }
  console.log('Portfolios seeded');

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
