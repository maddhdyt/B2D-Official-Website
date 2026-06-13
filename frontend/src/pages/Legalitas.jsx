import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, FileText, Briefcase, Building2, Scale, ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- Sub-components ---

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      });
      gsap.from(".hero-glow", {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        ease: "power2.out",
        delay: 0.5
      });
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden border-b border-white/5 bg-[#050816]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 parallax-bg overflow-hidden flex items-center justify-center pointer-events-none">
        <div className="hero-glow absolute w-[600px] h-[600px] bg-[#24A7FD] rounded-full blur-[150px] opacity-20 translate-y-[-20%]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <span className="hero-text text-[#24A7FD] tracking-[0.2em] text-sm md:text-base font-semibold mb-6 uppercase">
          Legal Infrastructure for Scaling Businesses
        </span>
        <h1 className="flex flex-col items-center leading-[0.9] tracking-tight">
          <span className="hero-text text-5xl md:text-8xl lg:text-9xl font-black text-white uppercase" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Protecting
          </span>
          <span className="hero-text text-4xl md:text-7xl lg:text-8xl font-black text-transparent uppercase mt-2 md:mt-4" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', fontFamily: "'Unbounded', sans-serif" }}>
            Business
          </span>
          <span className="hero-text italic text-5xl md:text-8xl lg:text-9xl text-[#3B82F6] font-bold mt-2 md:mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Identity
          </span>
        </h1>
        <p className="hero-text mt-10 text-[#94A3B8] max-w-2xl text-lg font-light leading-relaxed">
          Amankan masa depan bisnis Anda dengan legalitas yang solid. Kami mengurus merek, perizinan, dan pendirian badan usaha dengan standar enterprise, sehingga Anda bisa fokus pada ekspansi.
        </p>
      </div>

      {/* Thin grid lines decorative */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block" />
    </section>
  );
};

const WhyLegalMatters = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".reveal-text", {
        y: 40,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
      gsap.fromTo(".grid-line", {
        scaleY: 0
      }, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scaleY: 1,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power3.inOut"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative bg-[#050816]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block grid-line" />
          
          <div className="reveal-text">
            <h2 className="text-3xl md:text-5xl text-white font-light leading-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Skala besar dimulai dari <span className="text-[#24A7FD] font-semibold">fondasi legal</span> yang kuat.
            </h2>
          </div>
          <div className="reveal-text flex flex-col justify-center">
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6 font-light">
              Pertumbuhan bisnis tanpa perlindungan hukum sama dengan membangun gedung di atas pasir. Kredibilitas di mata investor, partner, dan pelanggan sangat bergantung pada seberapa aman struktur legal bisnis Anda.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed font-light">
              Jangan biarkan ide dan merek Anda diklaim pihak lain. B2D hadir sebagai mitra strategis untuk membangun infrastruktur hukum perusahaan yang siap *scale-up* di pasar global.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const servicesData = [
  {
    icon: ShieldCheck,
    title: "Pendaftaran Merek (HKI)",
    desc: "Lindungi nama, logo, dan identitas brand Anda secara hukum agar tidak bisa digunakan atau diklaim oleh kompetitor."
  },
  {
    icon: Building2,
    title: "Pendirian PT / CV",
    desc: "Bentuk badan usaha berbadan hukum dengan proses yang transparan, dokumen lengkap, dan compliance terhadap regulasi terbaru."
  },
  {
    icon: FileText,
    title: "Perizinan Usaha",
    desc: "Urus NIB, izin edar (BPOM/PIRT), dan perizinan spesifik industri lainnya tanpa birokrasi yang membingungkan."
  },
  {
    icon: Briefcase,
    title: "Drafting Kontrak Bisnis",
    desc: "Pembuatan perjanjian kerjasama, NDA, dan dokumen legal lainnya yang melindungi hak dan kewajiban perusahaan."
  },
  {
    icon: Scale,
    title: "Konsultasi Legal",
    desc: "Sesi advisory strategis dengan expert legal untuk menavigasi risiko hukum dari setiap langkah bisnis Anda."
  },
  {
    icon: CheckCircle2,
    title: "Corporate Compliance",
    desc: "Audit kelengkapan legalitas dan penyesuaian operasional perusahaan terhadap perubahan regulasi pemerintah terbaru."
  }
];

const ServiceOfferings = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".service-card", {
        y: 50,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#050816] border-y border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#24A7FD]/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[#3B82F6] font-semibold tracking-widest text-sm uppercase mb-4 block">Corporate Legal Tech</span>
            <h2 className="text-4xl md:text-6xl text-white font-medium" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Layanan Legalitas
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-md font-light">
            Solusi end-to-end yang dirancang untuk melindungi setiap fase pertumbuhan startup dan enterprise Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#24A7FD]/0 via-[#24A7FD]/0 to-[#24A7FD]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#24A7FD]/10 border border-[#24A7FD]/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#24A7FD]/20 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-[#24A7FD]" />
                </div>
                <h3 className="text-xl md:text-2xl text-white font-semibold mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessTimeline = () => {
  const steps = [
    { num: "01", title: "Consultation", desc: "Analisis kebutuhan legal spesifik model bisnis Anda." },
    { num: "02", title: "Document Review", desc: "Pengumpulan dan verifikasi kelengkapan dokumen." },
    { num: "03", title: "Filing & Submission", desc: "Pendaftaran resmi ke instansi pemerintahan terkait." },
    { num: "04", title: "Monitoring", desc: "Pemantauan status pengajuan secara berkala." },
    { num: "05", title: "Completion", desc: "Penyerahan dokumen legalitas final kepada Anda." }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".process-step", {
        x: -40,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#050816]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center text-white mb-20 font-medium" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Workflow <span className="text-[#24A7FD] italic" style={{ fontFamily: "'Playfair Display', serif" }}>Premium</span>
          </h2>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-16 py-4">
            {steps.map((step, idx) => (
              <div key={idx} className="process-step mb-16 last:mb-0 relative group">
                <div className="absolute -left-[41px] md:-left-[73px] top-1 w-4 h-4 rounded-full bg-[#050816] border-2 border-[#24A7FD] group-hover:bg-[#24A7FD] group-hover:shadow-[0_0_15px_rgba(36,167,253,0.6)] transition-all duration-300" />
                <span className="text-[#3B82F6] font-bold tracking-widest text-sm mb-2 block">{step.num}</span>
                <h3 className="text-2xl text-white font-medium mb-3" style={{ fontFamily: "'Unbounded', sans-serif" }}>{step.title}</h3>
                <p className="text-[#94A3B8] font-light text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustMetrics = () => {
  const metrics = [
    { value: "500+", label: "Brands Protected" },
    { value: "98%", label: "Success Rate" },
    { value: "14 Days", label: "Avg. Completion" },
  ];
  
  return (
    <section className="py-24 bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center pt-8 md:pt-0 first:pt-0">
              <span className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                {m.value}
              </span>
              <span className="text-[#94A3B8] uppercase tracking-widest text-sm">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "Berapa lama proses pendaftaran merek dagang?", a: "Pendaftaran merek biasanya memakan waktu 12-18 bulan hingga sertifikat terbit, namun perlindungan hukum sudah berlaku sejak tanggal penerimaan pendaftaran (Filing Date)." },
    { q: "Apa bedanya mendirikan PT dan CV?", a: "PT berbadan hukum dengan tanggung jawab pemegang saham terbatas pada modal, cocok untuk investasi. CV bukan badan hukum, tanggung jawab pengurus tidak terbatas." },
    { q: "Apakah B2D menjamin merek pasti diterima?", a: "Kami melakukan penelusuran (screening) mendalam untuk meminimalisir risiko penolakan hingga 98%, namun keputusan akhir tetap berada di tangan DJKI." },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-[#050816]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl text-center text-white mb-16 font-medium" style={{ fontFamily: "'Unbounded', sans-serif" }}>
          Frequently Asked <span className="text-[#24A7FD] italic" style={{ fontFamily: "'Playfair Display', serif" }}>Questions</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left p-6 flex justify-between items-center text-white hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-medium text-lg pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#24A7FD] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-6 pt-0 text-[#94A3B8] font-light leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 relative bg-[#050816] overflow-hidden text-center border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#24A7FD]/10 via-[#050816]/0 to-[#050816] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-7xl text-white font-bold mb-8 tracking-tighter" style={{ fontFamily: "'Unbounded', sans-serif" }}>
          Secure Your <br/> <span className="italic text-[#24A7FD] font-light" style={{ fontFamily: "'Playfair Display', serif" }}>Business Future</span>
        </h2>
        <p className="text-[#94A3B8] text-lg max-w-xl mx-auto mb-10 font-light">
          Jangan menunda perlindungan legal. Konsultasikan kebutuhan legalitas perusahaan Anda hari ini bersama expert kami.
        </p>
        <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-3">
          <span className="relative z-10">Mulai Konsultasi Gratis</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-[#24A7FD] transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>
      </div>
    </section>
  );
};

export default function Legalitas() {
  return (
    <>
      <main className="w-full bg-[#050816] overflow-x-hidden text-white font-sans">
        <HeroSection />
        <WhyLegalMatters />
        <ServiceOfferings />
        <ProcessTimeline />
        <TrustMetrics />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
