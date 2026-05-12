import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-lg font-bold gold-gradient tracking-wider">TRADERSEB</span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TraderSeb. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Terms', 'Privacy', 'Contact'].map((item) => (
            <button key={item} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {item}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}