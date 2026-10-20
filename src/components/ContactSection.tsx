import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { validateContactForm } from '../utils/cvGenerator';
import { ContactFormState } from '../types';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Copy, Check, Github, Linkedin, Twitter, Instagram, ArrowUpRight, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sentHistory, setSentHistory] = useState<ContactFormState[]>([]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // ignore
    }
  };

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(form);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSentHistory((prev) => [form, ...prev]);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 700);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 border-b border-neutral-900 bg-neutral-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Hubungi Saya
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Mari diskusikan proyek, konsultasi arsitektur, atau peluang kerja sama.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Terbuka untuk posisi full-time, konsultasi teknis arsitektur web, maupun proyek kontrak berskala strategis.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                  Email Utama
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-amber-400 hover:text-amber-300 bg-amber-400/10 rounded transition-colors cursor-pointer"
                  title="Salin email ke clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Tersalin!' : 'Salin Email'}</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-800 text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-amber-400 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <div className="text-xs text-neutral-400">
                    Respons biasa dalam kurun 24 jam
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Pesan Cepat WhatsApp
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Konsultasi Instan
                    </div>
                    <div className="text-xs text-neutral-400">
                      Tersedia untuk obrolan langsung
                    </div>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Chat WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Tautan Media Sosial Profesional
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/70 hover:border-neutral-700 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 text-sm text-neutral-300 group-hover:text-white">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/70 hover:border-neutral-700 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 text-sm text-neutral-300 group-hover:text-white">
                    <Github className="w-4 h-4 text-neutral-300" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/70 hover:border-neutral-700 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 text-sm text-neutral-300 group-hover:text-white">
                    <Twitter className="w-4 h-4 text-sky-400" />
                    <span>X (Twitter)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/70 hover:border-neutral-700 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 text-sm text-neutral-300 group-hover:text-white">
                    <Instagram className="w-4 h-4 text-rose-400" />
                    <span>Instagram</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Kirim Formulir Pesan
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Isi detail berikut dan saya akan meninjau pesan Anda secepatnya.
              </p>

              {/* Success Banner */}
              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="font-semibold text-emerald-300">Pesan Berhasil Terkirim!</div>
                    <div className="text-emerald-400/90">
                      Terima kasih telah menghubungi. Salinan pesan telah dicatat dan akan dibalas melalui email Anda segera.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Nama & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-medium text-neutral-300">
                      Nama Lengkap <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="e.g. Budi Pratama"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-neutral-800 focus:border-amber-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-300">
                      Alamat Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="e.g. budi@perusahaan.com"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-neutral-800 focus:border-amber-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subjek */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-medium text-neutral-300">
                    Subjek Diskusi <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder="e.g. Pengembangan Platform SaaS Baru / Rekayasa Sistem"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                      errors.subject ? 'border-rose-500 focus:border-rose-500' : 'border-neutral-800 focus:border-amber-400'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Isi Pesan */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-300">
                    Pesan Lengkap <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Ceritakan tentang proyek, timeline, atau lingkup tantangan teknis yang ingin Anda selesaikan..."
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-neutral-800 focus:border-amber-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all cursor-pointer shadow-md shadow-amber-400/10"
                >
                  {isSubmitting ? (
                    <span>Mengirim Pesan...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan Sekarang</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Sent message history verification */}
              {sentHistory.length > 0 && (
                <div className="mt-8 pt-6 border-t border-neutral-800 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                    Pesan yang Anda Kirim ({sentHistory.length}):
                  </span>
                  <div className="space-y-2">
                    {sentHistory.map((msg, i) => (
                      <div key={i} className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-300 space-y-1">
                        <div className="font-semibold text-white">{msg.subject}</div>
                        <div className="text-neutral-400 text-[11px]">Dari: {msg.name} ({msg.email})</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
