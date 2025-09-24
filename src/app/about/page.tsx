"use client";
import { useRef } from "react";
import { motion, Variants } from "framer-motion";

// Define TypeScript types
type Skill = { name: string; level?: string; tags?: string[] };
type SkillGroup = { title: string; skills: Skill[] };

// --- Animation Variants ---

// Parent container variant for staggering children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Child item variant for fade-in-up effect
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

// Skill pill animation variants for a pop-in effect
const skillPillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// --- Data ---
const SKILL_GROUPS: SkillGroup[] = [
    {
    title: "Frontend & Mobile",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    title: "AI / Data / Quant",
    skills: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "Streamlit" },
    ],
  },
  {
    title: "Infra & Tools",
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Git" },
      { name: "Firebase" },
      { name: "GitHub Actions" },
    ],
  },
];

// --- Main Page Component ---
export default function AboutPage() {
  const leftRef = useRef<HTMLElement | null>(null);

  return (
    <main className="min-h-screen bg-black text-gray-100">
      <motion.section
        className="max-w-7xl mx-auto py-12 px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Page title */}
        <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mt-13 mb-6">
          About — Akash
        </motion.h1>

        {/* Layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: intro column (fixed on desktop) */}
          <motion.aside
            ref={leftRef}
            variants={itemVariants}
            className="lg:col-span-5 sticky top-24 self-start h-auto"
            aria-labelledby="about-intro-title"
          >
            <div className="mb-6">
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Full-stack dev + AI enthusiast focused on fintech products — from personal finance
                apps to trading systems. I design, build, and ship end-to-end products: frontend,
                backend, and ML layers.
              </p>
            </div>

            {/* Compact info blocks */}
            <motion.div
              className="grid grid-cols-1 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <InfoCard label="Currently" value="Building Dazai (trading AI), Zenin (finance app)" />
              <InfoCard label="Education" value="MCA (2024–26) — Techno Main Salt Lake" />
              <InfoCard
                label="Collaboration"
                value="Worked in cross-functional teams; comfortable with Git-based workflows and rapid prototyping"
              />
              <InfoCard
                label="Hobbies"
                value="Reading markets & AI papers, light workouts, spiritual travel"
              />
            </motion.div>
          </motion.aside>

          {/* CENTER: animated divider */}
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full flex items-center justify-center"
              style={{ transformOrigin: "center" }}
            >
              <div className="w-px bg-gray-800 h-72 rounded" />
            </motion.div>
          </div>

          {/* RIGHT: skill groups area */}
          <motion.div variants={itemVariants} className="lg:col-span-6">
            {/* Desktop: Stacked skill groups */}
            <div className="hidden lg:block">
              {SKILL_GROUPS.map((g) => (
                <SkillGroupDisplay key={g.title} group={g} />
              ))}
            </div>

            {/* Mobile: horizontal swipeable cards */}
            <div className="lg:hidden">
              <div
                className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4"
                style={{ scrollSnapType: "x mandatory" } as React.CSSProperties}
              >
                {SKILL_GROUPS.map((g, idx) => (
                  <motion.div
                    key={g.title}
                    className="min-w-[80%] sm:min-w-[70%] bg-gray-900 rounded-2xl p-6 snap-start"
                  >
                    <SkillCard group={g} index={idx} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA at the bottom */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-2">Want to build something together?</h3>
            <p className="text-gray-300 mb-6">
              I take on fintech & AI product work — contract, collaboration, or full-time. If you
              have an idea or a problem that needs an engineer who ships end-to-end, let&apos;s talk.
            </p>
            <div className="flex items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 transition-colors rounded font-semibold text-black"
              >
                Connect / Collaborate
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

// --- Subcomponents ---

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03, backgroundColor: "rgba(31, 41, 55, 0.6)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-900/40 rounded-lg p-4 border border-gray-800"
    >
      <div className="text-sm text-gray-400">{label}</div>
      <div className="mt-2 text-gray-100">{value}</div>
    </motion.div>
  );
}

// NEW: Compact component for desktop skill groups
function SkillGroupDisplay({ group }: { group: SkillGroup }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-10" // Spacing between groups
    >
      <motion.h4
        variants={itemVariants}
        className="text-xl font-semibold mb-4 text-gray-300"
      >
        {group.title}
      </motion.h4>
      <motion.div
        variants={containerVariants}
        className="flex flex-wrap gap-3"
      >
        {group.skills.map((s) => (
          <motion.div
            key={s.name}
            variants={skillPillVariants}
            whileHover={{ scale: 1.08, y: -3, color: "#fff" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-700 text-gray-300 cursor-pointer"
          >
            {s.name}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}


// UNCHANGED: Kept for the mobile swipe view
function SkillCard({ group }: { group: SkillGroup; index: number }) {
  return (
    <motion.div
      className="h-full flex flex-col justify-between"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <motion.header variants={itemVariants}>
        <h4 className="text-2xl font-semibold mb-2">{group.title}</h4>
        <p className="text-gray-400 mb-4">
          Core tools and technologies I use in {group.title.toLowerCase()}.
        </p>
      </motion.header>

      <div className="flex-1 flex items-center justify-center my-6">
        <motion.div
          className="flex flex-wrap gap-3 max-w-full justify-center"
          variants={containerVariants}
        >
          {group.skills.map((s) => (
            <motion.div
              key={s.name}
              variants={skillPillVariants}
              whileHover={{ scale: 1.08, y: -3, color: "#fff" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-700 text-gray-300"
            >
              {s.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}