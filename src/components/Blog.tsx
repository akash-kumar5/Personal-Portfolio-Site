"use client";

import { motion } from "framer-motion";

const TECHNICAL_LOGS = [
  {
    title: "THE ERA OF VERTICAL AI 2026",
    id: "v-ai-2026",
    category: "RESEARCH",
    excerpt: "Analyzing the shift from general-purpose LLMs to domain-constrained vertical intelligence.",
    date: "NOV 06, 2025"
  },
  {
    title: "MARKET REGIME CLASSIFICATION VIA HMM & LSTM",
    id: "market-regime",
    category: "QUANT",
    excerpt: "A deep dive into the architecture used for live crypto market state detection.",
    date: "OCT 16, 2025"
  },
  {
    title: "BUILDING IN PUBLIC: THE 10X GROWTH LEVER",
    id: "growth-lever",
    category: "PHILOSOPHY",
    excerpt: "Why transparent engineering is the fastest way to build Opsora's authority.",
    date: "OCT 05, 2025"
  }
];

export default function TechnicalLogs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-40 bg-stone-950">
      <div className="mb-20 border-l-[12px] border-stone-100 pl-8">
        <h2 className="font-bebas text-7xl md:text-9xl text-stone-100 italic uppercase leading-[0.8]">
          TECHNICAL <br />
          <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f4]">LOGS</span>
        </h2>
        <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-stone-500 italic">
          Knowledge_Base // Registry_V.01
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800 border-2 border-stone-800">
        {TECHNICAL_LOGS.map((log) => (
          <motion.a
            key={log.id}
            href={`/logs/${log.id}`}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            className="p-10 bg-stone-950 flex flex-col justify-between group h-[450px] transition-all"
          >
            <div>
              <div className="flex justify-between items-center mb-10">
                <span className="text-[10px] font-black text-stone-600 uppercase tracking-widest">{log.category}</span>
                <span className="text-[10px] font-black text-stone-100 uppercase tracking-widest italic">{log.date}</span>
              </div>
              <h3 className="font-bebas text-4xl text-stone-100 leading-tight mb-6 group-hover:text-red-900 transition-colors">
                {log.title}
              </h3>
              <p className="text-stone-500 text-sm font-medium leading-relaxed uppercase">
                {log.excerpt}
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-[10px] font-black text-stone-100 uppercase tracking-[0.4em]">
              ACCESS_TRANSMISSION <div className="h-[1px] w-8 bg-stone-100 group-hover:w-16 transition-all" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}