import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import api from '../api/axios';
import { portfolioProjects } from '../data/portfolioProjects';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await api.get(`/portfolios/${slug}`);
        if (res.data.success) {
          setProject(res.data.data);
        } else {
          fallbackToLocal();
        }
      } catch (err) {
        console.error("API error, trying local fallback:", err);
        fallbackToLocal();
      } finally {
        fetchRelated();
      }
    };

    const fallbackToLocal = () => {
      const localProject = portfolioProjects.find(p => p.id === slug);
      if (localProject) {
        setProject({
          id: localProject.id,
          title: localProject.title,
          slug: localProject.id,
          shortDesc: localProject.description,
          fullDesc: `<p>${localProject.description}</p>`,
          coverImage: localProject.image,
          category: { name: localProject.category },
          techStack: [],
          galleries: [],
          metrics: null,
          createdAt: new Date().toISOString()
        });
      } else {
        setError(true);
      }
    };

    const fetchRelated = async () => {
      try {
        const relRes = await api.get("/portfolios");
        if (relRes.data.success) {
          setRelatedProjects(relRes.data.data.filter(p => p.slug !== slug).slice(0, 3));
        }
      } catch (err) {
        // If API fails, fallback to local
        setRelatedProjects(portfolioProjects.filter(p => p.id !== slug).slice(0, 3).map(p => ({
          ...p,
          slug: p.id,
          coverImage: p.image,
          category: { name: p.category }
        })));
      }
      setLoading(false);
    };

    fetchProject();
  }, [slug]);

  useEffect(() => {
    if (loading || error || !project) return;
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      // Reveal header elements
      gsap.fromTo(
        ".reveal-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );

      // Reveal hero image
      gsap.fromTo(
        ".hero-image-container",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.4 }
      );

      // Reveal content paragraphs staggered
      gsap.fromTo(
        ".article-content > *",
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.05, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".article-content",
            start: "top 80%"
          }
        }
      );

      // Reveal metrics
      if (document.querySelector('.metrics-grid')) {
        gsap.fromTo(
          ".metric-card",
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
            scrollTrigger: {
              trigger: ".metrics-grid",
              start: "top 85%"
            }
          }
        );
      }

      // Reveal related projects
      gsap.utils.toArray('.related-card').forEach(card => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%"
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, [loading, error, project]);

  if (loading) return <div className="w-full min-h-screen bg-[#070B0D]"></div>;
  if (error || !project) return <Navigate to="/portfolio" replace />;

  return (
    <>
      <main ref={containerRef} className="w-full min-h-screen bg-[#070B0D] text-white pt-24 md:pt-32 pb-24">
        
        <article className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          
          {/* Header Section */}
          <header className="max-w-5xl mx-auto mb-12 md:mb-16">
            
            {/* Breadcrumbs */}
            <nav className="reveal-header font-unbounded text-[10px] md:text-xs uppercase tracking-widest text-white/40 mb-8 md:mb-12 flex items-center gap-3">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
              <span>/</span>
              <span className="text-[#00D4FF]">{project.category?.name || "Project"}</span>
            </nav>

            {/* Title */}
            <h1 className="reveal-header text-5xl md:text-7xl lg:text-[6.5rem] font-bold leading-[1.05] mb-8 tracking-tighter">
              {project.title}
            </h1>

            {/* Meta */}
            <div className="reveal-header flex flex-wrap gap-x-12 gap-y-6 items-center border-t border-b border-white/10 py-8 mt-12">
              <div className="flex flex-col gap-2">
                <span className="font-unbounded text-[10px] uppercase tracking-widest text-white/40">Category</span>
                <span className="font-sans text-sm md:text-base text-white/90">{project.category?.name || "Uncategorized"}</span>
              </div>
              
              {project.clientName && (
                <>
                  <div className="w-px h-10 bg-white/10 hidden md:block" />
                  <div className="flex flex-col gap-2">
                    <span className="font-unbounded text-[10px] uppercase tracking-widest text-white/40">Client</span>
                    <span className="font-sans text-sm md:text-base text-white/90">{project.clientName}</span>
                  </div>
                </>
              )}

              {project.duration && (
                <>
                  <div className="w-px h-10 bg-white/10 hidden md:block" />
                  <div className="flex flex-col gap-2">
                    <span className="font-unbounded text-[10px] uppercase tracking-widest text-white/40">Duration</span>
                    <span className="font-sans text-sm md:text-base text-white/90">{project.duration}</span>
                  </div>
                </>
              )}
              
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div className="flex flex-col gap-2">
                <span className="font-unbounded text-[10px] uppercase tracking-widest text-white/40">Date</span>
                <span className="font-sans text-sm md:text-base text-white/80">
                  {new Date(project.createdAt).toLocaleDateString('en-US', { year: 'numeric' })}
                </span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="hero-image-container w-full max-w-6xl mx-auto rounded-xl overflow-hidden mb-16 md:mb-24 bg-[#0A0A0A]">
            <img 
              src={project.coverImage} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-16">
            
            {/* Left Sidebar (Tech Stack & Links) */}
            <div className="lg:w-1/4 flex flex-col gap-8">
              {project.techStack && project.techStack.length > 0 && (
                <div className="bg-[#0A0A0A] p-6 rounded-xl border border-white/5">
                  <h3 className="font-unbounded text-sm font-bold mb-4 text-[#00D4FF]">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-wider px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {project.projectUrl && (
                <a 
                  href={project.projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-unbounded text-xs uppercase tracking-widest text-center py-4 bg-white text-black hover:bg-[#00D4FF] hover:text-white transition-colors rounded-xl font-bold"
                >
                  View Live Project
                </a>
              )}
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div 
                className="article-content font-sans text-lg md:text-xl leading-[1.8] text-white/80 
                  [&>h2]:font-playfair [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-16 [&>h2]:mb-6
                  [&>h3]:font-unbounded [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-semibold [&>h3]:text-[#00D4FF] [&>h3]:mt-12 [&>h3]:mb-4
                  [&>p]:mb-8
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-2
                  [&>strong]:text-white [&>strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: project.fullDesc }}
              />

              {/* Metrics Section */}
              {project.metrics && typeof project.metrics === 'object' && Object.keys(project.metrics).length > 0 && (
                <div className="mt-16 metrics-grid grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(project.metrics).map(([key, value], idx) => (
                    <div key={idx} className="metric-card bg-[#0A0A0A] border border-white/5 p-6 rounded-xl text-center">
                      <div className="text-3xl md:text-4xl font-bold font-unbounded text-white mb-2">{value}</div>
                      <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">{key}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {project.results && (
                <div className="mt-12 p-8 border-l-2 border-[#00D4FF] bg-[#00D4FF]/5 rounded-r-xl">
                  <h3 className="font-unbounded text-sm font-bold text-white mb-4 uppercase tracking-widest">Key Results</h3>
                  <p className="font-sans text-white/80 leading-relaxed">{project.results}</p>
                </div>
              )}
            </div>
          </div>

          {/* Galleries */}
          {project.galleries && project.galleries.length > 0 && (
            <div className="mt-24 max-w-6xl mx-auto">
              <h3 className="font-unbounded text-2xl font-bold mb-8 text-center">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.galleries.map(gallery => (
                  <div key={gallery.id} className="rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/5">
                    <img src={gallery.imageUrl} alt="Gallery" className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </article>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="mt-32 pt-24 border-t border-white/10 px-6 md:px-12 lg:px-24 bg-[#050709]">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
                <h2 className="text-3xl md:text-4xl font-unbounded font-bold">More Work</h2>
                <Link to="/portfolio" className="font-unbounded text-xs uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors border-b border-[#00D4FF] hover:border-white pb-1">
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map(rel => (
                  <Link key={rel.id} to={`/portfolio/${rel.slug}`} className="related-card group flex flex-col">
                    <div className="w-full overflow-hidden rounded-xl bg-[#0A0A0A] border border-white/5 mb-6 relative aspect-video md:aspect-auto">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={rel.coverImage} 
                        alt={rel.title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <span className="font-unbounded text-[10px] uppercase tracking-widest text-[#00D4FF] mb-3">
                      {rel.category?.name || "Portfolio"}
                    </span>
                    <h3 className="text-xl font-unbounded font-bold leading-snug mb-3 group-hover:text-white text-white/90 transition-colors">
                      {rel.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
