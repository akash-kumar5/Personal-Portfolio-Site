"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Product & Interfaces",
    description:
      "Building clear, usable interfaces that expose complex systems without hiding important details.",
    skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "APIs & Systems",
    description:
      "Designing backend systems that are predictable, debuggable, and easy to extend.",
    skills: ["FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "AI & Decision Logic",
    description:
      "Working with data and models where correctness, interpretability, and constraints matter.",
    skills: ["Python", "Pandas", "PyTorch", "Scikit-learn", "RAG"],
  },
  {
    title: "Infra & Delivery",
    description:
      "Shipping end-to-end with reproducibility and long-term maintenance in mind.",
    skills: ["AWS", "Docker", "Git", "Firebase", "GitHub Actions"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl"
      >
        {/* Header */}
        <header className="mb-10 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-6">About</h1>

          <p className="text-lg text-foreground-muted leading-relaxed">
            I focus on building systems that reduce human effort - from legal AI
            with citation-grounded retrieval to market intelligence and trading
            research.
          </p>

          <p className="mt-4 text-lg text-foreground-muted leading-relaxed">
            I&apos;m most interested in problems where decisions matter, data is
            imperfect, and systems must explain themselves - not just output an
            answer.
          </p>
        </header>
        <hr className="my-9 border border-border max-w-4xl" />

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT - philosophy & context */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-8">
            <div>
              <h2 className="text-xl font-medium mb-3">How I think</h2>
              <p className="text-foreground-muted leading-relaxed">
                I care about correctness before cleverness, constraints before
                scale, and systems that survive real-world usage. I prefer
                simple architectures that fail loudly over complex ones that
                fail silently.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-3">Currently focused on</h2>
              <ul className="space-y-2 text-foreground-muted">
                <li>• Legal AI with citation-backed reasoning</li>
                <li>• Market regime detection and trading research</li>
                <li>• End-to-end product systems, not isolated models</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-3">Background</h2>
              <p className="text-foreground-muted leading-relaxed">
                MCA student (2024–26) at Techno Main Salt Lake. Comfortable
                working across frontend, backend, and ML layers, and iterating
                quickly from idea to shipped product.
              </p>
            </div>
          </aside>
          {/* Vertical divider (desktop only) */}
          <motion.div
  initial={{ opacity: 0, scaleY: 0 }}
  animate={{ opacity: 1, scaleY: 1 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  className="w-px bg-border h-full max-h-[480px]"
/>


          {/* RIGHT - skills reframed */}
          <section className="lg:col-span-6 space-y-12">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-medium mb-2">{group.title}</h3>

                <p className="text-foreground-muted mb-4 max-w-2xl">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
  key={skill}
  whileHover={{
    y: -2,
    borderColor: "rgba(0,0,0,0.15)",
    color: "var(--foreground)",
  }}
  transition={{ duration: 0.15, ease: "easeOut" }}
  className="px-3 py-1 rounded-full text-sm bg-surface border border-border text-foreground-muted cursor-default"
>
  {skill}
</motion.span>

                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        <hr className="my-9 border-t border-border max-w-3xl" />

        {/* Quiet CTA */}
        <div className="mt-12 max-w-3xl">
          <p className="text-foreground-muted leading-relaxed">
            If you&apos;re working on a problem where decisions, constraints, and
            correctness matter, I&apos;m open to thoughtful conversations.
          </p>

          <motion.a
  href="/contact"
  initial="rest"
  whileHover="hover"
  animate="rest"
  className="inline-flex items-center gap-2 mt-4 text-lg font-medium underline underline-offset-5 hover:text-foreground transition"
>
  <span>Get in touch</span>
  <motion.span
    variants={{
      rest: { x: 0 },
      hover: { x: 6 },
    }}
    transition={{ duration: 0.2, ease: "easeOut" }}
  >
    →
  </motion.span>
</motion.a>

        </div>
      </motion.section>
    </main>
  );
}
