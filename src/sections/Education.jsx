import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="05 // ACADEMIC FOUNDATIONS"
          title="Education"
          subtitle="Formal engineering education in Computer Science and Engineering with focus on core computational systems."
        />

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-accent-blue/40 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-accent-blue/15 border border-accent-blue/30 text-accent-blue">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-accent-purple-light">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                  {edu.period}
                </span>
              </div>

              {/* Institution and Location */}
              <div className="mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-base sm:text-lg font-semibold text-slate-200">
                  {edu.institution}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span className="text-emerald-400">{edu.status}</span>
                </div>
              </div>

              {/* Course Highlights */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-accent-blue" />
                  Academic Curriculum Highlights
                </h4>
                {edu.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-accent-purple shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Relevant Courses */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
                  Key Subjects &amp; Core Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Editable Academic Details Notice */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Academic Record: Verified Coursework</span>
                <span>CGPA / Batch details editable in data/education.js</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
