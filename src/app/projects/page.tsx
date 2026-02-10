"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Lexx",
    id: "lexx",
    category: "Legal AI",
    description: "Citation-grounded legal assistant for Indian law using RAG. Focused on correctness and domain constraints.",
    focus: "Retrieval correctness under legal constraints",
    tech: ["Next.js", "FastAPI", "RAG", "LLMs"],
    link: "https://github.com/akash-kumar5/Lexx-LegalAI",
    images: ["/images/lexxui.png"],
  },
  {
    name: "Market Classifier",
    id: "regime",
    category: "Intelligence System",
    description: "Live system classifying crypto market regimes using multi-timeframe data and probabilistic models.",
    link: "https://github.com/akash-kumar5/CryptoMarket_Regime_Classifier",
    images: ["/images/regime-ui.png"],
    focus: "Real-time detection under noisy conditions",
    tech: ["Python", "LSTM", "HMM", "Time-series"],
  },
  {
    name: "Dazai",
    id: "dazai",
    category: "Research System",
    description: "Market-regime aware research system with backtesting and risk-aware experimentation.",
    focus: "Decision-making under noisy market regimes",
    tech: ["Python", "Pandas", "Backtesting"],
    link: "https://github.com/akash-kumar5/Dazai---Quant-Trading",
    images: ["/images/dazaiui.png"],

  },
  {
    name: "Zenin",
    id: "zenin",
    category: "Finance Tracker",
    description: "Mobile-first product focused on understanding spending behavior and long-term financial habits.",
    focus: "Behavioral signals from financial data",
    tech: ["React Native", "Firebase"],
    link: "https://github.com/akash-kumar5/zenin",
    images: ["/images/zenin-dashboard.jpg","/images/zenin-login.jpg"],
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-black font-inter">
      {/* SECTION HEADER */}
      <header className="max-w-7xl mx-auto mb-32 border-l-[12px] border-black pl-8">
        <h1 className="text-8xl md:text-[10rem] font-bebas leading-[0.8] tracking-tighter italic">
          PROJECTS <br />
          <span className="text-transparent [-webkit-text-stroke:1.5px_black]">ARCHIVES</span>
        </h1>
        <p className="text-black/60 font-black uppercase tracking-[0.4em] mt-6 text-xs">
          Registry // Operational Systems // V.02
        </p>
      </header>

      <div className="max-w-7xl mx-auto space-y-40">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center`}
          >
            {/* IMAGE PANEL (Alternates Left/Right) */}
            <div className={`md:col-span-7 relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="absolute -inset-2 border-2 border-black rotate-[-2deg] -z-10" />
              <div className="relative aspect-video border-[4px] border-black bg-gray-100 overflow-hidden group">
                <img
                  src={project.images[0]}
                  className="object-cover w-full h-full group-hover:scale-101 transition-transform duration-700"
                  alt={project.name}
                />
              </div>
            </div>

            {/* TEXT PANEL */}
            <div className={`md:col-span-5 space-y-6 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <div className="space-y-2">
                <h2 className="font-bebas text-6xl leading-none tracking-tighter uppercase">
                  {project.name}
                </h2>
                <p className="text-xs font-black uppercase tracking-widest text-black/40">
                  Classification: {project.category}
                </p>
              </div>

              <p className="text-lg font-medium leading-tight border-l-4 border-black pl-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="bg-black text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-black/10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  Focus // <span className="text-black italic">{project.focus}</span>
                </p>
                
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 font-bebas text-2xl hover:italic hover:pl-4 transition-all group"
                >
                  SOURCE_CODE <span className="group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto mt-60 mb-20">
        <div className="bg-black text-white p-12 md:p-20 relative overflow-hidden">
          {/* Halftone BG */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: `radial-gradient(#fff 1.5px, transparent 0)`, backgroundSize: '10px 10px' }} />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-bebas text-6xl md:text-8xl leading-none italic mb-8">
              UNLEASH THE <br /> ARCHITECTURE.
            </h2>
            <p className="text-white/70 font-bold uppercase tracking-widest mb-10">
              Open for collaboration on high-stakes systems.
            </p>
            <a href="/contact" className="inline-block border-2 border-white px-10 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Initiate Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}