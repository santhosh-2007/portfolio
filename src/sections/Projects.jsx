import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack & Web' },
    { id: 'analytics', label: 'Data & Analytics' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return p.category.includes('Full Stack') || p.category.includes('Frontend') || p.category.includes('SaaS') || p.category.includes('E-Commerce');
    if (filter === 'analytics') return p.category.includes('Analytics');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          tag="03 // ENGINEERING PORTFOLIO"
          title="Featured Projects"
          subtitle="Real-world software platforms, web applications, and analytics systems engineered with modern architecture."
        />

        {/* Project Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Informational note about editable projects */}
        <div className="mt-14 text-center">
          <p className="text-xs font-mono text-slate-500 max-w-lg mx-auto">
            Repository links and demo environments can be customized in <code className="text-accent-blue bg-white/5 px-1.5 py-0.5 rounded">src/data/projects.js</code>.
          </p>
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
