import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileDown, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { personalData } from '../data/personal';

export default function Resume() {
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleDownloadClick = (e) => {
    // Check if resume.pdf exists or show notice
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          e.preventDefault();
          setDownloadNotice(true);
          setTimeout(() => setDownloadNotice(false), 5000);
        }
      })
      .catch(() => {
        e.preventDefault();
        setDownloadNotice(true);
        setTimeout(() => setDownloadNotice(false), 5000);
      });
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="08 // CURRICULUM VITAE"
          title="Resume & Credentials"
          subtitle="Explore the structured overview of qualifications, technical competencies, and download the official CV."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Download Card & Quick Actions (Col 4) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="p-6 sm:p-7 rounded-3xl glass-card border border-white/10 text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-purple to-accent-blue mx-auto flex items-center justify-center shadow-glow-purple mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-1">
                Santhosh S – Resume
              </h3>
              <p className="text-xs font-mono text-accent-purple-light mb-6">
                Full Stack Developer • B.E. CSE
              </p>

              <div className="space-y-3">
                <Button
                  href="/resume.pdf"
                  download="Santhosh_S_Resume.pdf"
                  onClick={handleDownloadClick}
                  variant="primary"
                  size="md"
                  icon={FileDown}
                  className="w-full"
                >
                  Download PDF Resume
                </Button>

                <Button
                  href="/resume.pdf"
                  target="_blank"
                  variant="secondary"
                  size="md"
                  icon={ExternalLink}
                  className="w-full"
                >
                  View in New Tab
                </Button>
              </div>

              {downloadNotice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs text-left flex items-start gap-2"
                >
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Place your custom <code className="font-mono font-bold">resume.pdf</code> into the <code className="font-mono">public/</code> folder to replace this placeholder.
                  </span>
                </motion.div>
              )}

              <div className="mt-6 pt-5 border-t border-white/10 text-left space-y-2 text-xs text-slate-400 font-light">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue" />
                  <span>Ready for Campus Placements &amp; Internships</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue" />
                  <span>Includes Academic &amp; Project Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue" />
                  <span>Verified Contact Information</span>
                </div>
              </div>
            </div>

            {/* Quick Contact snippet */}
            <div className="p-5 rounded-2xl glass-card border border-white/5 text-xs text-slate-400 space-y-1.5 font-mono">
              <div className="text-slate-200 font-semibold mb-2 uppercase tracking-wider">
                Direct Contact
              </div>
              <p>Email: {personalData.email}</p>
              <p>Location: {personalData.location}</p>
            </div>
          </motion.div>

          {/* Right Column: Structured Interactive Resume Preview (Col 8) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 shadow-glass space-y-8"
          >
            {/* Header / Summary */}
            <div className="border-b border-white/10 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold font-display text-white">
                  Santhosh S
                </h3>
                <span className="text-xs font-mono text-accent-blue px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                  Full Stack Developer
                </span>
              </div>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Computer Science and Engineering undergraduate passionate about developing scalable, modern web applications. Proficient in React, Node.js, modern CSS, database design, and cloud workflows with a demonstrated record of team collaboration and hands-on project innovation.
              </p>
            </div>

            {/* Section 1: Education */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-purple-light flex items-center gap-2 font-bold">
                <GraduationCap className="w-4 h-4 text-accent-purple" />
                Education
              </h4>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex flex-wrap justify-between text-sm">
                  <span className="font-semibold text-white">
                    Bachelor of Engineering – Computer Science and Engineering
                  </span>
                  <span className="text-xs font-mono text-accent-blue">2022 – 2026</span>
                </div>
                <p className="text-xs text-slate-400">
                  Rathinam Technical Campus • Coimbatore, Tamil Nadu
                </p>
                <p className="text-xs text-slate-400 pt-1 font-light">
                  Core coursework: Data Structures, Algorithms, DBMS, Web Development, Object-Oriented Systems.
                </p>
              </div>
            </div>

            {/* Section 2: Experience */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-blue flex items-center gap-2 font-bold">
                <Briefcase className="w-4 h-4 text-accent-blue" />
                Experience &amp; Activities
              </h4>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex flex-wrap justify-between text-sm">
                  <span className="font-semibold text-white">
                    Frontend Developer &amp; Designer
                  </span>
                  <span className="text-xs font-mono text-emerald-400">2024 – Present (Ongoing)</span>
                </div>
                <p className="text-xs text-slate-400">
                  Rathinam Technical Campus • Student Development Team
                </p>
                <p className="text-xs text-slate-300 pt-1 font-light">
                  Contributing to responsive web interfaces, UI wireframing in Canva, and front-end code with React.js and modern CSS.
                </p>
              </div>
            </div>

            {/* Section 3: Key Technical Projects */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-purple-light flex items-center gap-2 font-bold">
                <Layers className="w-4 h-4 text-accent-purple" />
                Key Projects
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-bold text-white block">
                    Smart Attendance Monitoring System
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    React, Node.js, PHP, MySQL, Dynamic QR
                  </span>
                  <p className="text-[11px] text-slate-300 font-light">
                    Automated roll call platform with multi-modal authentication and live analytics.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-bold text-white block">
                    DreamHomes Real Estate Catalog
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    React, Vite, Docker, Jenkins, Git
                  </span>
                  <p className="text-[11px] text-slate-300 font-light">
                    Modular property exploration catalog containerized with CI/CD automation.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Certifications & Distinctions */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-blue flex items-center gap-2 font-bold">
                <Award className="w-4 h-4 text-accent-blue" />
                Certifications &amp; Distinctions
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-200">
                  Full Stack Development – CSC Centre, TN
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-200">
                  Typewriting Junior Level – First Class with Distinction
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-200">
                  Rathinam Project Expo – Yudhisthira Project
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
