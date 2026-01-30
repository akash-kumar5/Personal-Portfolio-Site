"use client";

import HeroTyping from "@/components/HeroTyping";
import ProjectCard from "@/components/ProjectCard";
import TechMarquee from "@/components/TechMarquee";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const MotionLink = motion(Link);

  return (
    <main className="min-h-screen flex flex-col items-center text-foreground">
      {/* HERO */}
      {/* HERO */}
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

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center px-6 mt-24"
      >
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="text-lg text-foreground-muted leading-relaxed">
          I focus on building systems that reduce human effort - from legal AI
          with citation-grounded retrieval to market intelligence and trading
          research.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl w-full px-6 mt-28"
      >
        <h2 className="text-3xl font-semibold text-center mb-10">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Dazai"
            id="dazai"
            desc="Market-regime aware trading research system with backtesting,
            analytics, and risk-aware experimentation."
            tech={["Python", "ML", "Backtesting"]}
          />

          <ProjectCard
            title="Lexx"
            id="lexx"
            desc="Legal AI using RAG to generate citation-grounded answers
            over Indian law documents."
            tech={["Next.js", "FastAPI", "RAG", "LLMs"]}
          />

          <ProjectCard
            title="Zenin"
            id="zenin"
            desc="Personal finance product focused on understanding
            spending behavior and savings patterns."
            tech={["React Native", "Firebase"]}
          />
        </div>
      </motion.section>

      {/* TECH */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full px-6 mt-28 mb-24 text-center"
      >
        <h2 className="text-3xl font-semibold mb-8">Tech</h2>
        <TechMarquee />
      </motion.section>
    </main>
  );
}
