import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutTraderSeb() {
  return (
    <section id="about-seb" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet <span className="gold-gradient">TraderSeb</span>
            </h2>
            
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 hidden md:block">
              Sebastian Cardona (TraderSeb) started from zero. Through consistent learning and real-world trading, he built seven-figure funded capital and six-figure payouts.
            </p>

            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 hidden md:block">
              He realized his success could be replicated. Today, he provides complete support to traders worldwide, sharing the exact systems and strategies that took him from zero to elite performer.
            </p>

            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden md:block">
              His mentorship builds a solid foundation with full support every step of the way. Just proven strategies and accountability that turn aspiring traders into consistently profitable ones.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
            
            <div className="relative">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b6e83deedfb63eb30ac2a9/84237f10c_9ab1becd-62e6-4955-8162-4562abbb53ce.jpg"
                alt="Sebastian Cardona"
                className="w-full aspect-square object-cover rounded-xl mb-6"
              />
              
              <h3 className="text-2xl font-bold text-foreground mb-1">Sebastian Cardona</h3>
              <p className="text-primary text-sm font-semibold mb-4">TraderSeb</p>
              <p className="text-primary text-sm font-semibold mb-4 uppercase tracking-widest">Founder & Lead Mentor</p>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>7-Figure Funded Capital</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>6-Figure in Payouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>10+ Years Trading Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Mentoring Traders Worldwide</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}