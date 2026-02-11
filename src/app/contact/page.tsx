"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Copy, Check } from "lucide-react";

export default function ContactPage() {
  const email = "akash.kumar.devs@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-white px-6 py-24 flex justify-center text-black font-inter selection:bg-black selection:text-white">
      {/* HALFTONE TEXTURE */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 0)`, backgroundSize: '12px 12px' }} />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
      >
        {/* LEFT — The Visual Record */}
        <div className="hidden lg:block lg:col-span-5 relative group">
          <div className="absolute -inset-4 border-2 border-black rotate-[-2deg] group-hover:rotate-0 transition-transform" />
          <div className="relative aspect-[3/4] border-[6px] border-black bg-white overflow-hidden shadow-[15px_15px_0px_black]">
            <img
              src="/images/headshot1.png"
              alt="Akash Kumar"
              className="w-full h-full object-cover"
            />
            {/* Panel Label */}
            <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-bebas text-xl italic uppercase">
              Visual_Log // 01
            </div>
          </div>
        </div>

        {/* RIGHT — The Terminal */}
        <div className="lg:col-span-7 space-y-12">
          <header className="border-b-[8px] border-black pb-8">
             <div className="inline-block bg-black text-white px-3 py-1 text-[10px] font-black tracking-[0.4em] mb-4 uppercase italic">
              Initiate_Transmission
            </div>
            <h1 className="text-7xl md:text-9xl font-bebas leading-[0.8] tracking-tighter italic uppercase">
              CON<span className="text-transparent [-webkit-text-stroke:1.5px_black]">TACT</span>
            </h1>
          </header>

          <p className="text-2xl font-black leading-tight tracking-tight uppercase max-w-xl">
            Building systems where <span className="bg-black text-white px-2 italic">correctness</span> matters. Open for high-stakes conversations.
          </p>

          {/* Email Interaction */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-[0.3em] text-black/40">Direct_Channel</label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href={`mailto:${email}`}
                className="text-2xl md:text-4xl font-bebas hover:italic transition-all border-b-4 border-black pb-1 group"
              >
                {email} <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-6 py-2 border-2 border-black font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "COPIED" : "COPY_ADDRESS"}
              </button>
            </div>
          </div>

          {/* Social Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12">
            <a 
              href="https://linkedin.com/in/-akash-kumar" 
              target="_blank"
              className="group border-[3px] border-black p-6 hover:bg-black transition-colors"
            >
              <div className="flex items-center gap-4 mb-2">
                <Linkedin className="group-hover:text-white transition-colors" />
                <span className="font-bebas text-3xl group-hover:text-white transition-colors">LINKEDIN</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/50 group-hover:text-white/50">
                Professional_Network // CONNECT
              </p>
            </a>

            <a 
              href="https://github.com/akash-kumar5" 
              target="_blank"
              className="group border-[3px] border-black p-6 hover:bg-black transition-colors"
            >
              <div className="flex items-center gap-4 mb-2">
                <Github className="group-hover:text-white transition-colors" />
                <span className="font-bebas text-3xl group-hover:text-white transition-colors">GITHUB</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/50 group-hover:text-white/50">
                Code_Repository // ACCESS
              </p>
            </a>
          </div>

          {/* Editorial Detail */}
          <div className="pt-12 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-black/30 border-t border-black/10">
            <span>Kolkata // 22.57° N</span>
            <span>END_OF_TRANS</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}