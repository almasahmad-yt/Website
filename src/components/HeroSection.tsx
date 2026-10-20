import React from 'react';
import { ArrowDown, ExternalLink, Github, Linkedin, Mail, ShieldCheck, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  return (
    <section id="beranda" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-neutral-900">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero: 2-column balanced grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker with clean unboxed text */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span>{PERSONAL_INFO.role}</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400 font-normal">Tersedia untuk Proyek Baru</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
              Membangun sistem web skalabel & pengalaman produk berkinerja tinggi.
            </h1>

            {/* Lead paragraph */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
              Halo, saya <strong className="text-neutral-100 font-semibold">{PERSONAL_INFO.name}</strong>. Saya merancang arsitektur aplikasi web modern yang kokoh, cepat, dan intuitif—menghubungkan kebutuhan bisnis dengan rekayasa perangkat lunak berstandar global.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#portofolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all duration-150 active:scale-95 shadow-md shadow-amber-400/10 cursor-pointer whitespace-nowrap"
              >
                <span>Jelajahi Portofolio</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Unduh Resume (CV)</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Links Strip */}
            <div className="pt-4 flex items-center gap-6 text-sm text-neutral-400">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Terhubung:</span>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Architecture Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-neutral-400">almas-system-stack.ts</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Code / Architecture preview */}
              <div className="py-4 space-y-3 font-mono text-xs leading-relaxed">
                <p className="text-neutral-300">
                  <span className="text-amber-400">const</span> developer = &#123;
                </p>
                <p className="pl-4 text-neutral-300">
                  nama: <span className="text-emerald-400">"{PERSONAL_INFO.name}"</span>,
                </p>
                <p className="pl-4 text-neutral-300">
                  peran: <span className="text-emerald-400">"{PERSONAL_INFO.role}"</span>,
                </p>
                <p className="pl-4 text-neutral-300">
                  keahlianUtama: [
                  <span className="text-amber-300">"React 19"</span>,{' '}
                  <span className="text-amber-300">"TypeScript"</span>,{' '}
                  <span className="text-amber-300">"Next.js"</span>,{' '}
                  <span className="text-amber-300">"Node.js"</span>,{' '}
                  <span className="text-amber-300">"Cloud"</span>
                  ],
                </p>
                <p className="pl-4 text-neutral-300">
                  fokusArsitektur: <span className="text-emerald-400">"High Availability & Low Latency"</span>,
                </p>
                <p className="pl-4 text-neutral-300">
                  standarKualitas: <span className="text-amber-300">"WCAG AA · 99%+ Uptime · Clean Code"</span>
                </p>
                <p className="text-neutral-300">&#125;;</p>
              </div>

              {/* Quick interactive highlight footer */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  <span>TypeScript 5.8 · Strict Mode</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>5+ Th Pengalaman</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Strip below hero split with tabular numerals */}
        <div className="mt-16 pt-8 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
