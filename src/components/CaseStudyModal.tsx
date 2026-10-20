import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, TrendingUp, Calendar, User } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl border border-neutral-800 bg-neutral-900 text-neutral-100 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
            <span>Studi Kasus Proyek</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400 uppercase font-semibold">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Tutup modal studi kasus"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Header Title & Subtitle */}
          <div className="space-y-3">
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-base text-neutral-300 font-medium">
              {project.subtitle}
            </p>

            {/* Unboxed Metadata Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-400 border-t border-neutral-800/80 pt-3">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-neutral-500" />
                <span>{project.role}</span>
              </span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                <span>{project.timeline}</span>
              </span>
            </div>
          </div>

          {/* Impact Metrics Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
            {project.metrics.map((metric, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs text-neutral-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Challenge */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Tantangan & Latar Belakang</span>
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950/40 p-4 rounded-xl border border-neutral-800/50">
              {project.caseStudy.challenge}
            </p>
          </div>

          {/* Solution & Implementation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Solusi Rekayasa & Pendekatan Teknis</span>
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950/40 p-4 rounded-xl border border-neutral-800/50">
              {project.caseStudy.solution}
            </p>
          </div>

          {/* Architecture Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Sorotan Arsitektur Sistem</span>
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950/40 p-4 rounded-xl border border-neutral-800/50">
              {project.caseStudy.architectureDetails}
            </p>
          </div>

          {/* Concrete Results */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Dampak & Hasil Terukur</span>
            </h4>
            <ul className="space-y-2.5">
              {project.caseStudy.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack List */}
          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">Teknologi yang Digunakan:</span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-neutral-300 bg-neutral-950 rounded border border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                <span>Kunjungi Demo Langsung</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Kode Sumber</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
