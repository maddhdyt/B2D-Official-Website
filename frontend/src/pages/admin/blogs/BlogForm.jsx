import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../../../api/axios";
import RichTextEditor from "../../../components/admin/RichTextEditor";
import { Save, ArrowLeft, Image as ImageIcon, Settings, Search } from "lucide-react";

export default function BlogForm() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const isEditMode = Boolean(slug);
  
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    categoryId: "",
    status: "DRAFT",
    tags: "",
    seoTitle: "",
    seoDesc: ""
  });
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    fetchCategories();
    if (isEditMode) {
      api.get(`/blogs/${slug}`).then(res => {
        const blog = res.data.data;
        setFormData({
          title: blog.title,
          content: blog.content,
          categoryId: blog.categoryId || "",
          status: blog.status,
          tags: blog.tags.map(t => t.name).join(", "),
          seoTitle: blog.seoTitle || "",
          seoDesc: blog.seoDesc || ""
        });
        if (blog.featuredImage) {
          setCoverPreview(blog.featuredImage.startsWith("http") ? blog.featuredImage : `http://localhost:5000${blog.featuredImage}`);
        }
      }).catch(console.error);
    }
  }, [slug]);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/blogs/categories");
      setCategories(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      const res = await api.post("/blogs/categories", { name: newCategory });
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
        if (key === 'tags') {
          const tagArr = formData.tags.split(",").map(t => t.trim()).filter(Boolean);
          data.append("tags", JSON.stringify(tagArr));
        } else {
          data.append(key, formData[key]);
        }
      });
      if (coverImage) {
        data.append("featuredImage", coverImage);
      }

      if (isEditMode) {
        await api.put(`/blogs/${slug}`, data, { headers: { "Content-Type": "multipart/form-data" } });
      } else {
        await api.post("/blogs", data, { headers: { "Content-Type": "multipart/form-data" } });
      }
      navigate("/admin/blogs");
    } catch (error) {
      console.error(error);
      alert(isEditMode ? "Failed to update blog" : "Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[1600px] mx-auto">
      
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Link to="/admin/blogs" className="p-2 bg-card border border-border rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">{isEditMode ? "Edit Article" : "Create New Article"}</h1>
            <p className="text-sm text-muted-foreground">{isEditMode ? "Update your content" : "Draft a new masterpiece"}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Status:</span>
          <select 
            value={formData.status} 
            onChange={e => setFormData({...formData, status: e.target.value})}
            className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </select>
          <button 
            type="submit" 
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(36,167,253,0.2)] disabled:opacity-50"
          >
            <Save size={18} />
            {loading ? "Saving..." : (isEditMode ? "Update" : "Publish")}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Main Editor Area */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <input 
              type="text" 
              placeholder="Article Title..." 
              required
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
              className="w-full bg-transparent border-none text-3xl font-bold text-white placeholder-muted-foreground/50 focus:outline-none focus:ring-0 mb-6"
            />
            
            <RichTextEditor 
              content={formData.content} 
              onChange={(html) => setFormData({...formData, content: html})}
            />
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          
          {/* Cover Image */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <ImageIcon size={16} className="text-primary" /> Cover Image
            </h3>
            <div className="relative border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center min-h-[200px] text-center bg-background/50 group hover:border-primary/50 transition-colors cursor-pointer overflow-hidden">
              <input type="file" onChange={handleImageChange} accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
              {coverPreview ? (
                <img src={coverPreview} alt="Cover" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <ImageIcon size={24} className="text-muted-foreground" />
                  </div>
                  <p className="text-sm text-white font-medium">Click to upload</p>
                  <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </>
              )}
              {coverPreview && (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 pointer-events-none">
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">Change Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Organization */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Settings size={16} className="text-primary" /> Organization
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Category</label>
                <select 
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  value={formData.categoryId}
                  onChange={e => setFormData({...formData, categoryId: e.target.value})}
                >
                  <option value="">Select Category</option>
                  {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                
                <div className="flex gap-2 mt-2">
                  <input 
                    type="text" 
                    placeholder="New category" 
                    className="flex-1 bg-background border border-border rounded-lg px-3 py-1.5 text-xs text-white outline-none"
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value)}
                  />
                  <button type="button" onClick={handleAddCategory} className="px-3 py-1.5 bg-secondary text-white text-xs rounded-lg hover:bg-secondary/80">Add</button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Tags (Comma separated)</label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="react, tutorial, web..."
                  value={formData.tags}
                  onChange={e => setFormData({...formData, tags: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* SEO Metadata */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Search size={16} className="text-primary" /> SEO Metadata
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Meta Title</label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="SEO Title..."
                  value={formData.seoTitle}
                  onChange={e => setFormData({...formData, seoTitle: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Meta Description</label>
                <textarea 
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none min-h-[80px]"
                  placeholder="Brief description for search engines..."
                  value={formData.seoDesc}
                  onChange={e => setFormData({...formData, seoDesc: e.target.value})}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </form>
  );
}
