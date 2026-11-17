import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Lightbulb, 
  Users, 
  Compass, 
  Database, 
  Server, 
  Terminal,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { personalData } from '../data/personal';

export default function About() {
  const cards = [
    {
      title: "Education Summary",
      icon: GraduationCap,
      color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400",
      description:
        "B.E. Computer Science and Engineering at Rathinam Technical Campus, Coimbatore. Solid foundations in DSA, DBMS, OOP and system architecture.",
      badge: "Academic Foundation"
    },
    {
      title: "Career Interests",
      icon: Compass,
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400",
      description:
        "Aspiring Full Stack Developer targeted on software engineering roles, campus placements, tech internships, and high-impact web development.",
      badge: "Career Vision"
    },
    {
      title: "Technical Interests",
      icon: Code,
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
      description:
        "Frontend UI/UX with React & Tailwind, backend architecture with Node.js & Express, relational schema design with MySQL, and cloud/DevOps tooling.",
      badge: "Core Stack"
    },
    {
      title: "Problem-Solving Mindset",
      icon: Lightbulb,
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
      description:
        "Analytical thinking approach focused on breaking down complex requirements, writing clean modular code, and building pragmatic, real-world solutions.",
      badge: "Engineering Logic"
    },
    {
      title: "Collaboration & Teamwork",
      icon: Users,
      color: "from-fuchsia-500/20 to-pink-500/10 border-fuchsia-500/30 text-fuchsia-400",
      description:
        "Active team member in student development teams, project expos, and peer code reviews. Values clear communication, git workflows and mutual growth.",
      badge: "Team Synergy"
    },
    {
      title: "Continuous Learning",
      icon: Sparkles,
      color: "from-blue-500/20 to-violet-500/10 border-blue-500/30 text-blue-400",
      description:
        "Dedicated to keeping pace with modern industry standards, exploring AI-assisted development, Docker containerization, and modern JavaScript frameworks.",
      badge: "Growth Mindset"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="01 // BACKGROUND & PHILOSOPHY"
          title="About Me"
          subtitle="A passionate Computer Science student and Full Stack Developer committed to building impactful digital solutions."
        />

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 max-w-4xl mx-auto text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-accent-purple/20 to-transparent rounded-bl-full pointer-events-none" />

          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
            Engineering Passion &amp; Purpose
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            <p>
              "I'm <strong className="text-white font-semibold">Santhosh S</strong>, a Computer Science and Engineering student and aspiring Full Stack Developer. I enjoy developing web applications, exploring modern technologies and working on innovative software solutions."
            </p>
            <p>
              "My interests include frontend development, backend development, database management, cloud technologies and software engineering."
            </p>
            <p>
              "I continuously improve my technical skills through practical projects, teamwork and learning."
            </p>
          </div>
        </motion.div>

        {/* 6 Professional Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} border flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-display text-white mb-2 group-hover:text-accent-blue transition-colors">
                    {card.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs font-mono text-accent-purple-light">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Competency</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
