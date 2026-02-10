"use client"

import { motion } from "framer-motion"

export default function MangaHero() {
  return (
    <section className="relative min-h-[87vh] flex flex-col justify-start md:justify-center overflow-hidden bg-white text-black font-inter border-[7px] border-black m-2 md:m-4">
      
      {/* HALFTONE TEXTURE */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 0)`, backgroundSize: '6px 6px' }} />

      <div className="relative z-20 w-full px-8 md:px-24 pt-12 md:pt-0">
        
        {/* TOP TEXT CONTENT - Pushed up to make room for bottom image */}
        <div className="max-w-4xl space-y-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-8xl md:text-[12rem] font-bebas leading-[0.8] tracking-tighter italic">
              HI, I&apos;M <br />
              <span className="relative">
                AKASH
                {/* Visual "Slash" behind the name */}
                <span className="absolute -inset-x-4 top-1/2 h-4 bg-black/5 -rotate-2 -z-10" />
              </span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row md:items-center gap-4"
          >
            <div className="bg-black text-white px-6 py-2 text-xl font-bold uppercase tracking-tighter rotate-[-1deg]">
              Founder @ Opsora
            </div>
            <p className="text-lg font-medium text-black/70 tracking-tight max-w-xs leading-tight">
              Automation Consultancy Studio <br />
              <span className="text-xs font-black tracking-[0.2em] uppercase">Based in Kolkata, IN</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* THE ANCHOR IMAGE - Positioned at the bottom taking up the "other half" */}
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 lg:w-1/2 z-10 pointer-events-none">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-end justify-end"
        >
          {/* Ink Splash following the character */}
          <img
            src="/images/splash.png"
            className="absolute right-41 w-[150%] max-w-none opacity-30 scale-x-[-1] translate-x-1/4"
            alt=""
          />
          
          {/* Main Portrait */}
          <img
            src="/images/manga-pfp.png"
            alt="Akash manga portrait"
            className="relative z-20 w-full object-bottom top-8 select-none"
          />
        </motion.div>
      </div>

      {/* SCROLL INDICATOR - Vertical Text style */}
      <div className="absolute bottom-10 left-10 z-30 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="[writing-mode:vertical-lr] font-black text-[10px] tracking-[0.5em] uppercase opacity-40">
            Keep Scrolling
          </span>
          <div className="w-[2px] h-20 bg-gradient-to-b from-black to-transparent" />
        </div>
      </div>

    </section>
  )
}