import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

// Ahora skill es un objeto { name: string; logo: string }
function SkillTag({ skill, index }: { skill: { name: string; logo: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm flex items-center gap-2"
    >
      <img src={skill.logo} alt={skill.name} className="w-5 h-5" />
      {skill.name}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🛠️ Habilidades
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div key={category} variants={skillCategoryVariants}>
              <GlassCard className="p-4">
                <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center gap-2">
                  {/* Puedes personalizar los íconos según categoría */}
                  <span className="text-xl">
                    {category === "lenguajesDeProgramacion" && "💻"}
                    {category === "desarrolloFrontend" && "🎨"}
                    {category === "desarrolloBackend" && "⚙️"}
                    {category === "baseDeDatos" && "🗄️"}
                    {category === "nubeYDevops" && "☁️"}
                    {category === "herramientasYServicios" && "🧰"}
                  </span>
                  {category
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {skillList.map((skill: any, index: number) => (
                    <SkillTag key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
