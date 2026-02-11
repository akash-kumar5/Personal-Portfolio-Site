"use client"

import { motion } from "framer-motion"

// Sample data - replace with your actual tech icons/names
const TECH_STACK = [
  "Python", "Next.js", "FastAPI", "TensorFlow", "React Native", 
  "PostgreSQL", "Tailwind", "Framer Motion", "LangChain", "OpenAI"
]

export default function TechSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative w-full overflow-hidden py-24 bg-white"
    >
      {/* 1. SECTION LABEL - Like an official document header */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-black text-white px-8 py-1 text-[10px] font-black tracking-[1em] uppercase italic rotate-[-1deg]">
          Registry: Active_Arsenal
        </div>
      </div>

      {/* 2. THE MARQUEE - The "Sealing Tape" Look */}
      <div className="relative flex flex-col gap-4 rotate-[-2deg] scale-105">
        
        {/* ROW 1: Forward Movement */}
        <div className="flex overflow-hidden border-y-[4px] border-black bg-white py-3 group">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 items-center pr-12"
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={i} className="font-bebas text-6xl md:text-8xl text-black hover:italic transition-all cursor-default flex items-center gap-8">
                {tech}
                <span className="w-4 h-4 bg-red-600 rotate-45" /> {/* The "Stamp" separator */}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Reverse Movement (Optional for extra chaos) */}
        <div className="flex overflow-hidden border-b-[4px] border-black bg-black py-2">
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex whitespace-nowrap gap-20 items-center pr-20"
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={i} className="font-bebas text-3xl text-white/30 uppercase tracking-[0.5em] italic">
                {tech} {"// SYSTEM_LOG // "}{tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3. DECORATIVE SKEW - JJK "Energy" Marks */}
      <div className="absolute bottom-0 right-10 flex gap-1 opacity-20">
         {[1,2,3,4,5,6].map(i => (
           <div key={i} className="w-[10px] h-32 bg-black skew-x-[-25deg]" />
         ))}
      </div>

    </motion.section>
  )
}