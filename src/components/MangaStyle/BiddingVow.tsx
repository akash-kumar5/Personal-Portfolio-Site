"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Search, LucideIcon, FileText } from "lucide-react";
import InitiateButton from "../InitiateBtn";

interface Commitment {
  title: string;
  standard: string;
  outcome: string;
  icon: LucideIcon;
}

const COMMITMENTS: Commitment[] = [
  {
    title: "AUDITABLE ARCHITECTURE",
    standard: "We prioritize transparent logic over 'black-box' implementations that lack audit trails.",
    outcome: "You receive citation-grounded systems where every decision is traceable and verifiable.",
    icon: Search,
  },
  {
    title: "AUTONOMOUS OPERATIONS",
    standard: "We decline projects that rely on manual intervention for core processing tasks.",
    outcome: "End-to-end Shelly-grade automation designed to operate 24/7 without human oversight.",
    icon: Zap,
  },
  {
    title: "SYSTEM RESILIENCE",
    standard: "We forgo rapid, fragile deployments in favor of rigorous, stress-tested correctness.",
    outcome: "Architectures that maintain data integrity under extreme market noise and complex constraints.",
    icon: ShieldCheck,
  },
];

export default function ProfessionalBindingVow() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-25 bg-stone-950 font-inter overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="mb-8 border-b border-stone-800 pb-6 relative">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
           <FileText size={14} className="text-stone-500" />
           <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] text-stone-500 uppercase">
             Opsora // Technical_Standards // 2026
           </span>
        </div>
        {/* Adjusted Font Scaling for Mobile: text-6xl -> 8xl */}
        <h2 className="font-bebas text-6xl sm:text-7xl md:text-[6rem] text-stone-100 italic uppercase leading-[0.8] tracking-tighter">
          CORE <br />
          <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f4]">COMMITMENTS</span>
        </h2>
      </div>

      {/* COMMITMENT GRID: Collapses to 1 column on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-stone-800 border-2 border-stone-800">
        {COMMITMENTS.map((item, i) => (
          <motion.div
            key={item.title}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
            className="bg-stone-950 p-6 md:p-8 flex flex-col justify-between group transition-all duration-500 min-h-[320px] md:min-h-0"
          >
            <div className="mb-8 md:mb-12">
              <div className="text-stone-600 mb-6 md:mb-8 group-hover:text-stone-100 transition-all duration-500">
                <item.icon size={24} className="md:w-7 md:h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-bebas text-3xl md:text-4xl text-stone-100 mb-6 md:mb-10 tracking-tight italic">
                {item.title}
              </h3>

              <div className="space-y-6 md:space-y-7">
                {/* Standard */}
                <div className="relative pl-5 md:pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-stone-800" />
                  <p className="text-[8px] md:text-[9px] font-black text-stone-500 uppercase tracking-[0.2em] mb-2">
                    OPERATING_STANDARD
                  </p>
                  <p className="text-stone-400 font-medium text-xs md:text-sm leading-relaxed">
                    {item.standard}
                  </p>
                </div>

                {/* Outcome */}
                <div className="relative pl-5 md:pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-stone-100/20 group-hover:bg-stone-100 transition-colors" />
                  <p className="text-[8px] md:text-[9px] font-black text-stone-300 uppercase tracking-[0.2em] mb-2">
                    DELIVERED_OUTCOME
                  </p>
                  <p className="text-stone-100 font-bold text-lg md:text-2xl leading-tight uppercase tracking-tighter italic">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end mt-4">
              <div className="text-[9px] md:text-[10px] font-black text-stone-800 uppercase tracking-[0.3em]">
                Ref_Code // 0{i + 1}
              </div>
              <div className="w-8 h-[1px] bg-stone-800 group-hover:w-16 group-hover:bg-stone-100 transition-all hidden sm:block" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CALL TO ACTION: Stacked on mobile, side-by-side on desktop */}
      <div className="mt-8 flex flex-col md:grid md:grid-cols-2 items-start md:items-center gap-10 md:gap-16 border-t border-stone-800 pt-8">
        <div>
           <p className="text-stone-500 text-[10px] md:text-xs font-bold uppercase leading-relaxed tracking-widest max-w-sm">
             These standards ensure that every system built under the Opsora banner remains 
             resilient, auditable, and truly autonomous.
           </p>
        </div>
        
        
        <InitiateButton />
      </div>
    </section>
  );
}