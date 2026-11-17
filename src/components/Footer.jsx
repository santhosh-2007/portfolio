import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalData } from '../data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent-purple/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-purple to-accent-blue flex items-center justify-center shadow-glow-purple">
                <span className="text-white text-sm font-mono font-black">S</span>
              </div>
              <span className="text-xl font-extrabold font-display tracking-tight text-white">
                SANthOSH<span className="text-accent-blue">.S</span>
              </span>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-accent-purple-light">
              Full Stack Developer
            </p>

            <p className="text-sm text-slate-400 max-w-md font-light leading-relaxed">
              Transforming innovative ideas into robust, responsive and scalable digital experiences through modern full-stack web development and clean code architectures.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-accent-blue border border-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalData.socials.email}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-accent-purple-light border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-light">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic & Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 font-semibold">
              Credentials
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-light">
              <li>
                <a href="#education" className="hover:text-white transition-colors">Education &amp; Degree</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">Project Expo &amp; Awards</a>
              </li>
              <li>
                <a href="#resume" className="hover:text-white transition-colors">Resume Download</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
          <p>
            &copy; {currentYear} Santhosh S. All rights reserved.
          </p>

          <p className="text-slate-400 font-mono">
            Designed &amp; Developed by Santhosh S.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
