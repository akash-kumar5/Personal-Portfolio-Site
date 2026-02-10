"use client"

import { motion } from "framer-motion"

export default function MangaAbout() {
  return (
    // Added relative z-10 to the section to ensure it stays above background splatters
    <section className="relative z-10 max-w-5xl mx-auto px-6 mt-32 mb-40 font-inter bg-white">
      
      {/* 1. THE "CURSED" GLITCH OVERLAY */}
      {/* Reduced opacity and ensured it sits behind content with z-0 */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.03, 0] }}
        transition={{ duration: 0.2, repeat: 1, repeatDelay: 3 }}
        className="absolute inset-0 z-0 bg-[url('/images/splash.png')] bg-fixed pointer-events-none grayscale contrast-200"
      />

      <div className="relative z-10 grid md:grid-cols-12 gap-12 items-start">
        
        {/* PANEL LEFT */}
        <div className="md:col-span-4 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-bebas text-8xl text-black leading-none"
          >
            THE <br /> 
            {/* Switched from text-transparent to text-black with a fallback */}
            <span className="text-black md:text-transparent md:[-webkit-text-stroke:1.5px_black] hover:text-black transition-colors duration-500 cursor-default italic">
              METHOD
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="h-[12px] bg-black skew-x-[-20deg]"
          />
        </div>

        {/* PANEL RIGHT */}
        <div className="md:col-span-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Added text-black to ensure base visibility */}
            <div className="text-2xl md:text-5xl font-black leading-[1.1] tracking-tighter text-black uppercase">
              <p>I build architectures that</p>
              <span className="relative inline-block mt-2 group">
                {/* Peer-hover was tricky, using a group-hover on the parent instead */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  KILL FRICTION.
                </span>
                <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
              </span>
            </div>

            <div className="flex flex-col gap-6 text-black/80">
              <p className="text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Specializing in systems that reduce human effort—from 
                <span className="text-black font-black mx-1 border-b-[3px] border-black">
                  Legal AI
                </span> 
                with grounded retrieval to high-frequency 
                <span className="text-black font-black mx-1 border-b-[3px] border-black">
                  Market Research
                </span>.
              </p>

              <div className="flex items-center gap-4 pt-6 border-t-[3px] border-black">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                <span className="text-[12px] font-black uppercase tracking-[0.4em] text-black">
                  Status: Operational // V.02
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}