import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code, Sparkles } from 'lucide-react';
import Button from './Button';

export default function ProjectCard({ project, onSelect, index = 0 }) {
  const cardRef = useRef(null);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['9deg', '-9deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-9deg', '9deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full flex flex-col justify-between rounded-3xl glass-card p-6 sm:p-7 border border-surface-border hover:border-accent-purple/40 transition-shadow duration-300 group overflow-hidden"
      >
        {/* Futuristic Card Visual Header */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-slate-900 via-background-card to-black border border-white/10 flex items-center justify-center p-4 group-hover:border-accent-blue/30 transition-colors"
        >
          {/* Subtle gradient pattern backdrop */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
          />
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          {/* Glowing Ambient Sphere */}
          <div
            className="absolute w-24 h-24 rounded-full blur-2xl opacity-40 transition-transform duration-500 group-hover:scale-125"
            style={{ backgroundColor: project.accentColor }}
          />

          {/* Project Title Banner / Tech Emblem */}
          <div className="relative z-10 text-center px-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-black/60 border border-white/20 text-slate-300 mb-2 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-accent-blue" />
              {project.category}
            </span>
            <h4 className="text-base sm:text-lg font-bold font-display text-white line-clamp-2">
              {project.title}
            </h4>
          </div>
        </div>

        {/* Card Body */}
        <div style={{ transform: "translateZ(20px)" }} className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold font-display text-white group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
            </div>

            <p className="text-sm text-slate-400 font-light leading-relaxed mb-4 line-clamp-3">
              {project.shortDesc}
            </p>

            {/* My Contribution Snippet */}
            {project.myContribution && (
              <div className="mb-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300 line-clamp-2">
                <span className="font-semibold text-accent-purple-light font-mono mr-1">
                  Role:
                </span>
                {project.myContribution}
              </div>
            )}
          </div>

          <div>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-400">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <button
                onClick={() => onSelect(project)}
                className="text-xs font-mono font-medium text-accent-blue hover:text-white flex items-center gap-1 group/btn transition-colors"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repo for ${project.title}`}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    className="p-2 rounded-xl bg-accent-purple/20 hover:bg-accent-purple/30 text-accent-purple-light hover:text-white border border-accent-purple/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
