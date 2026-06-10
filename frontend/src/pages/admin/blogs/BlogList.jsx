import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/axios";
import { Plus, Edit, Trash2, Search, Filter, MoreVertical, ExternalLink, FileText } from "lucide-react";
import { cn } from "../../../lib/utils";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBlogs = async () => {
    try {
      const res = await api.get("/blogs");
      if (res.data.success) {
        setBlogs(res.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (slug) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await api.delete(`/blogs/${slug}`);
        setBlogs(blogs.filter(b => b.slug !== slug));
      } catch (error) {
        console.error(error);
        alert("Failed to delete blog");
      }
    }
  };

  const filteredBlogs = blogs.filter(b => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Blog Management</h1>
          <p className="text-muted-foreground">Manage your articles, categories, and publications.</p>
        </div>
        <Link 
          to="/admin/blogs/create" 
          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(36,167,253,0.2)] hover:shadow-[0_0_25px_rgba(36,167,253,0.4)]"
        >
          <Plus size={18} />
          <span>Create New Post</span>
        </Link>
      </div>

      {/* Mini Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-2">Total Articles</p>
          <p className="text-2xl font-bold text-white">{blogs.length}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-2">Published</p>
          <p className="text-2xl font-bold text-primary">{blogs.filter(b => b.status === 'PUBLISHED').length}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-2">Drafts</p>
          <p className="text-2xl font-bold text-white">{blogs.filter(b => b.status === 'DRAFT').length}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-2">Total Views</p>
          <p className="text-2xl font-bold text-white">12.5k</p>
        </div>
      </div>

      {/* Table Toolbar */}
      <div className="bg-card border border-border rounded-t-2xl p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            placeholder="Search articles by title..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="bg-background border border-border rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary">
            <option>All Statuses</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
          <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-card border-x border-b border-border rounded-b-2xl overflow-hidden -mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background/50 border-b border-border text-xs text-muted-foreground uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    Loading articles...
                  </td>
                </tr>
              ) : filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">
                    No articles found matching your search.
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-background border border-border flex items-center justify-center overflow-hidden">
                          {blog.featuredImage ? (
                            <img src={blog.featuredImage} alt={blog.title} className="w-full h-full object-cover" />
                          ) : (
                            <FileText size={20} className="text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white mb-1 group-hover:text-primary transition-colors">{blog.title}</p>
                          <p className="text-xs text-muted-foreground truncate max-w-[300px]">
                            /{blog.slug}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium bg-background border border-border rounded-full text-muted-foreground">
                        {blog.category?.name || "Uncategorized"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2.5 py-1 text-[10px] font-bold tracking-wider rounded border flex w-max items-center gap-1.5",
                        blog.status === 'PUBLISHED' 
                          ? "bg-primary/10 text-primary border-primary/20" 
                          : "bg-white/5 text-muted-foreground border-border"
                      )}>
                        <span className={cn("w-1.5 h-1.5 rounded-full", blog.status === 'PUBLISHED' ? "bg-primary" : "bg-muted-foreground")}></span>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href={`/blog/${blog.slug}`} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-white bg-background border border-border rounded transition-colors" title="View Live">
                          <ExternalLink size={16} />
                        </a>
                        <Link to={`/admin/blogs/edit/${blog.slug}`} className="p-2 text-primary hover:text-white bg-primary/10 border border-primary/20 hover:bg-primary rounded transition-colors" title="Edit">
                          <Edit size={16} />
                        </Link>
                        <button onClick={() => handleDelete(blog.slug)} className="p-2 text-destructive hover:text-white bg-destructive/10 border border-destructive/20 hover:bg-destructive rounded transition-colors" title="Delete">
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
        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing {filteredBlogs.length} of {blogs.length} articles</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-background border border-border rounded hover:text-white">Prev</button>
            <button className="px-3 py-1 bg-primary text-white border border-primary rounded">1</button>
            <button className="px-3 py-1 bg-background border border-border rounded hover:text-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
