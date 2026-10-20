import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { filterProjects } from '../utils/cvGenerator';
import { Search, ArrowRight, ExternalLink, Github, Sparkles } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = filterProjects(PROJECTS_DATA, selectedCategory, searchQuery);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'Semua Proyek', value: 'all' },
    { label: 'Web Applications', value: 'web' },
    { label: 'Mobile & PWA', value: 'mobile' },
    { label: 'Sistem & Arsitektur', value: 'system' },
  ];

  return (
    <section id="portofolio" className="py-20 md:py-28 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Portofolio & Studi Kasus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Karya terpilih dengan hasil nyata dan rekayasa terukur.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Setiap proyek dirancang dengan fokus mendalam pada kebutuhan pengguna, keandalan performa di lingkungan produksi, dan kode yang mudah dikembangkan.
          </p>
        </div>

        {/* Filter Bar & Search Container */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
          {/* Segmented Filter Control */}
          <div className="inline-flex p-1 bg-neutral-900 rounded-lg border border-neutral-800 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari teknologi atau nama proyek..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-neutral-300"
              >
                Hapus
              </button>
            )}
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-xl border border-neutral-800 bg-neutral-900/30 space-y-3">
            <p className="text-neutral-400 text-sm">Tidak ditemukan proyek yang cocok dengan kata kunci "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-amber-400 hover:underline cursor-pointer"
            >
              Reset semua filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-neutral-700 transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header Mockup */}
                <div className={`p-6 bg-gradient-to-br ${project.colorGradient} border-b border-neutral-800/80 relative overflow-hidden`}>
                  <div className="flex items-center justify-between pb-3 text-xs font-mono text-neutral-400">
                    <span className="uppercase tracking-wider">{project.category}</span>
                    <span className="text-neutral-500">{project.timeline}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-medium line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Impact preview pill */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-neutral-300">Hasil Kunci:</span>
                    <span className="font-mono font-bold text-amber-300">
                      {project.metrics[0]?.value} ({project.metrics[0]?.label})
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Unboxed Metadata: Peran dan Timeline */}
                    <div className="text-xs text-neutral-400 flex items-center gap-2">
                      <span className="text-neutral-300 font-medium">Peran: {project.role}</span>
                    </div>

                    {/* Tech Stack List */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono text-neutral-300 bg-neutral-950/80 rounded border border-neutral-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link to Case Study */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <span>Pelajari Studi Kasus Lengkap</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-neutral-400 hover:text-white rounded transition-colors"
                          aria-label={`Demo langsung ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-neutral-400 hover:text-white rounded transition-colors"
                          aria-label={`Repositori ${project.title}`}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
