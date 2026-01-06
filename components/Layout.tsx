
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#fdf6f0] text-[#5d4037] relative overflow-hidden flex flex-col">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-24 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10 pointer-events-none"></div>
      
      <main className="flex-1 relative z-10 p-6 flex flex-col">
        {children}
      </main>

      {/* Footer decoration */}
      <div className="h-16 flex items-center justify-center text-xs text-[#8b4513]/50 tracking-widest uppercase pb-4">
        © 2024 年末おみくじ
      </div>
    </div>
  );
};
