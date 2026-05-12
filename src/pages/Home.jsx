import React from 'react';
import CommunityPopup from '../components/landing/CommunityPopup';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ProgramLevels from '../components/landing/ProgramLevels';
import PricingSection from '../components/landing/PricingSection';
import CTASection from '../components/landing/CTASection';
import MentorshipReviews from '../components/landing/MentorshipReviews';
import ProofSection from '../components/landing/ProofSection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Gold glow background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl rounded-full bg-primary/5 blur-3xl" />
      </div>
      <CommunityPopup />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProofSection />
        <MentorshipReviews />
        <ProgramLevels />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}