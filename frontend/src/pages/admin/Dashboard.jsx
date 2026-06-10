import { useEffect, useState } from "react";
import api from "../../api/axios";
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { FileText, Briefcase, Mail, Activity, ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import { cn } from "../../lib/utils";

// Mock Data for Charts
const trafficData = [
  { name: '01 Oct', uv: 400, pv: 240 },
  { name: '08 Oct', uv: 300, pv: 139 },
  { name: '15 Oct', uv: 200, pv: 980 },
  { name: '22 Oct', uv: 278, pv: 390 },
  { name: '29 Oct', uv: 189, pv: 480 },
];

const COLORS = ['#24A7FD', '#0047AB', '#1A2744', '#0F172A', '#334155'];

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/dashboard/stats");
        if (res.data.success) {
          setStats(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch stats", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!stats) return <div className="text-destructive">Failed to load stats.</div>;

  const kpis = [
    { title: "Total Blogs", value: stats.stats.totalBlogs, icon: FileText, change: "+12%", bg: "from-blue-900/40 to-transparent" },
    { title: "Total Portfolios", value: stats.stats.totalPortfolios, icon: Briefcase, change: "Stable", bg: "from-indigo-900/40 to-transparent" },
    { title: "Total Leads", value: stats.stats.totalLeads, icon: Mail, change: "+18.5%", bg: "from-sky-900/40 to-transparent" },
    { title: "Conversion Rate", value: "4.2%", icon: Activity, change: "+0.8%", bg: "from-emerald-900/40 to-transparent" },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Good Morning, Admin</h1>
          <p className="text-muted-foreground">Here's what's happening in your engine today.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm text-white hover:bg-white/5 transition-colors">
          <Clock size={16} className="text-muted-foreground" />
          <span>Oct 24, 2023</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(36,167,253,0.15)]">
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", kpi.bg)}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-background rounded-xl border border-border">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm font-medium mb-1">{kpi.title}</p>
                <div className="flex items-end gap-3 mt-auto">
                  <h3 className="text-3xl font-bold text-white tracking-tight">{kpi.value}</h3>
                </div>
                <p className="text-xs text-primary mt-2">{kpi.change} from last month</p>
              </div>
              
              {/* Background abstract icon */}
              <Icon size={120} className="absolute -bottom-6 -right-6 text-white/[0.02] transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Leads Growth & Traffic</h3>
              <p className="text-sm text-muted-foreground">Last 30 days visualization</p>
            </div>
            <div className="px-3 py-1 text-xs rounded-full border border-border bg-background text-muted-foreground">
              Last 30 Days
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#24A7FD" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#24A7FD" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A1329', borderColor: '#1E293B', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#24A7FD' }}
                />
                <Area type="monotone" dataKey="uv" stroke="#24A7FD" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="bg-card border border-border rounded-2xl p-6 flex flex-col">
          <div>
            <h3 className="text-lg font-bold text-white">Portfolio Categories</h3>
            <p className="text-sm text-muted-foreground">Asset distribution</p>
          </div>
          
          <div className="flex-1 flex items-center justify-center relative min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats.portfolioStats || []}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {stats.portfolioStats?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0A1329', borderColor: '#1E293B', borderRadius: '8px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-white">{stats.stats.totalPortfolios}</span>
              <span className="text-[10px] tracking-wider text-muted-foreground">TOTAL</span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {stats.portfolioStats?.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-white font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Recent Activity Board */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">Recent Activity</h3>
          <button className="text-sm text-primary hover:text-primary/80 transition-colors">View all logs</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/50 text-xs text-muted-foreground uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Action</th>
                <th className="px-6 py-4 font-medium">Module</th>
                <th className="px-6 py-4 font-medium">Time</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              
              {stats.recentActivity?.map((activity, idx) => {
                const isSuccess = activity.status === 'SUCCESS';
                const IconComponent = activity.type === 'blog' ? FileText : activity.type === 'portfolio' ? Briefcase : Mail;
                
                // Format time difference
                const timeDiff = Math.floor((new Date() - new Date(activity.time)) / 60000); // minutes
                let timeStr = `${timeDiff} mins ago`;
                if (timeDiff > 60) timeStr = `${Math.floor(timeDiff / 60)} hours ago`;
                if (timeDiff > 1440) timeStr = `${Math.floor(timeDiff / 1440)} days ago`;

                return (
                  <tr key={idx} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                        <IconComponent size={16} className={isSuccess ? "text-primary" : "text-muted-foreground"} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.desc}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{activity.module}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{timeStr}</td>
                    <td className="px-6 py-4">
                      {isSuccess ? (
                        <span className="px-2 py-1 text-[10px] font-bold tracking-wider rounded bg-primary/20 text-primary border border-primary/20">SUCCESS</span>
                      ) : (
                        <span className="px-2 py-1 text-[10px] font-bold tracking-wider rounded bg-white/10 text-white border border-border">NEW</span>
                      )}
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
