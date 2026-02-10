"use client";

import HeroTyping from "@/components/HeroTyping";
import {motion} from "framer-motion";
import Link from "next/link";

export default function Hero() {
    const MotionLink = motion(Link);
    return(
        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-[91vh] w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden hero-gradient"
      >
        {/* background gradient */}
       

        {/* Main headline */}
        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-tight text-foreground">
          I Design Systems That
        </h1>

        {/* Typing line */}
        <div className="mt-4 min-h-[2.5rem] lg:min-h-[3.5rem] flex items-center justify-center">
          <HeroTyping />
        </div>

        {/* Sub headline */}
        <p className="mt-8 max-w-2xl text-base lg:text-xl text-foreground-muted/80 leading-relaxed font-light">
          A systems-first engineer building interpretable solutions for finance,
          law, and automation - from data and models to APIs and production
          interfaces.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5">
          <MotionLink
            href="/projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full bg-foreground text-background font-medium transition-all hover:shadow-lg hover:shadow-foreground/5"
          >
            View work →
          </MotionLink>

          <MotionLink
            href="/about"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full border text-foreground-muted hover:bg-surface-soft/50 transition-all"
          >
            About Me
          </MotionLink>
        </div>
      </motion.section>

    )
}