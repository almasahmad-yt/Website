import React, { useState } from 'react';
import { PERSONAL_INFO, SKILLS_DATA } from '../data/portfolioData';
import { CheckCircle2, Code2, Users, Wrench, Sparkles, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [skillCategory, setSkillCategory] = useState<'all' | 'technical' | 'soft' | 'tool'>('all');

  const filteredSkills = SKILLS_DATA.filter((skill) =>
    skillCategory === 'all' ? true : skill.category === skillCategory
  );

  return (
    <section id="tentang" className="py-20 md:py-28 border-b border-neutral-900 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Tentang Saya
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Memadukan visi produk, kedalaman teknis, dan dedikasi pada keandalan sistem.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* 3 Pillars of Unique Value Proposition (USP) */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Nilai Jual Unik (Unique Value Proposition)</span>
            </h3>
            <span className="text-xs text-neutral-500 font-mono">Prinsip Kerja</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERSONAL_INFO.uniqueValues.map((usp) => (
              <div
                key={usp.index}
                className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-colors space-y-4"
              >
                <div className="text-2xl font-bold font-mono text-amber-400/90">
                  {usp.index}
                </div>
                <h4 className="text-lg font-semibold text-white">
                  {usp.title}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Keahlian (Skills) Section with interactive filter tabs */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-800">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-amber-400" />
                <span>Keahlian & Penguasaan Domain</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Kombinasi kemampuan rekayasa teknis, soft skills kepemimpinan, dan alat kerja modern.
              </p>
            </div>

            {/* Interactive Filter Control: Segmented Buttons */}
            <div className="inline-flex p-1 bg-neutral-900 rounded-lg border border-neutral-800 shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setSkillCategory('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  skillCategory === 'all'
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Semua ({SKILLS_DATA.length})
              </button>
              <button
                onClick={() => setSkillCategory('technical')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  skillCategory === 'technical'
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Teknis
              </button>
              <button
                onClick={() => setSkillCategory('soft')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  skillCategory === 'soft'
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Soft Skills
              </button>
              <button
                onClick={() => setSkillCategory('tool')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  skillCategory === 'tool'
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Tools
              </button>
            </div>
          </div>

          {/* Clean Skill Cards Grid: zero-pill unboxed text metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/30 hover:bg-neutral-900/60 transition-colors flex items-center justify-between"
              >
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-neutral-200">
                    {skill.name}
                  </div>
                  {/* Clean unboxed metadata with separators */}
                  <div className="text-xs text-neutral-400 flex items-center gap-2">
                    <span className="capitalize">{skill.category === 'technical' ? 'Keahlian Teknis' : skill.category === 'soft' ? 'Soft Skill' : 'Tool & Platform'}</span>
                    <span aria-hidden="true">·</span>
                    <span>{skill.years} Th Pengalaman</span>
                  </div>
                </div>

                <div className="text-right shrink-0 ml-3">
                  <span className="text-xs font-semibold text-amber-400 font-mono">
                    {skill.proficiency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Mission statement banner */}
        <div className="p-8 rounded-2xl border border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Komitmen Rekayasa & Standar Kerja</span>
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Selalu mengutamakan arsitektur yang mudah diuji (testable), kepatuhan aksesibilitas universal, dan performa tinggi tanpa kompromi keindahan antarmuka.
            </p>
          </div>
          <a
            href="#kontak"
            className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Mulai Diskusi Proyek
          </a>
        </div>
      </div>
    </section>
  );
};
