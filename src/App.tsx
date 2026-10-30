import React, { useState } from 'react';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Highlights } from './sections/Highlights';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { Process } from './sections/Process';
import { Pricing } from './sections/Pricing';
import { About } from './sections/About';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { projectsData, Project } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalTab, setModalTab] = useState<'preview' | 'details'>('preview');
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledBudget, setPrefilledBudget] = useState<string>('');

  const scrollToSection = (id: string) => {
    const cleanId = id.replace('#', '');
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProjectModal = (project: Project, tab: 'preview' | 'details' = 'preview') => {
    setSelectedProject(project);
    setModalTab(tab);
  };

  const handleOpenProjectById = (projectId: string) => {
    const found = projectsData.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
      setModalTab('preview');
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    scrollToSection('contact');
  };

  const handleSelectPlan = (planName: string, estimatedBudget: string) => {
    setPrefilledService(`Landing Page (${planName})`);
    setPrefilledBudget(estimatedBudget);
    scrollToSection('contact');
  };

  const handleRequestProjectFromModal = (projectName: string, category: string) => {
    setPrefilledService(category);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1220] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* Slim Fixed Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Sticky Top Navigation */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onStartProject={() => scrollToSection('contact')}
          onExploreWork={() => scrollToSection('work')}
          onOpenProjectDetail={handleOpenProjectById}
        />

        {/* Highlights / Value Proposition */}
        <Highlights />

        {/* Featured Projects Showcase */}
        <Projects onOpenModal={handleOpenProjectModal} />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Why Choose Me / Comparison Matrix */}
        <WhyChooseMe />

        {/* Working Process */}
        <Process />

        {/* Pricing Section & Interactive Cost Estimator */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* About Section */}
        <About onContactClick={() => scrollToSection('contact')} />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ onAskQuestion={() => scrollToSection('contact')} />

        {/* Final CTA Banner */}
        <FinalCTA
          onStartProject={() => scrollToSection('contact')}
          onContactMe={() => scrollToSection('contact')}
        />

        {/* Contact Form & Direct Inquiries */}
        <Contact
          prefilledService={prefilledService}
          prefilledBudget={prefilledBudget}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavClick={scrollToSection}
        onSelectService={handleSelectService}
      />

      {/* Interactive Project Preview & Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          initialTab={modalTab}
          onClose={() => setSelectedProject(null)}
          onRequestProject={handleRequestProjectFromModal}
        />
      )}
    </div>
  );
}
