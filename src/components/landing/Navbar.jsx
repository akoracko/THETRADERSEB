import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold gold-gradient tracking-wider">TRADERSEB</span>
        
        <div className="hidden md:flex items-center gap-8">
          {['about', 'program', 'proof'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors capitalize"
            >
              {item}
            </button>
          ))}
          <Button
            onClick={() => window.open('https://form.typeform.com/to/cau01EuI', '_blank')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6"
          >
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-4">
          {['about', 'program', 'proof'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors capitalize py-2"
            >
              {item}
            </button>
          ))}
          <Button onClick={() => window.open('https://form.typeform.com/to/cau01EuI', '_blank')} className="w-full bg-primary text-primary-foreground">
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </nav>
  );
}