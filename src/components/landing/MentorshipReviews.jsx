import React from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

export default function MentorshipReviews() {
  const { data: reviews = [] } = useQuery({
    queryKey: ['mentorshipReviews'],
    queryFn: () => base44.entities.MentorshipReview.list('-order'),
  });

  return (
    <section id="reviews" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our Students <span className="gold-gradient">Are Saying</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Beginners just like you who followed the system and got results
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://www.youtube.com/embed/SW9oYqOuD4M",
            "https://www.youtube.com/embed/tVeeCI0m3vE",
            "https://www.youtube.com/embed/BHuQc33EK0I"
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden group relative"
            >
              <div className="aspect-video bg-black relative">
                <iframe
                  src={src || undefined}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}