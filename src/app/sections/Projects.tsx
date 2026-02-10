import ProjectCard from "@/components/ProjectCard";
import {motion} from "framer-motion";

export default function Project() {
    return(
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

    )
}