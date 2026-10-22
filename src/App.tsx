import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { AnalyticsSandbox } from './components/AnalyticsSandbox';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Insights } from './components/Insights';
import { ProjectLinksInventory } from './components/ProjectLinksInventory';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';
import { projectsData } from './data/projectsData';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // If the user has explicitly set 'light' or 'dark' in localStorage, check it.
    // If it was previous default 'dark', reset to 'light'.
    const saved = localStorage.getItem('theme_v2');
    if (saved) return saved === 'dark';
    return false; // Always Light mode by default for all visitors
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Sync dark mode class on HTML root element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme_v2', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme_v2', 'light');
    }
  }, [darkMode]);

  // Handle URL hash changes for case study deep-linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#casestudy-')) {
        const projectId = hash.replace('#casestudy-', '');
        const matched = projectsData.find((p) => p.id === projectId);
        if (matched) {
          setSelectedProject(matched);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = `#casestudy-${project.id}`;
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#casestudy-')) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      
      {/* Sticky Navbar */}
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Projects onSelectProject={handleOpenProject} />
        <AnalyticsSandbox />
        <Skills />
        <Experience />
        <Insights />
        <ProjectLinksInventory />
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Modals */}
      <CaseStudyModal 
        project={selectedProject} 
        onClose={handleCloseProject} 
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}

export default App;
