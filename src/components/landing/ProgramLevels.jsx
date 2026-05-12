import React from 'react';
import { CheckCircle2 } from "lucide-react";
import { motion } from 'framer-motion';

const levels = [
  {
    num: "01",
    label: "Step 1",
    title: "Understand How Markets Move",
    desc: "We start from absolute zero. You'll learn how to read a chart, understand market direction, and know what the price is actually doing — in plain English."
  },
  {
    num: "02",
    label: "Step 2",
    title: "Know When To Enter A Trade",
    desc: "Seb shows you his exact system for spotting good trade opportunities. You'll know when to get in, when to stay out, and how to keep your money safe."
  },
  {
    num: "03",
    label: "Step 3",
    title: "Trade With A Clear System",
    desc: "Follow a repeatable process every single day. No guessing, no stress — just a simple routine you can stick to and build real confidence from."
  }
];

const whatYouLearn = [
  "How to read the market direction — even as a complete beginner",
  "How to find good entry points using a simple, clear method",
  "When to avoid bad trades and protect your money",
  "How to manage risk so one bad trade doesn't wipe you out",
  "How to stay consistent and trade with confidence every day",
];

export default function ProgramLevels() {
  return (
    <section id="program" className="py-14 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            How It <span className="gold-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            A simple 3-step journey — no experience required
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {levels.map((level, i) => (
            <motion.div
              key={level.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-effect rounded-2xl p-6 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
              <span className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                {level.num}
              </span>
              <span className="block text-xs font-semibold text-primary mt-1 mb-2 uppercase tracking-widest">
                {level.label}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-2">{level.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{level.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Built For Beginners + What You'll Learn */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-7"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Built For <span className="gold-gradient">Beginners</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This course is designed for people who are completely new to trading. Everything is explained in simple, everyday language — no complicated terms, no confusing charts dumped on you all at once.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-3">
              You'll have a clear system to follow from day one, with Seb and the community there to support you at every stage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-effect rounded-2xl p-7"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              What You'll <span className="gold-gradient">Learn</span>
            </h3>
            <ul className="space-y-3">
              {whatYouLearn.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}