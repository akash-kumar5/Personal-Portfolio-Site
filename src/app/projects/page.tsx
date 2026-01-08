"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Lexx - Legal AI",
    description:
      "Citation-grounded legal assistant for Indian law using retrieval-augmented generation. Focused on correctness, traceability, and domain constraints.",
    focus: "Retrieval correctness under legal constraints",
    tech: ["Next.js", "FastAPI", "RAG", "LLMs"],
    link: "https://github.com/akash-kumar5/Lexx-LegalAI",
    images: ["/images/lexxui.jpg"],
  },
  {
    title: "Dazai - Trading Research System",
    description:
      "Market-regime aware trading research system with backtesting, analytics, and risk-aware experimentation across crypto and equities.",
    focus: "Decision-making under noisy market regimes",
    tech: ["Python", "Pandas", "Backtesting"],
    link: "https://github.com/akash-kumar5/Dazai---Quant-Trading",
    images: ["/images/dazaiui.png"],
  },
  {
  title: "Crypto Market Regime Classifier",
  description:
    "Live market intelligence system that classifies crypto market regimes (trend, range, squeeze) using multi-timeframe data and probabilistic models.",
  link: "https://github.com/akash-kumar5/CryptoMarket_Regime_Classifier",
  images: ["/images/regime-ui.png"], // optional, can reuse chart screenshot
  focus: "Real-time regime detection under noisy market conditions",
  tech: ["Python", "LSTM", "HMM", "Time-series", "Live Pipeline"],
},
  {
    title: "Zenin - Personal Finance",
    description:
      "Mobile-first finance product focused on understanding spending behavior, savings patterns, and long-term financial habits.",
    focus: "Behavioral signals from financial data",
    tech: ["React Native", "Firebase"],
    link: "https://github.com/akash-kumar5/zenin",
    images: [
      "/images/zenin-login.jpg",
      "/images/zenin-dashboard.jpg",
      "/images/zenin-insights.jpg",
    ],
  },
  {
    title: "RentKr - Rental Platform",
    description:
      "MERN-based marketplace enabling peer-to-peer rentals with scalable media storage and simple discovery.",
    focus: "End-to-end product delivery",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/akash-kumar5/RentKr",
    images: ["/images/rentkr-front.png"],
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl"
      >
        {/* Header */}
        <header className="mb-20 text-center">
          <h1 className="text-4xl font-semibold mb-4">Projects</h1>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            A selection of systems I’ve built - focused on decision-making,
            correctness, and real-world constraints.
          </p>
        </header>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              {/* Text */}
              <div>
                <h2
                  className={`font-semibold mb-3 ${
                    index === 0 ? "text-3xl" : "text-2xl"
                  }`}
                >
                  {project.title}
                </h2>

                <p className="text-foreground-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-surface border border-border text-foreground-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-foreground-muted mb-6">
                  <span className="font-medium text-foreground">
                    System focus:
                  </span>{" "}
                  {project.focus}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium underline underline-offset-4 hover:text-foreground transition"
                >
                  View on GitHub →
                </a>
              </div>

              {/* Image */}
              <div className="rounded-2xl border border-border bg-surface p-3">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                  {project.images.length > 1 ? (
                    <div className="grid grid-cols-3 gap-2 h-full">
                      {project.images.map((img) => (
                        <img
                          key={img}
                          src={img}
                          className="object-cover w-full h-full rounded-lg"
                          alt=""
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={project.images[0]}
                      className="object-cover w-full h-full"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
