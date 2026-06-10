import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import api from '../api/axios';

gsap.registerPlugin(ScrollTrigger);

export default function BlogListing() {
  const containerRef = useRef(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/blogs?status=PUBLISHED");
        if (res.data.success) {
          setArticles(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Split the articles
  const featuredArticle = articles.length > 0 ? articles[0] : null;
  const gridArticles = articles.length > 1 ? articles.slice(1) : [];

  useEffect(() => {
    if (loading) return;
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // Hero text animations
      gsap.fromTo(
        ".hero-text-line",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );

      // Featured article entrance
      gsap.fromTo(
        ".featured-article",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.4 }
      );

      // Grid articles stagger
      gsap.utils.toArray('.article-card').forEach(card => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [loading]);

  if (loading) {
    return <div className="w-full min-h-screen bg-[#030303]"></div>;
  }

  return (
    <>
      <main ref={containerRef} className="w-full min-h-screen bg-[#030303] text-white pt-32 pb-24 font-sans">
        
        {/* Header / Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-8">
            <div>
              <div className="overflow-hidden mb-2">
                <h1 className="hero-text-line text-6xl md:text-8xl font-unbounded font-bold tracking-tighter">Blog.</h1>
              </div>
              <div className="overflow-hidden">
                <p className="hero-text-line text-white/60 font-playfair italic text-xl md:text-2xl max-w-md">
                  Insights, inspiration, and expert advice on our engaging digital publication.
                </p>
              </div>
            </div>
            
            {/* Quick Categories filter placeholder */}
            <div className="hero-text-line flex gap-4">
              <span className="text-xs uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:border-[#00D4FF] hover:text-[#00D4FF] cursor-pointer transition-colors">Digital</span>
              <span className="text-xs uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:border-[#00D4FF] hover:text-[#00D4FF] cursor-pointer transition-colors">Branding</span>
              <span className="text-xs uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:border-[#00D4FF] hover:text-[#00D4FF] cursor-pointer transition-colors">Strategy</span>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="px-6 md:px-12 lg:px-24 mb-24 md:mb-32">
            <div className="max-w-[1400px] mx-auto featured-article">
              <Link to={`/blog/${featuredArticle.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                  
                  {/* Image */}
                  <div className="w-full overflow-hidden rounded-sm aspect-[4/3] lg:aspect-[16/10] relative">
                    <div className="absolute inset-0 bg-[#00D4FF]/0 group-hover:bg-[#00D4FF]/10 transition-colors duration-500 z-10 pointer-events-none" />
                    <img 
                      src={featuredArticle.featuredImage} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[0.25,1,0.5,1]"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex gap-4 items-center mb-6">
                      <span className="font-unbounded text-xs uppercase tracking-[0.2em] text-[#00D4FF]">
                        {featuredArticle.category?.name || "Uncategorized"}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="text-white/50 text-xs font-unbounded tracking-wider">
                        {featuredArticle.readTime} Min Read
                      </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 group-hover:text-white text-white/90 transition-colors leading-tight">
                      {featuredArticle.title}
                    </h2>
                    
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                      {featuredArticle.excerpt}
                    </p>

                    <span className="font-unbounded text-xs uppercase tracking-widest text-white border-b border-white pb-1 w-fit group-hover:text-[#00D4FF] group-hover:border-[#00D4FF] transition-colors">
                      Read Article
                    </span>
                  </div>

                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="px-6 md:px-12 lg:px-24 mb-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
              
              {gridArticles.map((article) => (
                <Link key={article.id} to={`/blog/${article.slug}`} className="article-card group flex flex-col">
                  
                  {/* Image */}
                  <div className="w-full overflow-hidden rounded-sm aspect-[4/3] mb-6 relative">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                    <img 
                      src={article.featuredImage} 
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex gap-3 items-center mb-4">
                    <span className="font-unbounded text-[10px] uppercase tracking-widest text-white/50">
                      {article.category?.name || "Uncategorized"}
                    </span>
                    <span className="text-white/20 text-xs">•</span>
                    <span className="font-sans text-[11px] text-white/40 tracking-wider">
                      {new Date(article.publishedAt || article.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-playfair font-bold leading-snug mb-4 group-hover:text-[#00D4FF] transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>

                  <span className="font-unbounded text-[10px] uppercase tracking-widest text-white/80 group-hover:text-white flex items-center gap-2 mt-auto">
                    Read More 
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                  
                </Link>
              ))}

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
