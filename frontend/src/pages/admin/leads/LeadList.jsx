import { useState, useEffect } from "react";
import api from "../../../api/axios";
import { Mail, Phone, Building, MessageSquare, Clock, Filter, Plus, User, FileText, CheckCircle2 } from "lucide-react";
import { cn } from "../../../lib/utils";

export default function LeadList() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      const res = await api.get("/leads");
      if (res.data.success) {
        setLeads(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch leads", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.put(`/leads/${id}`, { status: newStatus });
      fetchLeads();
    } catch (error) {
      alert("Failed to update status");
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'NEW':
        return <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded border bg-primary/10 text-primary border-primary/20 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> NEW LEAD</span>;
      case 'CONTACTED':
        return <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded border bg-yellow-500/10 text-yellow-500 border-yellow-500/20 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> CONTACTED</span>;
      case 'CLOSED':
        return <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded border bg-emerald-500/10 text-emerald-500 border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={12} /> WON / CLOSED</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Leads Pipeline</h1>
          <p className="text-muted-foreground">Track and manage your enterprise sales opportunities.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(36,167,253,0.2)] hover:shadow-[0_0_25px_rgba(36,167,253,0.4)]">
          <Plus size={18} />
          <span>New Lead</span>
        </button>
      </div>

      {/* Pipeline Stats */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex-none w-64 bg-card border border-border rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 blur-xl rounded-full"></div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <h3 className="text-sm font-bold text-white">New Leads</h3>
            <span className="ml-auto text-xs bg-white/5 border border-border px-2 py-0.5 rounded text-muted-foreground">{leads.filter(l => l.status === 'NEW').length}</span>
          </div>
          <p className="text-2xl font-bold text-white mt-4">{leads.filter(l => l.status === 'NEW').length}</p>
        </div>

        <div className="flex-none w-64 bg-card border border-border rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/10 blur-xl rounded-full"></div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            <h3 className="text-sm font-bold text-white">Contacted</h3>
            <span className="ml-auto text-xs bg-white/5 border border-border px-2 py-0.5 rounded text-muted-foreground">{leads.filter(l => l.status === 'CONTACTED').length}</span>
          </div>
          <p className="text-2xl font-bold text-white mt-4">{leads.filter(l => l.status === 'CONTACTED').length}</p>
        </div>

        <div className="flex-none w-64 bg-card border border-border rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 blur-xl rounded-full"></div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <h3 className="text-sm font-bold text-white">Won</h3>
            <span className="ml-auto text-xs bg-white/5 border border-border px-2 py-0.5 rounded text-muted-foreground">{leads.filter(l => l.status === 'CLOSED').length}</span>
          </div>
          <p className="text-2xl font-bold text-white mt-4">{leads.filter(l => l.status === 'CLOSED').length}</p>
        </div>
      </div>

      {/* Detailed Analytics List */}
      <div className="bg-card border-x border-b border-border rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex justify-between items-center bg-background/50">
          <h2 className="text-lg font-bold text-white">Detailed Lead Analytics</h2>
          <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
            <Filter size={18} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background/20 border-b border-border text-xs text-muted-foreground uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Lead Name</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    Loading pipeline...
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">
                    No leads in the pipeline.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary/20 to-blue-800/20 border border-primary/30 flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(36,167,253,0.1)]">
                          {lead.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white mb-0.5 group-hover:text-primary transition-colors">{lead.name}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock size={12} /> {new Date(lead.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Building size={16} className="text-muted-foreground" />
                        <span className="text-sm text-white">{lead.company || "Individual"}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Mail size={12} className="text-primary" /> {lead.email}
                        </div>
                        {lead.phone && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Phone size={12} className="text-primary" /> {lead.phone}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select 
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className={cn(
                          "text-xs font-bold px-3 py-1.5 border outline-none rounded-lg cursor-pointer appearance-none transition-colors",
                          lead.status === 'NEW' ? 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20' : 
                          lead.status === 'CONTACTED' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20' : 
                          'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20'
                        )}
                      >
                        <option value="NEW" className="bg-card text-white">NEW</option>
                        <option value="CONTACTED" className="bg-card text-white">CONTACTED</option>
                        <option value="CLOSED" className="bg-card text-white">WON</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-muted-foreground hover:text-white bg-background border border-border rounded transition-colors" title="View Message" onClick={() => alert(lead.message)}>
                          <FileText size={16} />
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
