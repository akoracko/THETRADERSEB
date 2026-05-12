import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommunityPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
          onClick={() => setVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
            className="glass-effect rounded-2xl p-8 max-w-md w-full relative text-center"
            style={{ border: '1px solid hsla(43,80%,55%,0.3)' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setVisible(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center gold-glow">
                <Zap className="w-7 h-7 text-primary" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Get Funded <span className="gold-gradient">Guaranteed</span> Today
            </h2>

            <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
              Get funded <span className="text-primary font-semibold">guaranteed within 24 hours</span> with our funded account passing service.
            </p>

            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-5 gold-glow"
              onClick={() => window.open('https://t.me/fundedexpo', '_blank')}
            >
              Join FREE Community →
            </Button>

            <button
              onClick={() => setVisible(false)}
              className="mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
            >
              No thanks, I'll skip
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}