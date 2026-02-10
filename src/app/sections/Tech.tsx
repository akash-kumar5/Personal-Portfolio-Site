import TechMarquee from "@/components/TechMarquee";
import {motion} from "framer-motion";

export default function Tech() {
    return(
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
    )
}