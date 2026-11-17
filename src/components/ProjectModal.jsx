import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, UserCheck } from 'lucide-react';
import Button from './Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-accent-purple/30 shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Banner / Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-purple/15 text-accent-purple-light border border-accent-purple/30">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white pr-8">
            {project.title}
          </h3>

          {/* Key metrics cards */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <div className="text-[11px] font-mono uppercase text-slate-400">{metric.label}</div>
                  <div className="text-sm font-semibold text-accent-blue mt-0.5">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="mt-4">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-accent-blue" />
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {project.fullDesc || project.shortDesc}
            </p>
          </div>

          {/* My Contribution Section */}
          {project.myContribution && (
            <div className="mt-6 p-4 rounded-2xl bg-accent-purple/10 border border-accent-purple/20">
              <h4 className="text-xs font-mono uppercase text-accent-purple-light tracking-wider mb-1.5 flex items-center gap-1.5 font-bold">
                <UserCheck className="w-4 h-4 text-accent-purple" />
                My Contribution &amp; Architecture
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                {project.myContribution}
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.features && (
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-accent-blue" />
                Key Verified Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack badges */}
          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  variant="secondary"
                  size="sm"
                  icon={Github}
                >
                  GitHub Repository
                </Button>
              )}
              {project.liveDemoUrl ? (
                <Button
                  href={project.liveDemoUrl}
                  target="_blank"
                  variant="primary"
                  size="sm"
                  icon={ExternalLink}
                >
                  Live Demo
                </Button>
              ) : (
                <span className="text-xs font-mono text-slate-400 italic px-2 py-1 rounded bg-white/5">
                  Live demo available upon request
                </span>
              )}
            </div>

            <Button variant="ghost" size="sm" onClick={onClose}>
              Close Preview
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
