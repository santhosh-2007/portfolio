import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle, 
  AlertCircle, 
  Sparkles,
  Phone,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { personalData } from '../data/personal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-spam bot trap
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#8b5cf6', '#00f0ff', '#ffffff']
      });
    } catch (e) {
      // Fallback if canvas-confetti fails
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot for bot submission
    if (formData.honeypot) {
      console.warn("Spam detected via honeypot");
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    // Check if EmailJS keys are configured in environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      // Use configured EmailJS service
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Santhosh S',
          },
          publicKey
        );

        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. I will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        fireConfetti();
      } catch (err) {
        console.error("EmailJS submission error:", err);
        setSubmitStatus('error');
        setStatusMessage('Could not transmit message via EmailJS. Please reach out directly to my email address below.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Demo / development simulation with realistic delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setStatusMessage(
          'Message received! (Form submission is configured in demo mode until you add your EmailJS keys in .env).'
        );
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        fireConfetti();
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="09 // GET IN TOUCH"
          title="Let's Work Together"
          subtitle="Have a project idea, internship opportunity or collaboration in mind? Feel free to get in touch."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards & Socials (Col 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Start a Conversation
              </h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Whether you represent a company seeking a dedicated developer, have campus placement inquiries, or want to build a modern web project, my inbox is open.
              </p>
            </div>

            {/* Direct Info Cards */}
            <div className="space-y-4 pt-2">
              <a
                href={personalData.socials.email}
                className="p-5 rounded-2xl glass-card flex items-center gap-4 border border-white/10 hover:border-accent-purple/40 group transition-all"
              >
                <div className="p-3 rounded-xl bg-accent-purple/20 text-accent-purple-light border border-accent-purple/30 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Official Email
                  </span>
                  <div className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors">
                    {personalData.email}
                  </div>
                </div>
              </a>

              <div className="p-5 rounded-2xl glass-card flex items-center gap-4 border border-white/10">
                <div className="p-3 rounded-xl bg-accent-blue/15 text-accent-blue border border-accent-blue/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Location &amp; Campus
                  </span>
                  <div className="text-sm font-semibold text-white">
                    {personalData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Professional Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-accent-purple/50 transition-all"
                >
                  <Github className="w-4 h-4 text-accent-blue" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-accent-blue/50 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-accent-blue" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (Col 7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 shadow-glass relative">
              <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent-purple" />
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field for bot suppression */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-accent-purple">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl glass-input text-sm ${
                        errors.name ? 'border-rose-500/80 focus:border-rose-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-accent-blue">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl glass-input text-sm ${
                        errors.email ? 'border-rose-500/80 focus:border-rose-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-accent-purple">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl glass-input text-sm ${
                      errors.subject ? 'border-rose-500/80 focus:border-rose-500' : ''
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase text-slate-300 mb-1.5"
                  >
                    Message <span className="text-accent-blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Santhosh, I would like to discuss..."
                    className={`w-full px-4 py-3 rounded-xl glass-input text-sm resize-none ${
                      errors.message ? 'border-rose-500/80 focus:border-rose-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                      <span>{statusMessage}</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                      <span>{statusMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  icon={Send}
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
