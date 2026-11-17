import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Cpu, Medal, Sparkles, CheckCircle2, Star } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { achievementsData } from '../data/achievements';

const iconMap = {
  Trophy: Trophy,
  Cpu: Cpu,
  Medal: Medal,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="07 // HONORS & RECOGNITION"
          title="Achievements"
          subtitle="Honors, technical project expos, and hands-on hardware/software innovations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {achievementsData.map((item, index) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative p-6 sm:p-7 rounded-3xl glass-card flex flex-col justify-between border border-white/10 hover:border-accent-purple/40 transition-all duration-300 group overflow-hidden"
              >
                {/* Corner ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-accent-purple/20 to-accent-blue/20 text-accent-blue border border-accent-blue/30 group-hover:scale-110 transition-transform shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-accent-purple/15 text-accent-purple-light border border-accent-purple/30">
                      <Star className="w-3 h-3 text-accent-blue" />
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {item.category}
                  </span>

                  <h3 className="text-xl font-bold font-display text-white mt-1 mb-3 group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{item.organization}</span>
                  <span className="text-accent-blue">{item.year}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
