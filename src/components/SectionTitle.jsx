import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  tag,
  title,
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-mono tracking-wider uppercase text-accent-blue bg-accent-blue/10 border border-accent-blue/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
          {tag}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white"
      >
        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative subtle glowing divider */}
      <div className={`mt-6 flex items-center gap-2 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-0.5 w-12 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent-blue shadow-glow-blue" />
        <div className="h-0.5 w-4 bg-accent-blue/40 rounded-full" />
      </div>
    </div>
  );
}
