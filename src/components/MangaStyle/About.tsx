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
    description: "Building clear, usable interfaces that expose complex systems without hiding important details.",
    skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "APIs & Systems",
    description: "Designing backend systems that are predictable, debuggable, and easy to extend.",
    skills: ["FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "AI & Decision Logic",
    description: "Working with data and models where correctness, interpretability, and constraints matter.",
    skills: ["Python", "Pandas", "PyTorch", "Scikit-learn", "RAG"],
  },
  {
    title: "Infra & Delivery",
    description: "Shipping end-to-end with reproducibility and long-term maintenance in mind.",
    skills: ["AWS", "Docker", "Git", "Firebase", "GitHub Actions"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 font-inter selection:bg-black selection:text-white">
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 0)`, backgroundSize: '10px 10px' }} />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* HEADER PANEL - The "Classification" Card */}
        <header className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-[6px] border-black p-8 bg-white shadow-[12px_12px_0px_black]">
          
          {/* PROFILE IMAGE - Frame like a JJK volume portrait */}
          <div className="md:col-span-4 relative group">
            <div className="absolute -inset-2 border-2 border-black rotate-[-3deg] group-hover:rotate-0 transition-transform" />
            <div className="relative overflow-hidden border-[4px] border-black bg-gray-100">
              <img
                src="/images/me.png"
                alt="Akash Kumar"
                className="w-full aspect-square object-cover grayscale brightness-90 contrast-125 hover:scale-110 transition-transform duration-700"
              />
              {/* Ink Bleed Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
            {/* Grade Stamp */}
            <div className="absolute -bottom-4 -right-4 bg-black text-white px-3 py-1 font-bebas text-xl rotate-[12deg]">
              SPECIAL GRADE
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="md:col-span-8 space-y-6">
            <div className="inline-block bg-black text-white px-4 py-1 text-xs font-black tracking-[0.4em] uppercase">
              STATUS_REPORT // CLASSIFIED
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bebas italic leading-none tracking-tighter">
              THE <span className="text-transparent [-webkit-text-stroke:1px_black]">SYSTEM</span> SORCERER
            </h1>

            <div className="space-y-4 border-l-[4px] border-black pl-6">
              <p className="text-xl font-bold leading-tight uppercase tracking-tighter">
                Reducing human effort through automation and decision-grounded intelligence.
              </p>
              <p className="text-lg text-black/70 leading-relaxed max-w-2xl font-medium">
                I am most interested in problems where decisions matter, data is imperfect, and systems must explain themselves.
              </p>
            </div>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT - Philosophy (Binding Vows) */}
          <aside className="lg:col-span-5 space-y-12">
            <div className="relative border-2 border-black p-6 bg-gray-50/50">
              <h2 className="font-bebas text-4xl mb-4 italic tracking-tight">HOW I THINK</h2>
              <p className="text-black/80 font-medium leading-relaxed italic">
                &quot;Correctness before cleverness. Constraints before scale. Fail loudly or don&apos;t fail at all.&quot;
              </p>
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-black skew-x-[45deg] translate-x-4 -translate-y-4" />
            </div>

            <div className="space-y-6">
               <h2 className="font-bebas text-3xl tracking-widest text-black flex items-center gap-4">
                 <div className="h-1 flex-grow bg-black" /> CURRENT_FOCUS
               </h2>
               <ul className="space-y-4">
                  {["Legal AI with citation-backed reasoning", "Market regime detection & research", "End-to-end product architectures"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 font-black uppercase text-xs tracking-widest">
                      <span className="text-red-600">[0{i+1}]</span> {item}
                    </li>
                  ))}
               </ul>
            </div>

            <div className="pt-8 border-t-4 border-black">
              <h2 className="font-bebas text-3xl mb-2">BACKGROUND</h2>
              <p className="text-black/70 font-medium uppercase text-xs leading-loose">
                MCA student (2024–26) @ Techno Main Salt Lake. <br />
                Iterating from void to product.
              </p>
            </div>
          </aside>

          {/* RIGHT - Techniques (Skills) */}
          <section className="lg:col-span-7 space-y-16">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="group">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-bebas text-5xl tracking-tighter group-hover:italic transition-all">
                    {group.title.split(" ")[0]} <span className="text-transparent [-webkit-text-stroke:1px_black]">{group.title.split(" ").slice(1).join(" ")}</span>
                  </h3>
                </div>

                <p className="text-black/60 font-medium mb-6 max-w-xl border-l-2 border-black/20 pl-4">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                      className="px-4 py-1.5 border-2 border-black font-black uppercase text-[10px] tracking-widest cursor-crosshair transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* FOOTER CTA - The Final Domain Expansion */}
        <footer className="mt-32 border-t-[8px] border-black pt-12 pb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-xl">
              <p className="text-2xl font-black uppercase tracking-tighter leading-none italic">
                If you&apos;re working on a problem where correctness matters, I&apos;m open to a conversation.
              </p>
            </div>
            
            <motion.a
              href="/contact"
              className="relative px-12 py-6 bg-black text-white font-bebas text-4xl italic tracking-widest group overflow-hidden"
            >
              <span className="relative z-10">GET_IN_TOUCH →</span>
              {/* Red Glow on Hover */}
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
            </motion.a>
          </div>
        </footer>
      </motion.section>
    </main>
  );
}