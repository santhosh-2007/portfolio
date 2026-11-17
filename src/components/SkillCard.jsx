import React from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../utils/iconMap';

export default function SkillCard({ skill, index = 0 }) {
  const IconComponent = getIcon(skill.icon);

  const categoryColor = {
    programming: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400',
    frontend: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
    backend: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    database: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400',
    tools: 'from-blue-500/20 to-violet-500/10 border-blue-500/30 text-blue-400',
    ai: 'from-fuchsia-500/20 to-pink-500/10 border-fuchsia-500/30 text-fuchsia-400',
  }[skill.category] || 'from-purple-500/20 to-blue-500/10 border-purple-500/30 text-purple-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative p-5 rounded-2xl glass-card flex flex-col justify-between overflow-hidden transition-all duration-300"
    >
      {/* Background glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-accent-purple/20 via-accent-blue/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

      {/* Top row: Icon + Level tag */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${categoryColor} border flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
            <IconComponent className="w-5 h-5" />
          </div>

          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
            {skill.badge || skill.category}
          </span>
        </div>

        {/* Skill Title */}
        <h3 className="text-lg font-bold font-display text-white group-hover:text-accent-blue transition-colors">
          {skill.name}
        </h3>

        {/* Skill Description */}
        <p className="mt-2 text-xs text-slate-400 leading-relaxed font-light">
          {skill.description}
        </p>
      </div>

      {/* Bottom Level Indicator */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
          Proficiency
        </span>
        <span className="text-xs font-mono font-medium text-accent-purple-light flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
          {skill.level}
        </span>
      </div>
    </motion.div>
  );
}
