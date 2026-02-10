"use client"

import { motion } from "framer-motion"
import { ExternalLink, Terminal } from "lucide-react"

const ProjectCard = ({ title, id, desc, tech, grade }: {title:string, id:string,desc:string, tech:string[], grade:string}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative border-[4px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
  >
    {/* PROJECT IMAGE PLACEHOLDER - Manga Panel Style */}
    <div className="relative w-full aspect-video bg-gray-100 border-b-[4px] border-black overflow-hidden mb-6">
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" 
           style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 0)', backgroundSize: '8px 8px' }} />
      <div className="flex items-center justify-center h-full text-black/20 font-bebas text-4xl italic group-hover:scale-110 transition-transform duration-500">
        VISUAL_RECORDS // {id}
      </div>
      {/* Cursed energy 'bleed' in corner */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-black skew-x-[45deg] translate-x-6 -translate-y-6" />
    </div>

    {/* HEADER */}
    <div className="flex justify-between items-start mb-4">
      <div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50 italic">
          Grade: {grade}
        </span>
        <h3 className="font-bebas text-4xl text-black leading-none uppercase tracking-tighter group-hover:italic transition-all">
          {title}
        </h3>
      </div>
      <ExternalLink size={20} className="text-black group-hover:rotate-12 transition-transform" />
    </div>

    {/* DESCRIPTION */}
    <p className="text-sm font-bold leading-tight text-black/80 mb-6 line-clamp-2 border-l-2 border-black pl-3">
      {desc}
    </p>

    {/* TECH STACK */}
    <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10">
      {tech.map((t) => (
        <span key={t} className="text-[9px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 skew-x-[-10deg]">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
)

export default function FeaturedProjects() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 mt-32 mb-40">
      
      {/* SECTION HEADER */}
      <div className="flex items-end gap-4 mb-16 overflow-hidden">
        <motion.h2 
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          className="font-bebas text-7xl md:text-9xl text-white/60 leading-none italic"
        >
          ACTIVE <br /> <span className="text-white/20 [-webkit-text-stroke:1px_black]">PROJECTS</span>
        </motion.h2>
        <div className="h-[2px] flex-grow bg-black mb-4 relative">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            className="absolute top-0 left-0 h-full bg-red-600/50" 
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="Dazai"
          id="dazai"
          grade="SPECIAL"
          desc="Market-regime aware trading research system with backtesting, analytics, and risk-aware experimentation."
          tech={["Python", "ML", "Backtesting"]}
        />

        <ProjectCard
          title="Lexx"
          id="lexx"
          grade="FIRST"
          desc="Legal AI using RAG to generate citation-grounded answers over Indian law documents."
          tech={["Next.js", "FastAPI", "RAG"]}
        />

        <ProjectCard
          title="Zenin"
          id="zenin"
          grade="SECOND"
          desc="Personal finance product focused on understanding spending behavior and savings patterns."
          tech={["React Native", "Firebase"]}
        />
      </div>

      {/* FOOTER DETAIL */}
      <div className="mt-12 flex justify-end">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.5em] text-black/30">
          <Terminal size={12} /> Access_System_Logs // V.02
        </div>
      </div>
    </section>
  )
}