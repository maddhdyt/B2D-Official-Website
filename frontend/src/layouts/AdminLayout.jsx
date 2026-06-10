import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { 
  LayoutDashboard, FileText, Briefcase, Mail, Settings, 
  LogOut, Search, Bell, Grid, ChevronRight, Menu
} from "lucide-react";
import { cn } from "../lib/utils";

export default function AdminLayout() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Blog", path: "/admin/blogs", icon: FileText },
    { name: "Portfolio", path: "/admin/portfolios", icon: Briefcase },
    { name: "Leads", path: "/admin/leads", icon: Mail },
    { name: "SEO", path: "/admin/seo", icon: Search },
  ];

  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-card border-r border-border flex flex-col transition-all duration-300 ease-in-out z-40 fixed inset-y-0 left-0",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="h-20 flex items-center px-6 border-b border-border">
          <img src="https://ik.imagekit.io/yqhp1cmbp/group24.png" alt="B2D Logo" className="h-8 object-contain shrink-0" />
          <div className={cn("ml-3 overflow-hidden whitespace-nowrap transition-all duration-300", !isSidebarOpen && "w-0 opacity-0")}>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Enterprise CMS</p>
          </div>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200",
                    isActive 
                      ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(36,167,253,0.1)]" 
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  )}
                  title={!isSidebarOpen ? item.name : undefined}
                >
                  <Icon size={20} className={cn("shrink-0", isActive ? "text-primary" : "text-muted-foreground group-hover:text-white")} />
                  <span className={cn(
                    "font-medium text-sm whitespace-nowrap transition-all duration-300", 
                    !isSidebarOpen && "hidden opacity-0"
                  )}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-border mt-auto">
          <button
            onClick={handleLogout}
            className={cn(
              "flex items-center gap-3 px-3 py-2 text-destructive/80 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors w-full",
              !isSidebarOpen && "justify-center"
            )}
            title={!isSidebarOpen ? "Logout" : undefined}
          >
            <LogOut size={18} className="shrink-0" />
            <span className={cn("font-medium text-sm whitespace-nowrap", !isSidebarOpen && "hidden")}>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={cn(
        "flex flex-col min-h-screen bg-[#02040A] transition-all duration-300",
        isSidebarOpen ? "pl-64" : "pl-20"
      )}>
        
        {/* Top Navbar */}
        <header className="h-20 bg-background/60 backdrop-blur-md border-b border-border flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
            
            {/* Search Bar */}
            <div className="relative hidden md:block max-w-md w-full ml-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                placeholder="Global Search..." 
                className="w-full bg-card border border-border rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-muted-foreground hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            </button>
            <button className="text-muted-foreground hover:text-white transition-colors">
              <Grid size={20} />
            </button>
            
            <div className="h-8 w-px bg-border"></div>

            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{user?.name || "Alex Rivera"}</span>
                <span className="text-[10px] text-muted-foreground uppercase">{user?.role || "Super Admin"}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-800 flex items-center justify-center text-white font-bold border-2 border-border group-hover:border-primary transition-colors overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=transparent" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 p-8">
          <div className="max-w-[1600px] mx-auto">
            <Outlet />
          </div>
        </div>

      </main>

    </div>
  );
}
