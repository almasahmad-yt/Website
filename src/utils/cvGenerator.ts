import type { Project, TimelineItem, SkillItem, ContactFormState } from '../types.ts';

/**
 * Validates the contact form inputs
 */
export function validateContactForm(form: ContactFormState): { isValid: boolean; errors: Partial<Record<keyof ContactFormState, string>> } {
  const errors: Partial<Record<keyof ContactFormState, string>> = {};

  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Nama lengkap wajib diisi minimal 2 karakter.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email || !emailRegex.test(form.email.trim())) {
    errors.email = 'Format alamat email tidak valid.';
  }

  if (!form.subject || form.subject.trim().length < 3) {
    errors.subject = 'Subjek pesan wajib diisi minimal 3 karakter.';
  }

  if (!form.message || form.message.trim().length < 10) {
    errors.message = 'Pesan wajib diisi minimal 10 karakter agar konteks jelas.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Filters projects based on category and search query
 */
export function filterProjects(
  projects: Project[],
  category: string,
  searchQuery: string = ''
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory = category === 'all' || project.category === category;
    if (!matchesCategory) return false;

    if (!query) return true;

    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesSummary = project.summary.toLowerCase().includes(query);
    const matchesStack = project.stack.some((tech) => tech.toLowerCase().includes(query));
    const matchesRole = project.role.toLowerCase().includes(query);

    return matchesTitle || matchesSummary || matchesStack || matchesRole;
  });
}

/**
 * Generates an ATS-friendly, clean Markdown / Plain-text CV
 */
export function generatePlainTextCV(
  info: {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    socials: { github: string; linkedin: string };
  },
  timeline: TimelineItem[],
  skills: SkillItem[]
): string {
  const workItems = timeline.filter((item) => item.type === 'work');
  const eduItems = timeline.filter((item) => item.type === 'education');
  const certItems = timeline.filter((item) => item.type === 'certification');

  let output = `${info.name.toUpperCase()}\n`;
  output += `${info.role}\n`;
  output += `Email: ${info.email} | Telepon: ${info.phone} | Lokasi: ${info.location}\n`;
  output += `GitHub: ${info.socials.github} | LinkedIn: ${info.socials.linkedin}\n\n`;

  output += `RINGKASAN PROFESIONAL\n${'='.repeat(40)}\n`;
  output += `${info.bio}\n\n`;

  output += `KEAHLIAN UTAMA\n${'='.repeat(40)}\n`;
  const techSkills = skills.filter((s) => s.category === 'technical').map((s) => s.name).join(', ');
  const softSkills = skills.filter((s) => s.category === 'soft').map((s) => s.name).join(', ');
  const tools = skills.filter((s) => s.category === 'tool').map((s) => s.name).join(', ');
  output += `Teknis: ${techSkills}\n`;
  output += `Soft Skills: ${softSkills}\n`;
  output += `Tools & Platform: ${tools}\n\n`;

  output += `PENGALAMAN KERJA\n${'='.repeat(40)}\n`;
  workItems.forEach((job) => {
    output += `\n${job.title} — ${job.organization} (${job.period})\n`;
    output += `Lokasi: ${job.location}\n`;
    output += `${job.description}\n`;
    job.achievements.forEach((ach) => {
      output += `  • ${ach}\n`;
    });
    output += `Keahlian: ${job.skills.join(', ')}\n`;
  });

  output += `\nPENDIDIKAN\n${'='.repeat(40)}\n`;
  eduItems.forEach((edu) => {
    output += `\n${edu.title} — ${edu.organization} (${edu.period})\n`;
    output += `${edu.description}\n`;
    edu.achievements.forEach((ach) => {
      output += `  • ${ach}\n`;
    });
  });

  if (certItems.length > 0) {
    output += `\nSERTIFIKASI PROFESIONAL\n${'='.repeat(40)}\n`;
    certItems.forEach((cert) => {
      output += `\n${cert.title} — ${cert.organization} (${cert.period})\n`;
      output += `${cert.description}\n`;
    });
  }

  return output;
}
