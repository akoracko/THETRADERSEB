import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from 'framer-motion';

const features = [
  "1:1 mentorship with Seb — personalised guidance tailored to your progress",
  "Personalised roadmap built around your goals so you always know exactly what to focus on next",
  "Step-by-step course that teaches you trading from scratch — no prior knowledge needed",
  "Easy-to-follow videos showing you exactly how to place trades and grow your account",
  "Private community chat where Seb and other students answer your questions",
  "Personalised trade recaps so you can learn from every real trade Seb takes",
  "Regular live Q&A sessions — ask anything, get clear answers",
  "Full support and accountability so you never feel alone on your journey"
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="gold-gradient">Start Learning?</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg">
            Designed for complete beginners — no experience needed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-2xl p-8 relative overflow-hidden group ring-2 ring-primary"
        >
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold rounded-bl-lg">
            LIMITED SPOTS
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 relative">Full Mentorship Program</h3>

          <ul className="space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-xs md:text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 gold-glow" onClick={() => window.open('https://t.me/fundedexpo', '_blank')}>
            Apply Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}