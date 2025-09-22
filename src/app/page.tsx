"use client";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";
import TechMarquee from "@/components/TechMarquee";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const MotionLink = motion(Link);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="fixed inset-0 -z-10 w-full h-full top-0 left-0">
        <ParticlesBackground />
      </div>
      {/* hero section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center w-full min-h-screen py-50 bg-gradient-to-r from-black/10 via-zinc-900 to-red-900/60"
      >
        <motion.h1
          className="text-5xl lg:text-6xl sm:text-5xl font-bold tracking-tight"
          animate={{
            y: [0, -9, 0],
            scale: [1, 1.05, 1],
            transition: {
              duration: 1.2,
              ease: "easeInOut",
            },
          }}
        >
          I Build Web & Mobile Apps <br />
          <span className="bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
            Evolving into AI
          </span>
        </motion.h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Full-stack developer (Python, Next.js, React Native). <br />
          Currently diving into LLMs and RAG to build smarter products.
        </p>

        <p className="mt-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
          Code. Learn. Ship. Repeat.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <MotionLink
            href="/projects"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gradient-to-r from-red-800 to-red-600 hover:from-red-900 hover:to-red-800 text-white font-bold text-xl rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <span className="absolute inset-0 rounded-2xl border-[2px] border-transparent pointer-events-none animate-borderMagic"></span>
          </MotionLink>
        </div>
      </motion.div>

      {/* about me section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-4xl mx-auto h-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">
          <span className=" bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">
          I&apos;m an MCA student passionate about full-stack development and
          AI. Currently building
          <strong> Zenin</strong>, <strong>Dazai</strong>,
          <strong> Rentkr</strong> & <strong>Lexx</strong> — blending Python,
          Next.js, and clean design with emerging AI tech like LLMs and RAG.
        </p>

        <MotionLink
          whileTap={{ scale: 0.9 }}
          href="/about"
          className="inline-block bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-sm rounded-xl px-5 py-2 transition"
        >
          More About Me
        </MotionLink>
      </motion.div>

      {/* projects preview section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-7xl mx-auto h-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-600 via-white/70  to-red-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <ProjectCard
            title="Zenin"
            desc="A personal finance tracker app, analyzing transactions and
                suggesting savings strategies."
            tech={["React Native", "Firebase"]}
          />
          {/* Project 2 */}
          <ProjectCard
            title="Dazai"
            desc="A quantitative trading algorithm for stocks and crypto using
                Python, focused on market analysis."
            tech={["Python", "Pandas", "Streamlit"]}
          />

          {/* Project 3 */}
          <ProjectCard
            title="RentKr"
            desc="A MERN stack website for renting items, targeted at bachelors
                and college students."
            tech={["React.js", "NodeJs", "MongoDB", "JavaScript"]}
          />

          {/* project 4 */}
          <ProjectCard
            title="Lexx"
            desc="AI legal chat focused on Indian laws. RAG-powered answers with
                real citations. Built with Next.js, FastAPI & OpenRouter."
            tech={["Next.js", "FastAPI", "Python", "RAG"]}
          />
        </div>
      </motion.div>

      {/* tech stack section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 py-10 mb-20 text-center max-w-4xl mx-auto w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <TechMarquee/>
      </motion.div>
    </main>
  );
}
