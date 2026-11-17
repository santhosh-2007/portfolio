import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, FileText, Download } from 'lucide-react';
import Button from './Button';

export default function CertificateModal({ certificate, isOpen, onClose }) {
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

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-xl glass-card rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-accent-purple/30 shadow-2xl z-10"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-accent-purple/20 border border-accent-purple/40 text-accent-purple-light">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-blue">
                {certificate.credentialType}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {certificate.title}
              </h3>
            </div>
          </div>

          <div className="my-5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400 font-mono text-xs">Issuing Authority:</span>
              <span className="text-white font-medium">{certificate.issuer}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-mono text-xs">Status / Distinction:</span>
              <span className="text-accent-purple-light font-mono font-semibold">
                {certificate.issueDate}
              </span>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
            {certificate.description}
          </p>

          {certificate.skillsCovered && (
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
                Key Competencies Validated
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skillsCovered.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Certificate Document Preview / Action */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-background-card to-white/[0.02] border border-white/10 text-center">
            {certificate.hasDocument && certificate.fileUrl ? (
              <Button
                href={certificate.fileUrl}
                target="_blank"
                variant="primary"
                size="md"
                icon={Download}
              >
                Download Official Certificate Document
              </Button>
            ) : (
              <div className="text-center py-2">
                <FileText className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                <p className="text-xs text-slate-400">
                  Verified Academic &amp; Technical Credential.
                </p>
                <p className="text-[11px] text-slate-500 font-mono mt-1">
                  (Physical document available on request for placements)
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
