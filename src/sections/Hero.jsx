import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Send, FileDown, Layers, MapPin, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import HeroScene from '../three/HeroScene';
import { personalData } from '../data/personal';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = personalData.typingRoles;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullText) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backward
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-24 flex flex-col justify-center overflow-hidden bg-background bg-grid-pattern"
    >
      {/* Dynamic Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-accent-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Call-To-Actions (Col 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                {personalData.status}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent-blue" />
                Coimbatore, TN
              </span>
            </div>

            {/* Greeting */}
            <p className="text-base sm:text-lg font-mono text-accent-purple-light tracking-wide mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-blue" />
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white mb-3">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Santhosh S
              </span>
            </h1>

            {/* Dynamic Animated Typing Roles */}
            <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl md:text-3xl font-display font-semibold text-accent-blue mb-4">
              <span className="mr-2">&gt;</span>
              <span>{currentText}</span>
              <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-accent-purple animate-pulse" />
            </div>

            {/* Tagline */}
            <h2 className="text-lg sm:text-xl font-medium text-slate-200 mb-4 tracking-tight">
              Building Modern Web Applications &amp; Digital Experiences.
            </h2>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl mb-8">
              "I am a passionate developer interested in building modern, user-friendly and scalable web applications. I enjoy solving problems, learning new technologies and transforming ideas into real-world digital solutions."
            </p>

            {/* Three CTAs as required */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                variant="primary"
                size="md"
                icon={Layers}
              >
                View My Projects
              </Button>

              <Button
                href="#resume"
                onClick={(e) => scrollToSection(e, 'resume')}
                variant="secondary"
                size="md"
                icon={FileDown}
              >
                Download Resume
              </Button>

              <Button
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                variant="outline"
                size="md"
                icon={Send}
              >
                Contact Me
              </Button>
            </div>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-8 border-t border-white/10 w-full">
              {personalData.highlights.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    {item.label}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 font-display">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Scene + Elegant Initials Cyber Avatar (Col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* 3D Canvas Scene */}
            <div className="w-full relative flex items-center justify-center">
              <HeroScene />
            </div>

            {/* Elegant Initials-Based Avatar Badge underneath (as required: no random photo, elegant initials avatar) */}
            <div className="mt-[-20px] relative z-20 flex items-center gap-4 px-5 py-3 rounded-2xl glass-card border border-white/10 shadow-glass">
              {/* Initials Avatar Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-accent-purple to-accent-blue flex items-center justify-center shadow-glow-purple">
                <span className="text-white text-base font-mono font-black">SS</span>
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-background" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold font-display text-white">Santhosh S</h3>
                  <CheckCircle className="w-3.5 h-3.5 text-accent-blue" />
                </div>
                <p className="text-xs font-mono text-slate-400">Computer Science &amp; Engineering</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-accent-blue transition-colors group cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-9 rounded-full border border-slate-700 flex justify-center pt-1.5 group-hover:border-accent-blue transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1.5 rounded-full bg-accent-blue"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
