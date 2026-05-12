import React from 'react';
import { motion } from 'framer-motion';

const proofImages = [
  "https://www.adeptgateway.com/images/cert-qt-funded-ishaq.png",
  "https://www.adeptgateway.com/images/cert-mff-payout-401.png",
  "https://www.adeptgateway.com/images/cert-alpha-futures-mohammad.png",
  "https://www.adeptgateway.com/images/cert-alpha-capital-shahib.png",
  "https://www.adeptgateway.com/images/cert-alpha-capital-ishaq.png",
  "https://www.adeptgateway.com/images/cert-mff-expert50k-rifaat.png",
  "https://www.adeptgateway.com/images/cert-alpha-futures-disbursement.png",
  "https://www.adeptgateway.com/images/ftmo-reward-4488.png",
  "https://www.adeptgateway.com/images/ftmo-reward-4816.png",
  "https://www.adeptgateway.com/images/ftmo-reward-2856.png",
  "https://www.adeptgateway.com/images/ftmo-reward-2400.png",
  "https://www.adeptgateway.com/images/ftmo-reward-4528.png",
  "https://www.adeptgateway.com/images/mff-payout-b40y.png",
  "https://www.adeptgateway.com/images/mff-payout-b400.png",
  "https://www.adeptgateway.com/images/mff-payout-b40u.png",
  "https://www.adeptgateway.com/images/mff-progression.png",
];

export default function ProofSection() {
  return (
    <section id="proof" className="py-24 md:py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Real Results From <span className="gold-gradient">Real Students</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Students who started from zero — just like you
        </p>
      </motion.div>

      {/* Scrolling row 1 */}
      <div className="relative mb-4">
        <div className="flex gap-4 animate-scroll-left" style={{ width: 'max-content' }}>
          {[...proofImages, ...proofImages].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-44 rounded-xl overflow-hidden glass-effect"
            >
              <img
                src={img}
                alt={`Proof certificate ${(i % proofImages.length) + 1}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling row 2 (reversed) */}
      <div className="relative">
        <div className="flex gap-4 animate-scroll-left" style={{ width: 'max-content', animationDirection: 'reverse', animationDuration: '45s' }}>
          {[...proofImages.slice().reverse(), ...proofImages.slice().reverse()].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-44 rounded-xl overflow-hidden glass-effect"
            >
              <img
                src={img}
                alt={`Proof certificate ${(i % proofImages.length) + 1}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}