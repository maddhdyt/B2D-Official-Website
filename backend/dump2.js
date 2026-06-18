const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const portfolios = await prisma.portfolio.findMany({ include: { category: true } });
  const blogs = await prisma.blog.findMany({ include: { category: true } });
  
  fs.writeFileSync('dump_utf8.json', JSON.stringify({portfolios, blogs}, null, 2), 'utf8');
}

main().catch(console.error).finally(()=>prisma.$disconnect());
