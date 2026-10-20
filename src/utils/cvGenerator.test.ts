import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, filterProjects, generatePlainTextCV } from './cvGenerator.ts';
import type { Project, TimelineItem, SkillItem } from '../types.ts';

test('validateContactForm rejects empty inputs', () => {
  const result = validateContactForm({
    name: '',
    email: 'not-an-email',
    subject: 'hi',
    message: 'short',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts valid form data', () => {
  const result = validateContactForm({
    name: 'Almas Ahmad Azizi',
    email: 'almasahmadazizi27@gmail.com',
    subject: 'Tawaran Kolaborasi Proyek FinTech',
    message: 'Halo Almas, kami ingin mendiskusikan arsitektur sistem web untuk perusahaan kami.',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('filterProjects filters correctly by category and query', () => {
  const dummyProjects: Project[] = [
    {
      id: '1',
      title: 'Pulse Analytics',
      subtitle: 'SaaS Platform',
      category: 'web',
      featured: true,
      role: 'Lead',
      timeline: '2025',
      summary: 'Real-time dashboard',
      colorGradient: 'from-blue-500 to-indigo-500',
      stack: ['React', 'TypeScript', 'Node.js'],
      metrics: [],
      caseStudy: { challenge: '', solution: '', architectureDetails: '', results: [] },
    },
    {
      id: '2',
      title: 'Spently App',
      subtitle: 'Mobile Finance',
      category: 'mobile',
      featured: false,
      role: 'Dev',
      timeline: '2025',
      summary: 'Smart budgeting',
      colorGradient: 'from-emerald-500 to-teal-500',
      stack: ['React Native', 'SQLite'],
      metrics: [],
      caseStudy: { challenge: '', solution: '', architectureDetails: '', results: [] },
    },
  ];

  // Category filter
  const mobileOnly = filterProjects(dummyProjects, 'mobile');
  assert.equal(mobileOnly.length, 1);
  assert.equal(mobileOnly[0].id, '2');

  // Search query filter
  const searched = filterProjects(dummyProjects, 'all', 'typescript');
  assert.equal(searched.length, 1);
  assert.equal(searched[0].id, '1');

  // Empty match
  const none = filterProjects(dummyProjects, 'all', 'nonexistenttermxyz');
  assert.equal(none.length, 0);
});

test('generatePlainTextCV outputs structured ATS text with user details', () => {
  const info = {
    name: 'Almas Ahmad Azizi',
    role: 'Senior Full-Stack Engineer',
    email: 'almasahmadazizi27@gmail.com',
    phone: '+62 812-3456-7890',
    location: 'Indonesia',
    bio: 'Software engineer berpengalaman',
    socials: { github: 'https://github.com', linkedin: 'https://linkedin.com' },
  };

  const timeline: TimelineItem[] = [
    {
      id: 'e1',
      title: 'Senior Engineer',
      organization: 'Tech Corp',
      location: 'Jakarta',
      period: '2023 - Present',
      type: 'work',
      description: 'Lead engineering',
      achievements: ['Reduced latency by 40%'],
      skills: ['TypeScript', 'React'],
    },
  ];

  const skills: SkillItem[] = [
    { name: 'TypeScript', category: 'technical', proficiency: 'Ahli', years: 5 },
  ];

  const cv = generatePlainTextCV(info, timeline, skills);
  assert.ok(cv.includes('ALMAS AHMAD AZIZI'));
  assert.ok(cv.includes('almasahmadazizi27@gmail.com'));
  assert.ok(cv.includes('Reduced latency by 40%'));
  assert.ok(cv.includes('PENGALAMAN KERJA'));
});
