import { useState, useEffect } from "react";
import api from "../../../api/axios";
import { Edit2, Check, X, Search, Globe, Tag, Share2, Type, LayoutTemplate } from "lucide-react";
import { cn } from "../../../lib/utils";

export default function SeoList() {
  const [seoList, setSeoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPage, setEditingPage] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "", keywords: "" });

  const fetchSeo = async () => {
    try {
      const res = await api.get("/seo");
      if (res.data.success) {
        setSeoList(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch seo", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeo();
  }, []);

  const handleEdit = (seo) => {
    setEditingPage(seo.pageName);
    setEditForm({ title: seo.title, description: seo.description, keywords: seo.keywords });
  };

  const handleSave = async (pageName) => {
    try {
      await api.put(`/seo/${pageName}`, editForm);
      setEditingPage(null);
      fetchSeo();
    } catch (error) {
      alert("Failed to update SEO");
    }
  };

  const isEditingPage = editingPage !== null;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Search Engine Optimization</h1>
          <p className="text-muted-foreground">Manage global meta tags, keywords, and search previews.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Pages List */}
        <div className="lg:col-span-2 space-y-4">
          {seoList.map((seo) => {
            const isEditing = editingPage === seo.pageName;
            
            return (
              <div key={seo.id} className={cn(
                "bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300",
                isEditing ? "ring-1 ring-primary shadow-[0_0_20px_rgba(36,167,253,0.15)]" : "hover:border-primary/50"
              )}>
                <div className="p-5 border-b border-border/50 flex items-center justify-between bg-background/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <LayoutTemplate size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white capitalize">{seo.pageName} Page</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Globe size={12} /> https://b2dofficial.com{seo.pageName === 'home' ? '/' : `/${seo.pageName}`}
                      </p>
                    </div>
                  </div>
                  
                  {!isEditing && (
                    <button 
                      onClick={() => handleEdit(seo)} 
                      className="px-4 py-2 bg-background border border-border text-white text-sm font-medium rounded-lg hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Edit2 size={16} /> Edit Meta
                    </button>
                  )}
                </div>

                <div className="p-6">
                  {isEditing ? (
                    <div className="space-y-5 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div>
                        <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Type size={14} className="text-primary" /> Meta Title <span className={cn("ml-auto text-[10px]", editForm.title.length > 60 ? "text-destructive" : "text-primary")}>{editForm.title.length}/60</span>
                        </label>
                        <input 
                          type="text" 
                          value={editForm.title} 
                          onChange={e => setEditForm({...editForm, title: e.target.value})} 
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="Best Tech Solutions | B2D Official"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Search size={14} className="text-primary" /> Meta Description <span className={cn("ml-auto text-[10px]", editForm.description.length > 160 ? "text-destructive" : "text-primary")}>{editForm.description.length}/160</span>
                        </label>
                        <textarea 
                          value={editForm.description} 
                          onChange={e => setEditForm({...editForm, description: e.target.value})} 
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                          rows="3" 
                          placeholder="We provide cutting edge software..."
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Tag size={14} className="text-primary" /> Keywords
                        </label>
                        <input 
                          type="text" 
                          value={editForm.keywords} 
                          onChange={e => setEditForm({...editForm, keywords: e.target.value})} 
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                          placeholder="software, tech, b2d"
                        />
                      </div>

                      <div className="flex items-center justify-end gap-3 pt-2">
                        <button 
                          onClick={() => setEditingPage(null)} 
                          className="px-5 py-2 text-muted-foreground hover:text-white font-medium text-sm transition-colors"
                        >
                          Cancel
                        </button>
                        <button 
                          onClick={() => handleSave(seo.pageName)} 
                          className="px-6 py-2 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(36,167,253,0.3)] flex items-center gap-2"
                        >
                          <Check size={16} /> Save Changes
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Meta Title</p>
                        <p className="text-sm text-white font-medium">{seo.title}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Keywords</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {seo.keywords.split(',').map((k, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-white/5 border border-border rounded text-xs text-muted-foreground">{k.trim()}</span>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Meta Description</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{seo.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Live Previews */}
        <div className="space-y-6">
          <div className="sticky top-28 space-y-6">
            
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Globe size={20} className="text-primary" /> Live Previews
            </h2>

            {/* Google Search Preview */}
            <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-4" />
                <span className="text-xs text-gray-500 font-medium">Search Preview</span>
              </div>
              
              {isEditingPage ? (
                <div>
                  <div className="flex items-center gap-2 text-sm text-[#202124] mb-1">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <Globe size={12} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-xs text-[#202124] leading-tight">b2dofficial.com</p>
                      <p className="text-[10px] text-[#4d5156]">https://b2dofficial.com › {editingPage === 'home' ? '' : editingPage}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-normal text-[#1a0dab] hover:underline cursor-pointer truncate">{editForm.title || "Meta Title Preview"}</h3>
                  <p className="text-sm text-[#4d5156] mt-1 line-clamp-2">{editForm.description || "Your meta description will appear here in Google Search results..."}</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-6 text-center text-gray-400">
                  <Search size={24} className="mb-2 opacity-50" />
                  <p className="text-sm">Click 'Edit' on a page to see live preview</p>
                </div>
              )}
            </div>

            {/* Social Media Preview (Twitter/X style) */}
            {isEditingPage && (
              <div className="bg-black border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                  <Share2 size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-400 font-medium tracking-wide">SOCIAL PREVIEW</span>
                </div>
                <div className="w-full h-32 bg-gray-900 border-b border-gray-800 flex items-center justify-center">
                  <span className="text-gray-700 font-bold tracking-widest uppercase">OG:IMAGE</span>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-xs text-gray-500 mb-1">b2dofficial.com</p>
                  <h3 className="text-sm font-bold text-white mb-1 truncate">{editForm.title || "Social Media Title Preview"}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2">{editForm.description || "Description preview for platforms like Twitter, LinkedIn, and Facebook."}</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper block inside component to know if editing
// (Moved outside the map to use globally in the sidebar)
function useIsEditingPage(editingPage) {
  return editingPage !== null;
}
