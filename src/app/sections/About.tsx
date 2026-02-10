import {motion} from "framer-motion";
export default function About() {
    return(
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
    )
}