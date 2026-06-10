import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../../../api/axios";
import RichTextEditor from "../../../components/admin/RichTextEditor";
import { Save, ArrowLeft, Image as ImageIcon, Briefcase, Settings, Layers, Code, Award, Link as LinkIcon, Calendar } from "lucide-react";
import { cn } from "../../../lib/utils";

export default function PortfolioForm() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const isEditMode = Boolean(slug);
  
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    categoryId: "",
    techStack: "",
    clientName: "",
    duration: "",
    projectUrl: "",
    isFeatured: false
  });
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    fetchCategories();
    if (isEditMode) {
      api.get(`/portfolios/${slug}`).then(res => {
        const item = res.data.data;
        setFormData({
          title: item.title,
          shortDesc: item.shortDesc,
          fullDesc: item.fullDesc,
          categoryId: item.categoryId || "",
          techStack: item.techStack ? item.techStack.join(", ") : "",
          clientName: item.clientName || "",
          duration: item.duration || "",
          projectUrl: item.projectUrl || "",
          isFeatured: item.isFeatured
        });
        if (item.coverImage) {
          setCoverPreview(item.coverImage.startsWith("http") ? item.coverImage : `http://localhost:5000${item.coverImage}`);
        }
      }).catch(console.error);
    }
  }, [slug]);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/portfolios/categories");
      setCategories(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      const res = await api.post("/portfolios/categories", { name: newCategory });
      setCategories([...categories, res.data.data]);
      setFormData({ ...formData, categoryId: res.data.data.id });
      setNewCategory("");
    } catch (error) {
      console.error("Failed to add category");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'techStack') {
          const techArr = formData.techStack.split(",").map(t => t.trim()).filter(Boolean);
          data.append("techStack", JSON.stringify(techArr));
        } else {
          data.append(key, formData[key]);
        }
      });
      if (coverImage) {
        data.append("coverImage", coverImage);
      }

      if (isEditMode) {
        await api.put(`/portfolios/${slug}`, data, { headers: { "Content-Type": "multipart/form-data" } });
      } else {
        await api.post("/portfolios", data, { headers: { "Content-Type": "multipart/form-data" } });
      }
      navigate("/admin/portfolios");
    } catch (error) {
      console.error(error);
      alert(isEditMode ? "Failed to update portfolio" : "Failed to create portfolio");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[1600px] mx-auto space-y-8">
      
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link to="/admin/portfolios" className="p-2 bg-card border border-border rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">{isEditMode ? "Edit Project" : "Create New Project"}</h1>
            <p className="text-sm text-muted-foreground">{isEditMode ? "Update portfolio asset" : "Add a new masterpiece to your showcase"}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            type="submit" 
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(36,167,253,0.2)] disabled:opacity-50"
          >
            <Save size={18} />
            {loading ? "Saving..." : (isEditMode ? "Update Asset" : "Publish Asset")}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-6 border-b border-border pb-4 flex items-center gap-2">
              <Briefcase size={20} className="text-primary" /> Basic Information
            </h2>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Project Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. NextGen FinTech Dashboard"
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Short Description</label>
                <textarea 
                  required
                  rows="2"
                  placeholder="A brief summary of the project..."
                  value={formData.shortDesc}
                  onChange={e => setFormData({...formData, shortDesc: e.target.value})}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <label className="block text-sm font-medium text-white mb-2">Comprehensive Details</label>
                <RichTextEditor 
                  content={formData.fullDesc} 
                  onChange={(html) => setFormData({...formData, fullDesc: html})}
                />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-6 border-b border-border pb-4 flex items-center gap-2">
              <Award size={20} className="text-primary" /> Project Metadata
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2 flex items-center gap-2">
                  <Briefcase size={16} className="text-muted-foreground" /> Client Name
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Acme Corp"
                  value={formData.clientName}
                  onChange={e => setFormData({...formData, clientName: e.target.value})}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2 flex items-center gap-2">
                  <Calendar size={16} className="text-muted-foreground" /> Duration
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 3 Months"
                  value={formData.duration}
                  onChange={e => setFormData({...formData, duration: e.target.value})}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2 flex items-center gap-2">
                  <LinkIcon size={16} className="text-muted-foreground" /> Live URL
                </label>
                <input 
                  type="url" 
                  placeholder="https://"
                  value={formData.projectUrl}
                  onChange={e => setFormData({...formData, projectUrl: e.target.value})}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2 flex items-center gap-2">
                  <Code size={16} className="text-muted-foreground" /> Tech Stack
                </label>
                <input 
                  type="text" 
                  placeholder="React, Node.js, Tailwind (comma separated)"
                  value={formData.techStack}
                  onChange={e => setFormData({...formData, techStack: e.target.value})}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-6">
          
          {/* Cover Image Upload */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <ImageIcon size={16} className="text-primary" /> Asset Cover
            </h3>
            <div className="relative border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center min-h-[250px] text-center bg-background/50 group hover:border-primary/50 transition-colors cursor-pointer overflow-hidden">
              <input type="file" onChange={handleImageChange} accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" required={!isEditMode && !coverPreview} />
              {coverPreview ? (
                <img src={coverPreview} alt="Cover" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(36,167,253,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(36,167,253,0.2)] transition-all">
                    <ImageIcon size={28} className="text-primary" />
                  </div>
                  <p className="text-sm text-white font-medium">Drag & drop or click to upload</p>
                  <p className="text-xs text-muted-foreground mt-2">Recommended: 1200x800px (JPG/PNG)</p>
                </>
              )}
              {coverPreview && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 pointer-events-none">
                  <span className="text-white font-medium bg-background border border-border px-4 py-2 rounded-lg">Change Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Visibility & Organization */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Layers size={16} className="text-primary" /> Configuration
            </h3>
            
            <div className="space-y-6">
              {/* Category */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">Classification</label>
                <select 
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary outline-none"
                  value={formData.categoryId}
                  onChange={e => setFormData({...formData, categoryId: e.target.value})}
                >
                  <option value="">Select Category</option>
                  {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                
                <div className="flex gap-2 mt-2">
                  <input 
                    type="text" 
                    placeholder="Add new category" 
                    className="flex-1 bg-background border border-border rounded-lg px-3 py-1.5 text-xs text-white outline-none"
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value)}
                  />
                  <button type="button" onClick={handleAddCategory} className="px-3 py-1.5 bg-secondary text-white text-xs rounded-lg hover:bg-secondary/80">Add</button>
                </div>
              </div>

              <div className="w-full h-px bg-border"></div>

              {/* Featured Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">Featured Project</p>
                  <p className="text-xs text-muted-foreground">Showcase this on the homepage</p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, isFeatured: !formData.isFeatured})}
                  className={cn(
                    "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    formData.isFeatured ? "bg-primary" : "bg-muted"
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      formData.isFeatured ? "translate-x-5" : "translate-x-0"
                    )}
                  />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </form>
  );
}
