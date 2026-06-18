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
  const blogs = [];

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
      title: "PT. Arka Mega Nusantara",
      slug: "pt-arka-mega-nusantara",
      categoryName: "Web Design & Development",
      shortDesc: "Pembuatan website Company Profile elegan untuk PT. Arka Mega Nusantara dengan performa tinggi.",
      fullDesc: "<div class='space-y-6'><h2 class='text-2xl font-bold font-playfair'>The Challenge</h2><p class='text-white/70'>PT. Arka Mega Nusantara, a rising star in their industry, needed a robust digital presence that matched their offline reputation. Their previous website was outdated, slow, and failed to communicate their core values to international clients.</p><h2 class='text-2xl font-bold font-playfair pt-4'>Our Solution</h2><p class='text-white/70'>We designed a high-performance, elegant Company Profile website from the ground up. By utilizing modern frameworks like React and Tailwind CSS, we ensured lighting-fast load times. The UI/UX was tailored to guide visitors seamlessly through their services and portfolio, establishing immediate trust.</p><h2 class='text-2xl font-bold font-playfair pt-4'>The Result</h2><p class='text-white/70'>Post-launch, the website saw a 300% increase in average session duration and a significant drop in bounce rate. It now serves as a powerful 24/7 sales engine, consistently generating high-quality B2B leads.</p></div>",
      coverImage: "/src/assets/web-design-development/Testimoni Web Company Profile-1.png",
      clientName: "PT. Arka Mega Nusantara",
      duration: "6 Weeks",
      projectUrl: "https://arkameganusantara.com",
      techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      isFeatured: true
    },
    {
      title: "Give Away Campaign",
      slug: "give-away-campaign",
      categoryName: "Content & Creative",
      shortDesc: "Desain kampanye social media super kreatif untuk giveaway produk TWS earbuds.",
      fullDesc: "<div class='space-y-6'><h2 class='text-2xl font-bold font-playfair'>The Campaign</h2><p class='text-white/70'>To drive rapid brand awareness and user engagement for a new line of TWS (True Wireless Stereo) earbuds, we orchestrated a massive social media giveaway campaign.</p><h2 class='text-2xl font-bold font-playfair pt-4'>Creative Strategy</h2><p class='text-white/70'>Our creative team developed eye-catching, high-contrast visual assets designed to stop scrollers in their tracks. We combined striking typography with high-quality product renders, ensuring the campaign felt premium yet accessible. The copy was crafted to maximize sharing and tagging.</p><h2 class='text-2xl font-bold font-playfair pt-4'>The Impact</h2><p class='text-white/70'>The campaign went viral within its target demographic, generating over 50,000 unique interactions in just 48 hours. Follower count increased by 45%, and the resulting buzz led to a record-breaking launch day for the product.</p></div>",
      coverImage: "/src/assets/creative-service/Creative Service-1.png",
      clientName: "SoundWave Audio",
      duration: "2 Weeks",
      projectUrl: "https://instagram.com/soundwave.audio",
      techStack: ["Adobe Illustrator", "Photoshop", "Meta Ads Manager"],
      isFeatured: true
    },
    {
      title: "Meta Ads Performance",
      slug: "meta-ads-performance",
      categoryName: "Digital Advertising",
      shortDesc: "Optimasi kampanye Meta Ads yang menghasilkan ROAS tinggi dan konversi terukur.",
      fullDesc: "<div class='space-y-6'><h2 class='text-2xl font-bold font-playfair'>The Objective</h2><p class='text-white/70'>Our client needed to drastically scale their e-commerce revenue without inflating their Customer Acquisition Cost (CAC). They had hit a ceiling with their previous Meta Ads structure and needed a data-driven breakthrough.</p><h2 class='text-2xl font-bold font-playfair pt-4'>Our Approach</h2><p class='text-white/70'>We completely restructured their ad accounts, implementing a rigorous A/B testing matrix for both creatives and copy. By utilizing advanced pixel tracking and lookalike audiences based on high-LTV customers, we honed in on the most profitable segments.</p><h2 class='text-2xl font-bold font-playfair pt-4'>The ROI</h2><p class='text-white/70'>Within three months, we achieved a sustained Return on Ad Spend (ROAS) of 4.5x, scaling their monthly ad budget by 200% while simultaneously reducing their CAC by 28%.</p></div>",
      coverImage: "/src/assets/digital-advertising/Testimoni Meta Ads-1.png",
      clientName: "Glow & Co Cosmetics",
      duration: "3 Months",
      projectUrl: "https://glowandco.id",
      techStack: ["Meta Pixel", "Google Analytics 4", "Looker Studio"],
      isFeatured: true
    },
    {
      title: "Merayakan Takdir (Hera & Taufik)",
      slug: "merayakan-takdir",
      categoryName: "Web Design & Development",
      shortDesc: "Undangan pernikahan digital interaktif dan estetis untuk Hera & Taufik.",
      fullDesc: "<div class='space-y-6'><h2 class='text-2xl font-bold font-playfair'>A Digital Celebration</h2><p class='text-white/70'>Hera and Taufik wanted their wedding invitation to be more than just a piece of paper; they wanted a memorable digital experience that reflected their personalities and love story.</p><h2 class='text-2xl font-bold font-playfair pt-4'>Design & Development</h2><p class='text-white/70'>We crafted a bespoke, interactive digital invitation website. Featuring parallax scrolling, a curated color palette, and seamless RSVPs integration, the site was optimized for mobile devices to ensure all guests could easily access event details, location maps, and leave well-wishes.</p><h2 class='text-2xl font-bold font-playfair pt-4'>Guest Experience</h2><p class='text-white/70'>The couple received overwhelming praise from their guests for the aesthetic and smooth experience. The integrated RSVP system streamlined their guest management, making their special day significantly less stressful.</p></div>",
      coverImage: "/src/assets/web-design-development/Testimoni Web Merayakan Takdir.png",
      clientName: "Hera & Taufik",
      duration: "3 Weeks",
      projectUrl: "https://merayakantakdir.com",
      techStack: ["React", "Tailwind CSS", "GSAP"],
      isFeatured: false
    },
    {
      title: "TWS Product Ad",
      slug: "tws-product-ad",
      categoryName: "Digital Advertising",
      shortDesc: "Desain iklan produk TWS menonjolkan fitur Bluetooth 5.2 dan Waterproof.",
      fullDesc: "<div class='space-y-6'><h2 class='text-2xl font-bold font-playfair'>Product Spotlight</h2><p class='text-white/70'>Launching a new electronic product in a saturated market requires visuals that instantly communicate value and superiority. This TWS earbud needed to highlight its cutting-edge Bluetooth 5.2 tech and waterproof capabilities.</p><h2 class='text-2xl font-bold font-playfair pt-4'>Visual Execution</h2><p class='text-white/70'>We produced a series of high-impact digital ads. By utilizing dynamic lighting and macro shots of the product, paired with bold, easily digestible feature callouts, we created assets that are both visually stunning and highly informative.</p><h2 class='text-2xl font-bold font-playfair pt-4'>Performance</h2><p class='text-white/70'>These assets became the top-performing creatives in the client's advertising funnel, boasting a Click-Through Rate (CTR) 3x higher than their previous industry benchmarks.</p></div>",
      coverImage: "/src/assets/creative-service/Creative Service-2.png",
      clientName: "SonicTWS",
      duration: "1 Week",
      projectUrl: "https://sonic-tws.com/shop",
      techStack: ["Figma", "After Effects", "Blender 3D"],
      isFeatured: false
    }
  ];

  // Bersihkan data portfolio lama agar tidak double
  await prisma.portfolio.deleteMany();

  for (const p of portfolios) {
    const existing = await prisma.portfolio.findUnique({ where: { slug: p.slug } });
    if (!existing) {
      await prisma.portfolio.create({
        data: {
          title: p.title,
          slug: p.slug,
          shortDesc: p.shortDesc,
          fullDesc: p.fullDesc,
          coverImage: p.coverImage,
          clientName: p.clientName,
          duration: p.duration,
          projectUrl: p.projectUrl,
          techStack: p.techStack,
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
