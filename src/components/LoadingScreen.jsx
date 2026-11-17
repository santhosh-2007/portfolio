import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] text-white"
      >
        {/* Ambient neon radial glows */}
        <div className="absolute w-96 h-96 rounded-full bg-accent-purple/20 blur-[120px] pointer-events-none" />
        <div className="absolute w-96 h-96 rounded-full bg-accent-blue/15 blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-xs px-6">
          {/* Logo Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-2xl glass-card border border-accent-purple/50 flex items-center justify-center shadow-glow-mixed mb-6 relative"
          >
            <span className="text-2xl font-black font-display tracking-wider bg-gradient-to-r from-accent-purple-light to-accent-blue bg-clip-text text-transparent">
              S.S
            </span>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-blue animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-blue" />
          </motion.div>

          <h2 className="text-lg font-bold font-display tracking-widest text-white uppercase mb-1">
            SANthOSH.S
          </h2>
          <p className="text-xs font-mono text-slate-400 tracking-wider mb-6">
            FULL STACK DEVELOPER
          </p>

          {/* Progress bar container */}
          <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-purple via-indigo-500 to-accent-blue rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <div className="flex justify-between w-56 text-[10px] font-mono text-slate-500 mt-2">
            <span>INITIALIZING 3D ENVIRONMENT</span>
            <span>{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
