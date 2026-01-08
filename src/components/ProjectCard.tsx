import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  desc: string;
  tech: string[];
};

const ProjectCard = ({ title, desc, tech }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full"
    >
      <div
        className="
          h-full rounded-2xl
          bg-surface
          border border-border
          p-6
          flex flex-col
          justify-between
          transition
        "
      >
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-foreground">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-foreground-muted mb-4">
            {desc}
          </p>
        </div>

        {/* Tech tags */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  text-xs font-medium
                  px-2.5 py-1
                  rounded-full
                  bg-surface-soft
                  text-foreground-muted
                  border border-border
                "
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.a
          href="/projects"
          whileTap={{ scale: 0.97 }}
          className="
            mt-auto inline-flex items-center justify-center
            rounded-xl
            px-4 py-2
            text-sm font-medium
            bg-background
            border border-border
            text-foreground
            hover:bg-surface
            transition
          "
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
