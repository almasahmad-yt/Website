import React, { useState, useEffect } from 'react';
import { X, Printer, Download, Copy, Check, FileText } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE_DATA, SKILLS_DATA } from '../data/portfolioData';
import { generatePlainTextCV } from '../utils/cvGenerator';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const text = generatePlainTextCV(PERSONAL_INFO, TIMELINE_DATA, SKILLS_DATA);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_${PERSONAL_INFO.name.replace(/\s+/g, '_')}_2026.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = async () => {
    const text = generatePlainTextCV(PERSONAL_INFO, TIMELINE_DATA, SKILLS_DATA);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const workItems = TIMELINE_DATA.filter((i) => i.type === 'work');
  const eduItems = TIMELINE_DATA.filter((i) => i.type === 'education');
  const certItems = TIMELINE_DATA.filter((i) => i.type === 'certification');
  const orgItems = TIMELINE_DATA.filter((i) => i.type === 'organization');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="relative w-full max-w-4xl my-6 rounded-2xl border border-neutral-800 bg-neutral-900 text-neutral-100 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header (no-print) */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <h3 id="cv-modal-title" className="text-sm font-bold text-white">
              Curriculum Vitae (CV) — {PERSONAL_INFO.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              title="Cetak atau simpan ke PDF via browser print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors cursor-pointer"
              title="Unduh berkas teks ATS-friendly"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh .TXT</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors cursor-pointer"
              title="Salin isi CV ke clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin' : 'Salin'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors ml-2 cursor-pointer"
              aria-label="Tutup modal CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Paper Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-neutral-950 text-neutral-200 font-sans print:p-0 print:bg-white print:text-black">
          <div className="max-w-3xl mx-auto space-y-8 print:space-y-6">
            {/* CV Header */}
            <div className="border-b border-neutral-800 print:border-neutral-300 pb-6 space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-white print:text-black">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-semibold text-amber-400 print:text-neutral-700">
                {PERSONAL_INFO.role}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400 print:text-neutral-600 pt-2 font-mono">
                <span>{PERSONAL_INFO.email}</span>
                <span aria-hidden="true">·</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span aria-hidden="true">·</span>
                <span>{PERSONAL_INFO.location}</span>
                <span aria-hidden="true">·</span>
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white print:text-neutral-800">
                  LinkedIn
                </a>
                <span aria-hidden="true">·</span>
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="underline hover:text-white print:text-neutral-800">
                  GitHub
                </a>
              </div>
            </div>

            {/* Profil Ringkas */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-amber-400 print:text-black border-b border-neutral-800 print:border-neutral-300 pb-1">
                Profil Ringkas
              </h2>
              <p className="text-sm text-neutral-300 print:text-neutral-800 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Keahlian Utama */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-amber-400 print:text-black border-b border-neutral-800 print:border-neutral-300 pb-1">
                Keahlian & Kompetensi
              </h2>
              <div className="text-xs text-neutral-300 print:text-neutral-800 space-y-1.5 leading-relaxed">
                <p>
                  <strong className="text-white print:text-black font-semibold">Teknis:</strong>{' '}
                  {SKILLS_DATA.filter((s) => s.category === 'technical').map((s) => s.name).join(', ')}
                </p>
                <p>
                  <strong className="text-white print:text-black font-semibold">Soft Skills:</strong>{' '}
                  {SKILLS_DATA.filter((s) => s.category === 'soft').map((s) => s.name).join(', ')}
                </p>
                <p>
                  <strong className="text-white print:text-black font-semibold">Tools:</strong>{' '}
                  {SKILLS_DATA.filter((s) => s.category === 'tool').map((s) => s.name).join(', ')}
                </p>
              </div>
            </div>

            {/* Pengalaman Kerja */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-amber-400 print:text-black border-b border-neutral-800 print:border-neutral-300 pb-1">
                Pengalaman Kerja
              </h2>
              <div className="space-y-5">
                {workItems.map((job) => (
                  <div key={job.id} className="space-y-2 page-break-inside-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="text-sm font-bold text-white print:text-black">
                        {job.title} — <span className="font-semibold text-neutral-300 print:text-neutral-700">{job.organization}</span>
                      </div>
                      <div className="text-xs font-mono text-neutral-400 print:text-neutral-600">
                        {job.period} · {job.location}
                      </div>
                    </div>
                    <p className="text-xs text-neutral-400 print:text-neutral-700 leading-relaxed">
                      {job.description}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 print:text-neutral-800 pl-1">
                      {job.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pendidikan */}
            <div className="space-y-3 page-break-inside-avoid">
              <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-amber-400 print:text-black border-b border-neutral-800 print:border-neutral-300 pb-1">
                Pendidikan
              </h2>
              {eduItems.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="text-sm font-bold text-white print:text-black">
                      {edu.title}
                    </div>
                    <div className="text-xs font-mono text-neutral-400 print:text-neutral-600">
                      {edu.period}
                    </div>
                  </div>
                  <div className="text-xs font-medium text-neutral-300 print:text-neutral-700">
                    {edu.organization} ({edu.location})
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-400 print:text-neutral-800 pt-1">
                    {edu.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sertifikasi */}
            {certItems.length > 0 && (
              <div className="space-y-3 page-break-inside-avoid">
                <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-amber-400 print:text-black border-b border-neutral-800 print:border-neutral-300 pb-1">
                  Sertifikasi Profesional
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certItems.map((cert) => (
                    <div key={cert.id} className="p-3 rounded-lg border border-neutral-800/80 bg-neutral-900/30 print:border-neutral-300 print:bg-transparent space-y-1">
                      <div className="text-xs font-bold text-white print:text-black">
                        {cert.title}
                      </div>
                      <div className="text-[11px] text-neutral-400 print:text-neutral-600">
                        {cert.organization} · {cert.period}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Footer (no-print) */}
        <div className="no-print flex items-center justify-between px-6 py-3 border-t border-neutral-800 bg-neutral-950 text-xs text-neutral-400">
          <span>Tips: Klik "Cetak / PDF" untuk menyimpan berkas CV siap kirim lamaran.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            Tutup Pratinjau
          </button>
        </div>
      </div>
    </div>
  );
};
