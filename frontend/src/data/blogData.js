import analyticsAvif from "../assets/portfolio/analytics.avif";
import analyticsWebp from "../assets/portfolio/analytics.webp";
import creativeAvif from "../assets/portfolio/creative.avif";
import creativeWebp from "../assets/portfolio/creative.webp";
import crmAvif from "../assets/portfolio/crm.avif";
import crmWebp from "../assets/portfolio/crm.webp";
// Reusing some assets to simulate premium images
import tiktokAdsAvif from "../assets/articles/tiktok-ads.avif";
import tiktokAdsWebp from "../assets/articles/tiktok-ads.webp";

export const blogArticles = [
  {
    id: "digital-brand-identity-2026",
    slug: "digital-brand-identity-2026",
    category: "Branding",
    author: "B2D Design Team",
    date: "14 Jun 2026",
    readTime: "6 Min",
    title: "Things to Look for When Comparing Branding Alternatives",
    excerpt: "Discover the essential criteria for evaluating brand identity solutions in a digital-first era.",
    image: { avif: creativeAvif, webp: creativeWebp },
    content: `
      <h2>The Shift in Digital Branding</h2>
      <p>Building a brand today is vastly different from a decade ago. It’s no longer just about a logo and a color palette; it's about crafting a cohesive digital experience. As businesses evaluate various branding alternatives, it's crucial to look beyond aesthetics.</p>
      
      <blockquote>
        "A true brand identity lives in the micro-interactions, the performance, and the emotional connection it fosters across all digital touchpoints."
      </blockquote>
      
      <h3>1. Scalability of Design Systems</h3>
      <p>When comparing alternatives, assess whether the agency provides a robust design system. A scalable system ensures your brand remains consistent as you expand into new platforms, from web to mobile to augmented reality.</p>
      
      <h3>2. Performance-Driven Aesthetics</h3>
      <p>Beautiful design is useless if it hurts performance. The best branding alternatives integrate seamlessly with technical architecture. Ensure that the visual assets provided are optimized for speed, utilizing modern formats like WebP and AVIF.</p>
      
      <h3>3. Emotional Resonance</h3>
      <p>Finally, does the branding evoke the right emotion? We must bridge the gap between logical decision-making and emotional appeal. Your brand must speak directly to your target audience's aspirations.</p>
    `
  },
  {
    id: "tiktok-ads-creative-performance",
    slug: "tiktok-ads-creative-performance",
    category: "Paid Advertising",
    author: "B2D Growth Team",
    date: "10 Jun 2026",
    readTime: "5 Min",
    title: "The Best Performing TikTok Ads Creative",
    excerpt: "Pola visual, hook, dan struktur creative yang mendorong performa kampanye short-form video.",
    image: { avif: tiktokAdsAvif, webp: tiktokAdsWebp },
    content: `
      <h2>Cracking the TikTok Algorithm</h2>
      <p>TikTok has revolutionized how brands communicate with consumers. The key to success isn't high-production value, but authenticity and high-retention hooks. In this article, we dissect what makes a TikTok ad truly perform.</p>
      
      <h3>The 3-Second Rule</h3>
      <p>If you haven't captured attention in the first three seconds, you've lost the user. We recommend starting with a strong visual disruption, a controversial statement, or an immediate solution to a common problem.</p>
      
      <blockquote>
        "Don't make ads. Make TikToks. The platform rewards native-looking content that blends seamlessly into the user's For You Page."
      </blockquote>
      
      <h3>Structuring Your Creative</h3>
      <p>A winning structure usually follows this flow: <strong>Hook &gt; Value Proposition &gt; Social Proof &gt; Call to Action</strong>. By keeping the pacing fast and utilizing trending audio, brands can significantly lower their Cost Per Acquisition (CPA).</p>
    `
  },
  {
    id: "standout-features-branding",
    slug: "standout-features-branding",
    category: "Branding",
    author: "B2D Strategy",
    date: "05 Jun 2026",
    readTime: "8 Min",
    title: "5 Stand-out Features of Branding You Should Know",
    excerpt: "Learn the core components that separate a forgettable business from an iconic brand.",
    image: { avif: creativeAvif, webp: creativeWebp },
    content: `
      <h2>Beyond the Logo</h2>
      <p>Many businesses mistake their logo for their brand. A brand is the holistic perception of your company. Here are 5 standout features you need to master.</p>
      
      <h3>1. Voice and Tone</h3>
      <p>How does your brand sound? Is it authoritative, playful, or empathetic? Consistency in voice builds trust.</p>
      
      <h3>2. Visual Hierarchy</h3>
      <p>Guiding the user's eye is a subtle art. Excellent branding employs strict visual hierarchy to ensure the most important information is consumed first.</p>
      
      <h3>3. Core Values</h3>
      <p>Consumers today buy into <em>why</em> you do it, not just <em>what</em> you do. Your branding must reflect your core values clearly and unapologetically.</p>
    `
  },
  {
    id: "crm-automation-scaling",
    slug: "crm-automation-scaling",
    category: "CRM & Automation",
    author: "B2D Tech Team",
    date: "01 Jun 2026",
    readTime: "7 Min",
    title: "Scaling Revenue with Advanced CRM Automation",
    excerpt: "How modern businesses use automated workflows to close deals faster and retain customers longer.",
    image: { avif: crmAvif, webp: crmWebp },
    content: `
      <h2>The Automation Advantage</h2>
      <p>Manual follow-ups are a thing of the past. To scale revenue predictably, businesses must leverage CRM automation. By setting up intelligent workflows, sales teams can focus on what they do best: closing deals.</p>
      
      <h3>Lead Scoring and Routing</h3>
      <p>Not all leads are created equal. Automation allows you to score leads based on their interactions with your digital assets. High-scoring leads are instantly routed to your top closers.</p>
      
      <blockquote>
        "Automation isn't about replacing human interaction; it's about making sure human interaction happens at the exact right moment."
      </blockquote>
      
      <h3>Post-Sale Nurturing</h3>
      <p>The journey doesn't end at the sale. Automated onboarding sequences and check-ins significantly reduce churn and increase Lifetime Value (LTV).</p>
    `
  },
  {
    id: "web-development-analytics",
    slug: "web-development-analytics",
    category: "Web Development",
    author: "B2D Engineering",
    date: "28 May 2026",
    readTime: "4 Min",
    title: "Integrating Deep Analytics into Modern Web Apps",
    excerpt: "Stop flying blind. Learn how to implement event-driven analytics architecture in your React applications.",
    image: { avif: analyticsAvif, webp: analyticsWebp },
    content: `
      <h2>Data is the New Code</h2>
      <p>Building a fast web application is only step one. Step two is understanding exactly how users interact with it. Deep analytics integration provides the roadmap for continuous optimization.</p>
      
      <h3>Event-Driven Architecture</h3>
      <p>Instead of relying purely on pageviews, modern analytics focus on events. Button clicks, scroll depth, and form interactions provide a granular view of user behavior.</p>
      
      <h3>Performance Tracking</h3>
      <p>Core Web Vitals are now a critical metric for both SEO and UX. We integrate performance tracking directly into our analytics dashboards to ensure zero degradation over time.</p>
    `
  },
  {
    id: "rookie-mistakes-branding",
    slug: "rookie-mistakes-branding",
    category: "Business Growth",
    author: "B2D Strategy",
    date: "20 May 2026",
    readTime: "6 Min",
    title: "Rookie Mistakes You're Making With Your Branding",
    excerpt: "Common pitfalls that drain marketing budgets and how to avoid them effectively.",
    image: { avif: creativeAvif, webp: creativeWebp },
    content: `
      <h2>The Cost of Inconsistency</h2>
      <p>One of the biggest rookie mistakes is inconsistency. When your website looks like a tech startup but your social media sounds like a corporate bank, consumers get confused.</p>
      
      <h3>Chasing Trends Over Timelessness</h3>
      <p>It's tempting to jump on the latest design trend. However, true brand identity should be timeless. If you build your brand on a trend, you'll need a rebrand in two years.</p>
      
      <blockquote>
        "A confused mind says no. Clarity is the most underrated aspect of modern branding."
      </blockquote>
      
      <h3>Ignoring the Mobile Experience</h3>
      <p>Your brand will be experienced primarily on a 6-inch screen. If your typography is illegible on mobile or your logo doesn't scale down elegantly, you are losing business.</p>
    `
  }
];
