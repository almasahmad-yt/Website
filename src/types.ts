export type ProjectCategory = 'all' | 'web' | 'mobile' | 'system' | 'ai';

export interface ProjectImpact {
  label: string;
  value: string;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  architectureDetails: string;
  results: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'system' | 'ai';
  summary: string;
  featured: boolean;
  role: string;
  timeline: string;
  stack: string[];
  metrics: ProjectImpact[];
  caseStudy: CaseStudy;
  liveUrl?: string;
  githubUrl?: string;
  colorGradient: string;
}

export type TimelineType = 'work' | 'education' | 'certification' | 'organization';

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: TimelineType;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  category: 'technical' | 'soft' | 'tool';
  proficiency: string; // e.g., 'Ahli' | 'Lanjutan' | 'Kompeten'
  years: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  publishDate: string;
  tags: string[];
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
