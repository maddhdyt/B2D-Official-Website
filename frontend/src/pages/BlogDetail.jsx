import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import { blogArticles } from '../data/blogData';

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  
  const article = blogArticles.find(a => a.slug === slug);

  // If article not found, could redirect to /blog or show 404
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Get 3 related articles (excluding current)
  const relatedArticles = blogArticles.filter(a => a.id !== article.id).slice(0, 3);

  useEffect(() => {
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

      // Reveal related articles
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
  }, [slug]);

  return (
    <>
      <main ref={containerRef} className="w-full min-h-screen bg-[#030303] text-white pt-24 md:pt-32 pb-24">
        
        <article className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          
          {/* Header Section */}
          <header className="max-w-4xl mx-auto mb-12 md:mb-16">
            
            {/* Breadcrumbs */}
            <nav className="reveal-header font-unbounded text-[10px] md:text-xs uppercase tracking-widest text-white/40 mb-8 md:mb-12 flex items-center gap-3">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#00D4FF]">{article.category}</span>
            </nav>

            {/* Title */}
            <h1 className="reveal-header text-4xl md:text-6xl lg:text-7xl font-unbounded font-bold leading-[1.1] mb-8">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="reveal-header flex flex-wrap gap-x-8 gap-y-4 items-center border-t border-b border-white/10 py-6">
              <div className="flex flex-col gap-1">
                <span className="font-unbounded text-[10px] uppercase tracking-widest text-white/40">Author</span>
                <span className="font-playfair text-lg text-white/90">{article.author}</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden md:block" />
              <div className="flex flex-col gap-1">
                <span className="font-unbounded text-[10px] uppercase tracking-widest text-white/40">Date</span>
                <span className="font-sans text-sm text-white/80">{article.date}</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden md:block" />
              <div className="flex flex-col gap-1">
                <span className="font-unbounded text-[10px] uppercase tracking-widest text-white/40">Reading Time</span>
                <span className="font-sans text-sm text-white/80">{article.readTime}</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="hero-image-container w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden mb-16 md:mb-24">
            <img 
              src={article.image.webp} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="max-w-[800px] mx-auto">
            <div 
              className="article-content font-sans text-lg md:text-xl leading-[1.8] text-white/80 
                [&>h2]:font-playfair [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-16 [&>h2]:mb-6
                [&>h3]:font-unbounded [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-semibold [&>h3]:text-[#00D4FF] [&>h3]:mt-12 [&>h3]:mb-4
                [&>p]:mb-8
                [&>blockquote]:font-playfair [&>blockquote]:text-2xl [&>blockquote]:md:text-3xl [&>blockquote]:italic [&>blockquote]:leading-snug [&>blockquote]:text-white [&>blockquote]:border-l-4 [&>blockquote]:border-[#00D4FF] [&>blockquote]:pl-8 [&>blockquote]:my-12
                [&>strong]:text-white [&>strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Share / Tags Footer */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-4 items-center">
                <span className="font-unbounded text-xs uppercase tracking-widest text-white/50">Tags:</span>
                <span className="text-xs px-3 py-1 bg-white/5 rounded-full hover:bg-[#00D4FF]/10 hover:text-[#00D4FF] cursor-pointer transition-colors">{article.category}</span>
                <span className="text-xs px-3 py-1 bg-white/5 rounded-full hover:bg-[#00D4FF]/10 hover:text-[#00D4FF] cursor-pointer transition-colors">Agency</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="font-unbounded text-xs uppercase tracking-widest text-white/50">Share:</span>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors text-xs">FB</button>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors text-xs">IN</button>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors text-xs">X</button>
              </div>
            </div>
          </div>

        </article>

        {/* Related Articles */}
        <section className="mt-32 pt-24 border-t border-white/10 px-6 md:px-12 lg:px-24 bg-[#070B0D]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
              <h2 className="text-3xl md:text-4xl font-unbounded font-bold">Related News</h2>
              <Link to="/blog" className="font-unbounded text-xs uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors border-b border-[#00D4FF] hover:border-white pb-1">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map(rel => (
                <Link key={rel.id} to={`/blog/${rel.slug}`} className="related-card group flex flex-col">
                  <div className="w-full overflow-hidden rounded-sm aspect-[16/10] mb-6 relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={rel.image.webp} 
                      alt={rel.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <span className="font-unbounded text-[10px] uppercase tracking-widest text-[#00D4FF] mb-3">
                    {rel.category}
                  </span>
                  <h3 className="text-xl font-playfair font-bold leading-snug mb-3 group-hover:text-white text-white/90 transition-colors">
                    {rel.title}
                  </h3>
                  <span className="font-sans text-xs text-white/40">{rel.date}</span>
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
