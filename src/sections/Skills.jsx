import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillCategories, skillsData } from '../data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="02 // CAPABILITIES & EXPERTISE"
          title="Technical Skills"
          subtitle="A categorized inventory of verified technologies, languages, and frameworks actively utilized in development projects."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-accent-purple/30 to-accent-blue/20 border border-accent-blue/40 shadow-glow-purple'
                    : 'text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/5'
                }`}
              >
                <span>{category.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Verification Note */}
        <div className="mt-12 p-4 rounded-2xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>
              All listed technologies reflect verified academic study or practical implementation. No arbitrary percentage scores.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
