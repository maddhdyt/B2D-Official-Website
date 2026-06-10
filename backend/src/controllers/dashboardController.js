const prisma = require("../utils/prisma");

exports.getStats = async (req, res, next) => {
  try {
    const totalBlogs = await prisma.blog.count();
    const totalPortfolios = await prisma.portfolio.count();
    const totalLeads = await prisma.lead.count();
    
    const recentLeads = await prisma.lead.findMany({ take: 5, orderBy: { createdAt: 'desc' } });
    const recentBlogs = await prisma.blog.findMany({ take: 5, orderBy: { createdAt: 'desc' }, select: { id: true, title: true, status: true, createdAt: true } });
    const recentPortfolios = await prisma.portfolio.findMany({ take: 5, orderBy: { createdAt: 'desc' }, select: { id: true, title: true, isFeatured: true, createdAt: true } });

    const portfolioStatsRaw = await prisma.portfolio.groupBy({
      by: ['categoryId'],
      _count: { id: true }
    });
    
    const categories = await prisma.portfolioCategory.findMany();
    const portfolioStats = portfolioStatsRaw.map(p => {
      const cat = categories.find(c => c.id === p.categoryId);
      return { name: cat ? cat.name : 'Other', value: p._count.id };
    });

    const recentActivity = [
      ...recentBlogs.map(b => ({ type: 'blog', title: 'New Blog Published', desc: `"${b.title}"`, module: 'Blog CMS', time: b.createdAt, status: 'SUCCESS' })),
      ...recentLeads.map(l => ({ type: 'lead', title: 'Lead Received', desc: `${l.name} from ${l.company || 'Website'}`, module: 'Lead Gen', time: l.createdAt, status: 'NEW' })),
      ...recentPortfolios.map(p => ({ type: 'portfolio', title: 'Portfolio Added', desc: `"${p.title}"`, module: 'Portfolio', time: p.createdAt, status: 'SUCCESS' }))
    ].sort((a,b) => new Date(b.time) - new Date(a.time)).slice(0, 5);

    res.json({
      success: true,
      data: {
        stats: { totalBlogs, totalPortfolios, totalLeads },
        portfolioStats,
        recentActivity
      }
    });
  } catch (err) { next(err); }
};
