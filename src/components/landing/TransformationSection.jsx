import React from 'react';
import { motion } from 'framer-motion';

export default function TransformationSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Real <span className="gold-gradient">Transformation</span>
          </h2>

          <div className="glass-effect rounded-2xl p-8 md:p-12 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary/20 text-primary text-sm font-medium px-4 py-1 rounded-full border border-primary/30">
              A Program for the Relentless
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-4">
              This is not your typical mentorship. This journey demands focus, commitment, and respect. 
              The principles you'll learn have enabled the building of seven-figure portfolios, 
              but they mean nothing without effort and discipline. Every concept must be internalized 
              — not memorized — and applied with precision to the ever-changing markets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}