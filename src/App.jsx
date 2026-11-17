import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#080808] text-slate-100 flex flex-col selection:bg-accent-purple/30 selection:text-accent-blue font-sans relative selection:backdrop-blur-none">
      {/* Loading Screen Overlay */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
