import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Eye, FileText, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CertificateModal from '../components/CertificateModal';
import Button from '../components/Button';
import { certificationsData } from '../data/certifications';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="06 // VERIFIED QUALIFICATIONS"
          title="Certifications & Learning"
          subtitle="Accredited technical certifications and government examinations affirming core proficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl glass-card flex flex-col justify-between border border-white/10 hover:border-accent-purple/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-accent-purple/20 text-accent-purple-light border border-accent-purple/30 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-1 group-hover:text-accent-blue transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-accent-purple-light mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  {cert.description}
                </p>

                {cert.skillsCovered && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skillsCovered.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {cert.credentialType}
                </span>

                <Button
                  onClick={() => setSelectedCert(cert)}
                  variant="outline"
                  size="sm"
                  icon={Eye}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Upload Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-500">
            Certificate scans and verification IDs can be updated in <code className="text-accent-blue bg-white/5 px-1.5 py-0.5 rounded">src/data/certifications.js</code>.
          </p>
        </div>
      </div>

      <CertificateModal
        certificate={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
