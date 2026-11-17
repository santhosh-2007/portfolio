import React from 'react';
import { motion } from 'framer-motion';

export default function FallbackHero3D() {
  return (
    <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center select-none">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-purple/30 via-accent-blue/20 to-transparent blur-3xl animate-pulse-glow" />

      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-accent-purple/40"
      />

      {/* Middle reverse rotating ring with markers */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 rounded-full border border-accent-blue/30 flex items-center justify-between px-2"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-accent-blue shadow-glow-blue" />
        <span className="w-2 h-2 rounded-full bg-accent-purple shadow-glow-purple" />
      </motion.div>

      {/* Inner glowing 3D-styled geometric core */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
        className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl glass-card flex items-center justify-center border border-accent-purple/50 shadow-glow-mixed"
      >
        {/* Diamond inner frame */}
        <div className="absolute inset-4 rounded-xl border border-accent-blue/40 rotate-45" />

        {/* Center Monogram / Cyber Core Badge */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="text-3xl sm:text-4xl font-extrabold tracking-wider bg-gradient-to-br from-white via-accent-purple-light to-accent-blue bg-clip-text text-transparent font-display">
            S.S
          </div>
          <span className="text-[10px] tracking-widest text-accent-blue uppercase font-mono mt-1">
            FULL STACK
          </span>
        </div>
      </motion.div>

      {/* Floating orbital badges */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-mono bg-background-card/90 border border-accent-purple/40 text-accent-purple-light shadow-glow-purple backdrop-blur-md"
      >
        &lt;React.js /&gt;
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-6 px-3 py-1 rounded-full text-xs font-mono bg-background-card/90 border border-accent-blue/40 text-accent-blue shadow-glow-blue backdrop-blur-md"
      >
        Node.js &amp; Cloud
      </motion.div>
    </div>
  );
}
