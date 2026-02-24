import React from "react";
import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    tools: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend",
    tools: ["Node.js", "Python", "Go", "GraphQL", "REST APIs", "Microservices"],
  },
  {
    category: "Cloud & DevOps",
    tools: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    category: "Data & AI",
    tools: ["OpenAI", "LangChain", "TensorFlow", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    category: "Mobile",
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
  },
];

const TechStack = () => {
  return (
    <div className="bg-white text-stone-950 py-20 md:py-36 px-6 md:px-32">
      <div className="text-[3rem] md:text-[7rem] font-light leading-none mb-16 md:mb-28">
        <h1>Our</h1>
        <h1
          id="design"
          className="text-[3.3rem] md:text-[7.5rem] leading-none tracking-wide"
        >
          tech stack
        </h1>
      </div>

      <div className="space-y-0">
        {techCategories.map((cat, index) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-t border-stone-300 py-8 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-0"
          >
            <div className="md:w-1/4 text-sm uppercase tracking-widest text-stone-500 font-medium">
              {cat.category}
            </div>
            <div className="md:w-3/4 flex flex-wrap gap-3">
              {cat.tools.map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ scale: 1.05, backgroundColor: "#1c1917", color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  className="px-5 py-2.5 rounded-full border border-stone-300 text-sm md:text-base cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
        <div className="border-t border-stone-300"></div>
      </div>
    </div>
  );
};

export default TechStack;
