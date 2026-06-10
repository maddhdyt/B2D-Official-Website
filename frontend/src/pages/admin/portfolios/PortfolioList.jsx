import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/axios";
import { Plus, Edit, Trash2, Search, Filter, ExternalLink, Briefcase } from "lucide-react";
import { cn } from "../../../lib/utils";

export default function PortfolioList() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPortfolios = async () => {
    try {
      const res = await api.get("/portfolios");
      if (res.data.success) {
        setPortfolios(res.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const handleDelete = async (slug) => {
    if (window.confirm("Are you sure you want to delete this portfolio item?")) {
      try {
        await api.delete(`/portfolios/${slug}`);
        setPortfolios(portfolios.filter(p => p.slug !== slug));
      } catch (error) {
        console.error(error);
        alert("Failed to delete portfolio");
      }
    }
  };

  const filtered = portfolios.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Portfolio Assets</h1>
          <p className="text-muted-foreground">Manage your showcase projects, case studies, and clients.</p>
        </div>
        <Link 
          to="/admin/portfolios/create" 
          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(36,167,253,0.2)] hover:shadow-[0_0_25px_rgba(36,167,253,0.4)]"
        >
          <Plus size={18} />
          <span>Add New Asset</span>
        </Link>
      </div>

      {/* Toolbar */}
      <div className="bg-card border border-border rounded-t-2xl p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            placeholder="Search assets by title or client..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="bg-background border border-border rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary">
            <option>All Categories</option>
            <option>Web Design</option>
            <option>Branding</option>
          </select>
          <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Data Grid */}
      <div className="bg-card border-x border-b border-border rounded-b-2xl overflow-hidden -mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background/50 border-b border-border text-xs text-muted-foreground uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Project</th>
                <th className="px-6 py-4 font-medium">Client</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    Loading portfolio assets...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">
                    No portfolios found matching your search.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-12 rounded bg-background border border-border flex items-center justify-center overflow-hidden">
                          {item.coverImage ? (
                            <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
                          ) : (
                            <Briefcase size={20} className="text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.title}</p>
                          <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                            {item.shortDesc || `/${item.slug}`}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-white">
                      {item.clientName || "-"}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium bg-background border border-border rounded-full text-muted-foreground">
                        {item.category?.name || "Uncategorized"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {item.isFeatured ? (
                        <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded border bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                          FEATURED
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded border bg-white/5 text-muted-foreground border-border">
                          STANDARD
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href={`/portfolio/${item.slug}`} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-white bg-background border border-border rounded transition-colors" title="View Live">
                          <ExternalLink size={16} />
                        </a>
                        <Link to={`/admin/portfolios/edit/${item.slug}`} className="p-2 text-primary hover:text-white bg-primary/10 border border-primary/20 hover:bg-primary rounded transition-colors" title="Edit">
                          <Edit size={16} />
                        </Link>
                        <button onClick={() => handleDelete(item.slug)} className="p-2 text-destructive hover:text-white bg-destructive/10 border border-destructive/20 hover:bg-destructive rounded transition-colors" title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
