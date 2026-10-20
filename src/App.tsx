import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ResumeSection } from './components/ResumeSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ArticleModal } from './components/ArticleModal';
import { CvModal } from './components/CvModal';
import { Project, Article } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Halaman Beranda (Homepage) */}
        <HeroSection onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. Halaman Tentang Saya (About Me) */}
        <AboutSection />

        {/* 3. Portofolio / Contoh Karya (Portfolio) */}
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Resume atau CV */}
        <ResumeSection onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 6. Blog atau Tulisan */}
        <BlogSection onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 5. Halaman Kontak (Contact) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
