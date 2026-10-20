import React, { useState } from 'react';
import { TIMELINE_DATA, PERSONAL_INFO, SKILLS_DATA } from '../data/portfolioData';
import { TimelineType } from '../types';
import { generatePlainTextCV } from '../utils/cvGenerator';
import { Download, Printer, Briefcase, GraduationCap, Award, Users, ChevronRight, FileText } from 'lucide-react';

interface ResumeSectionProps {
  onOpenCvModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenCvModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | TimelineType>('all');

  const filteredTimeline = TIMELINE_DATA.filter(
    (item) => activeTab === 'all' || item.type === activeTab
  );

  const tabs: { label: string; value: 'all' | TimelineType }[] = [
    { label: 'Semua Riwayat', value: 'all' },
    { label: 'Pengalaman Kerja', value: 'work' },
    { label: 'Pendidikan', value: 'education' },
    { label: 'Sertifikasi', value: 'certification' },
    { label: 'Organisasi', value: 'organization' },
  ];

  const getIcon = (type: TimelineType) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-amber-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-sky-400" />;
      case 'certification':
        return <Award className="w-4 h-4 text-emerald-400" />;
      case 'organization':
        return <Users className="w-4 h-4 text-purple-400" />;
    }
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

  return (
    <section id="resume" className="py-20 md:py-28 border-b border-neutral-900 bg-neutral-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header & Download Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
              Resume & Riwayat Karier
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Rekam jejak profesional, pendidikan, dan sertifikasi.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              Pengalaman kerja nyata dalam merancang arsitektur web modern, memimpin kolaborasi tim, dan memvalidasi keahlian lewat sertifikasi resmi.
            </p>
          </div>

          {/* Download Buttons Group */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-sm"
              aria-label="Buka Pratinjau & Unduh PDF CV"
            >
              <Printer className="w-4 h-4" />
              <span>Pratinjau & Cetak PDF CV</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              aria-label="Unduh Format Teks ATS"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Format ATS (.txt)</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="inline-flex p-1 bg-neutral-900 rounded-lg border border-neutral-800 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.value
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline View */}
        <div className="relative border-l border-neutral-800 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-10">
          {filteredTimeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                {getIcon(item.type)}
              </div>

              {/* Item Card */}
              <div className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-neutral-700 transition-colors space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-sm font-semibold text-neutral-300">
                      {item.organization}
                    </div>
                  </div>

                  {/* Unboxed Metadata: Period & Location */}
                  <div className="text-xs font-mono text-neutral-400 flex items-center gap-2 pt-1 sm:pt-0">
                    <span>{item.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements List */}
                {item.achievements.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                      Pencapaian Kunci:
                    </span>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                          <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills used */}
                {item.skills && item.skills.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] font-mono text-neutral-400 bg-neutral-950 rounded border border-neutral-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
