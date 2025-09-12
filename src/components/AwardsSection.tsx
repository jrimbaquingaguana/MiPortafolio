import React from "react";
import { learning } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function LearningSection() {
  return (
    <section
      id="aprendiendo"
      className="py-12 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            📚 Aprendiendo
          </h2>
        </MotionWrapper>

        <div className="flex flex-col gap-6">
          {learning.map((item, index) => (
            <MotionWrapper key={item.title + index} delay={index * 0.1}>
              <GlassCard className="p-6 flex flex-col md:flex-row items-start gap-4 hover:border-blue-500/30 transition-all duration-300">

                {/* Imagen a la izquierda */}
                {item.image && (
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain rounded-md flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                  />
                )}

                {/* Contenido al lado de la imagen */}
                <div className="flex-1 flex flex-col gap-2">
                  {/* Título */}
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  {/* Descripción */}
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Etiquetas */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="text-xs px-3 py-1 bg-blue-500/10 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Fecha */}
                  <span className="text-xs text-muted-foreground mt-2">
                    📅 {item.date}
                  </span>
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
