import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="04 // PROFESSIONAL ROLES"
          title="Experience & Activities"
          subtitle="Practical experience contributing to development teams, UI design initiatives, and software delivery."
        />

        {/* Elegant Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative pt-4 pb-8">
          {/* Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-transparent" />

          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 items-start mb-12"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0d0d14] border-2 border-accent-blue shadow-glow-blue flex items-center justify-center z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-purple animate-pulse" />
              </div>

              {/* Left Column (Meta Info on Desktop) */}
              <div className="sm:text-right sm:pr-8 mb-4 sm:mb-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent-purple/15 text-accent-purple-light border border-accent-purple/30 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>

                <div className="flex items-center sm:justify-end gap-1.5 text-xs text-slate-400 font-mono mt-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                  <span>{item.location}</span>
                </div>

                <div className="mt-2 text-xs font-mono text-emerald-400">
                  ● {item.status}
                </div>
              </div>

              {/* Right Column (Card Content) */}
              <div className="sm:pl-8">
                <div className="p-6 rounded-3xl glass-card border border-white/10 hover:border-accent-purple/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {item.badge}
                    </span>
                    <Building2 className="w-4 h-4 text-accent-blue" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mt-1">
                    {item.role}
                  </h3>

                  <h4 className="text-sm font-medium text-accent-purple-light mb-4">
                    {item.organization}
                  </h4>

                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="space-y-2.5 mb-6">
                    {item.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 font-light">
                        <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
