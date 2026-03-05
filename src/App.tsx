/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, ArrowRight, Sparkles, AlertTriangle, RefreshCw } from 'lucide-react';
import { PSYCHOLOGICAL_FACTS } from './constants';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextFact = () => {
    setCurrentIndex((prev) => (prev + 1) % PSYCHOLOGICAL_FACTS.length);
  };

  const currentFact = PSYCHOLOGICAL_FACTS[currentIndex];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-32">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-medium mb-6 tracking-wider uppercase">
            <Brain size={14} />
            <span>Psychology Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            25 Psychological Facts That <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Sound Fake</span> But Are True
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-zinc-400 text-lg md:text-xl">
            <AlertTriangle size={20} className="text-amber-500" />
            <p>Warning: Some of these are disturbing.</p>
          </div>
        </motion.div>

        {/* Fact Card Section */}
        <div className="relative min-h-[400px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
            >
              {/* Card Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 opacity-50" />
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Brain size={200} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
                    Fact #{currentIndex + 1} of {PSYCHOLOGICAL_FACTS.length}
                  </span>
                  <Sparkles className="text-emerald-400/50" size={20} />
                </div>

                <p className="text-2xl md:text-4xl font-medium leading-tight mb-12 text-zinc-100 italic">
                  "{currentFact}"
                </p>

                <button
                  onClick={nextFact}
                  className="group/btn relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <span>Next Fact</span>
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar */}
          <div className="w-full mt-8 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-emerald-500"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / PSYCHOLOGICAL_FACTS.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Quick List Preview (Optional but good for SEO/Scannability) */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2 mb-8">
            <h2 className="text-2xl font-bold text-zinc-400 uppercase tracking-widest text-center">More Insights</h2>
          </div>
          {PSYCHOLOGICAL_FACTS.slice(0, 4).map((fact, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors cursor-pointer" onClick={() => setCurrentIndex(i)}>
              <p className="text-zinc-400 text-sm line-clamp-2">{fact}</p>
            </div>
          ))}
        </div>

        {/* Monetag Ad Placeholder */}
        <div className="mt-32 pt-12 border-t border-white/10">
          <div className="bg-zinc-900/30 rounded-xl p-8 border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-zinc-500">
              <RefreshCw size={24} className="animate-spin-slow" />
            </div>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] mb-2">Advertisement</p>
            <div id="monetag-ad-container" className="min-h-[250px] w-full flex items-center justify-center">
              {/* 
                PLACEHOLDER FOR MONETAG SCRIPT 
                Example: <script src="https://alwingulla.com/act/checkout.js" async></script>
              */}
              <p className="text-zinc-600 text-sm italic">
                Ad space reserved for Monetag script.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} MindBender Facts. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </div>
  );
}
