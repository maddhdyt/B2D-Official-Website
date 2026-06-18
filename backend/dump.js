const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const portfolios = await prisma.portfolio.findMany({
    include: { category: true }
  });
  console.log("=== PORTFOLIOS ===");
  console.log(JSON.stringify(portfolios, null, 2));

  const blogs = await prisma.blog.findMany({
    include: { category: true }
  });
  console.log("=== BLOGS ===");
  console.log(JSON.stringify(blogs, null, 2));
}

main().catch(console.error).finally(()=>prisma.$disconnect());
