"use client";

import { ParticlesBackground } from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";
import TechMarquee from "@/components/TechMarquee";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const MotionLink = motion(Link);

  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-foreground">
      {/* background */}
      <div className="fixed inset-0 -z-10">
        <ParticlesBackground />
      </div>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight">
          I Design Systems That
          <br />
          <span className="text-foreground-muted">
            Real-World Decisions Depend On
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-foreground-muted leading-relaxed">
          Designing end-to-end systems - from data and models
          to APIs, interfaces, and real-world decisions.
        </p>

        <div className="mt-10 flex gap-4">
          <MotionLink
            href="/projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-2xl bg-accent text-foreground font-medium border border-border transition"
          >
            View Work
          </MotionLink>

          <MotionLink
            href="/about"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-2xl border border-border text-foreground-muted transition"
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
          I focus on building systems that reduce human effort —
          from legal AI with citation-grounded retrieval
          to market intelligence and trading research.
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
