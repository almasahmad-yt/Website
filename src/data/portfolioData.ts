import { Project, TimelineItem, SkillItem, Article } from '../types';

export const PERSONAL_INFO = {
  name: 'Almas Ahmad Azizi',
  role: 'Mahasiswa Teknologi Rekayasa Elektro, Universitas Gadjah Mada',
  headline: 'Membangun aplikasi web berskala tinggi, arsitektur cloud tangguh, dan antarmuka produk digital berkelas dunia.',
  bio: 'Seorang Software Engineer & Product Builder dengan pengalaman mendalam dalam merancang sistem web end-to-end, dari arsitektur backend berkinerja tinggi hingga micro-interactions frontend yang memanjakan pengguna. Memiliki dedikasi kuat pada kode bersih, skalabilitas teruji, dan dampak bisnis terukur.',
  location: 'Indonesia (Tersedia untuk Remote / Hybrid Global)',
  email: 'almasahmadazizi27@gmail.com',
  phone: '+62 812-3456-7890',
  whatsappUrl: 'https://wa.me/6281234567890?text=Halo%20Almas%20Ahmad%20Azizi,%20saya%20tertarik%20untuk%20berdiskusi%20proyek.',
  socials: {
    github: 'https://github.com/almasahmadazizi',
    linkedin: 'https://linkedin.com/in/almasahmadazizi',
    twitter: 'https://x.com/almasazizi',
    instagram: 'https://instagram.com/almasahmadazizi',
  },
  stats: [
    { label: 'Tahun Pengalaman', value: '5+' },
    { label: 'Proyek Selesai', value: '28+' },
    { label: 'Pengguna Aktif Terlayani', value: '450K+' },
    { label: 'Uptime Sistem Produksi', value: '99.98%' },
  ],
  uniqueValues: [
    {
      index: '01',
      title: 'Rekayasa Berorientasi Dampak Nyata',
      description: 'Fokus tidak hanya sekadar pada baris kode yang elegan, namun bagaimana arsitektur teknis mampu mempercepat waktu rilis pasar, menekan latensi, dan melipatgandakan kepuasan pengguna akhir.',
    },
    {
      index: '02',
      title: 'Jembatan Harmonis Desain & Sistem',
      description: 'Mampu berpikir seperti desainer produk saat menyusun hierarki antarmuka, dan berpikir seperti arsitek sistem saat merancang database terdistribusi dan jalur pipeline API.',
    },
    {
      index: '03',
      title: 'Disiplin Kualitas & Keandalan Produksi',
      description: 'Penerapan pengujian otomatis komprehensif, observabilitas metrik performa, pemenuhan standar aksesibilitas WCAG, serta penanganan error yang tangguh tanpa toleransi kegagalan senyap.',
    },
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  // Technical - Frontend
  { name: 'TypeScript & JavaScript (ESNext)', category: 'technical', proficiency: 'Ahli', years: 5 },
  { name: 'React 19 & Next.js App Router', category: 'technical', proficiency: 'Ahli', years: 5 },
  { name: 'Tailwind CSS & Modern CSS Architecture', category: 'technical', proficiency: 'Ahli', years: 4 },
  { name: 'State Management & TanStack Query', category: 'technical', proficiency: 'Ahli', years: 4 },
  { name: 'Web Performance Optimization (Core Web Vitals)', category: 'technical', proficiency: 'Ahli', years: 4 },
  // Technical - Backend & Cloud
  { name: 'Node.js & Express / NestJS', category: 'technical', proficiency: 'Ahli', years: 5 },
  { name: 'PostgreSQL, Redis & Prisma / Drizzle', category: 'technical', proficiency: 'Lanjutan', years: 4 },
  { name: 'RESTful API & GraphQL Schema Design', category: 'technical', proficiency: 'Ahli', years: 4 },
  { name: 'Docker, Containerization & CI/CD Pipelines', category: 'technical', proficiency: 'Lanjutan', years: 3 },
  { name: 'Cloud Architecture (GCP & AWS Serverless)', category: 'technical', proficiency: 'Lanjutan', years: 3 },
  // Soft Skills
  { name: 'Kepemimpinan Teknis & Mentoring Tim', category: 'soft', proficiency: 'Ahli', years: 4 },
  { name: 'Komunikasi Lintas Divisi (Product, Design, Exec)', category: 'soft', proficiency: 'Ahli', years: 5 },
  { name: 'Pemecahan Masalah Kompleks & Root Cause Analysis', category: 'soft', proficiency: 'Ahli', years: 5 },
  { name: 'Manajemen Waktu & Metodologi Agile/Scrum', category: 'soft', proficiency: 'Ahli', years: 5 },
  // Tools
  { name: 'Git, GitHub Workflows & Code Review', category: 'tool', proficiency: 'Ahli', years: 5 },
  { name: 'Figma & UI Prototyping Systems', category: 'tool', proficiency: 'Lanjutan', years: 4 },
  { name: 'Postman, Playwright & Vitest Testing', category: 'tool', proficiency: 'Ahli', years: 4 },
  { name: 'Linux System Administration & Terminal Tooling', category: 'tool', proficiency: 'Lanjutan', years: 4 },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'pulse-analytics-platform',
    title: 'Pulse SaaS Enterprise Analytics',
    subtitle: 'Platform Dasbor Analisis Real-Time untuk B2B FinTech',
    category: 'web',
    featured: true,
    role: 'Lead Frontend Engineer & System Architect',
    timeline: '6 Bulan (2025 - 2026)',
    summary: 'Platform visualisasi analitik terdistribusi dengan pemrosesan streaming data transaksi finansial secara real-time untuk lebih dari 200+ klien korporasi.',
    colorGradient: 'from-blue-600/30 to-indigo-600/10',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Chart.js', 'Node.js', 'PostgreSQL'],
    metrics: [
      { label: 'Pengurangan Latensi Query', value: '-65%' },
      { label: 'Volume Transaksi / Detik', value: '12.5K TPS' },
      { label: 'Skor Lighthouse Performa', value: '99/100' },
    ],
    caseStudy: {
      challenge: 'Klien korporasi mengalami bottleneck saat memuat jutaan log transaksi harian pada tabel biasa, mengakibatkan UI freeze dan penundaan keputusan operasional finansial.',
      solution: 'Merancang arsitektur virtualisasi rendering tabel berbasis windowing dengan kompresi payload streaming via WebSockets, serta caching multi-layer pada edge server.',
      architectureDetails: 'Frontend mengadopsi asynchronous pipeline processing dengan Web Workers untuk melakukan aggregasi kalkulasi numerik di latar belakang tanpa menghambat main UI thread.',
      results: [
        'Waktu pemuatan halaman berkurang drastis dari 4.8 detik menjadi hanya 0.6 detik.',
        'Menghemat bandwidth transfer data hingga 42% melalui optimasi serialisasi data biner.',
        'Mendapatkan adopsi 100% oleh 24 klien enterprise tier-1 di kuartal pertama peluncuran.',
      ],
    },
    liveUrl: 'https://example.com/pulse-preview',
    githubUrl: 'https://github.com/almasahmadazizi/pulse-analytics',
  },
  {
    id: 'spently-smart-finance',
    title: 'Spently Mobile Budgeting Ecosystem',
    subtitle: 'Aplikasi Keuangan Pribadi & Perencanaan Anggaran Cerdas',
    category: 'mobile',
    featured: true,
    role: 'Full-Stack Developer & UI Designer',
    timeline: '4 Bulan (2025)',
    summary: 'Aplikasi pengelolaan keuangan modern dengan pelacakan arus kas otomatis, kategorisasi pengeluaran berbasis machine learning, dan kolaborasi anggaran keluarga.',
    colorGradient: 'from-emerald-600/30 to-teal-600/10',
    stack: ['React Native / PWA', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'SQLite', 'Docker'],
    metrics: [
      { label: 'Pengguna Terdaftar', value: '180K+' },
      { label: 'Peningkatan Tabungan Pengguna', value: '+28%' },
      { label: 'Crash-Free Session Rate', value: '99.94%' },
    ],
    caseStudy: {
      challenge: 'Aplikasi finansial konvensional seringkali rumit, memerlukan input manual yang membosankan, dan tidak memberikan wawasan prediksi pengeluaran masa depan.',
      solution: 'Membangun antarmuka mobile-first yang intuitif dengan integrasi OCR struk belanja dan algoritma pengelompokan pola pengeluaran periodik secara cerdas.',
      architectureDetails: 'Menghadirkan arsitektur offline-first dengan sinkronisasi CRDT (Conflict-Free Replicated Data Types) sehingga aplikasi tetap cepat dan lancar meski tanpa koneksi internet.',
      results: [
        'Mencapai rating 4.8/5 di ulasan pengguna dengan lebih dari 15.000 ulasan positif.',
        'Waktu rata-rata pencatatan transaksi terpangkas dari 45 detik menjadi 5 detik.',
        'Memenangkan penghargaan Aplikasi Inovasi Finansial Mandiri 2025.',
      ],
    },
    liveUrl: 'https://example.com/spently-demo',
    githubUrl: 'https://github.com/almasahmadazizi/spently-mobile',
  },
  {
    id: 'aether-design-system',
    title: 'Aether Unified UI Component Architecture',
    subtitle: 'Sistem Desain Multi-Platform Berstandar Aksesibilitas WCAG AA',
    category: 'system',
    featured: false,
    role: 'Principal Design Technologist',
    timeline: '5 Bulan (2024)',
    summary: 'Sistem desain terpadu dengan 45+ komponen UI aksesibel, token tema dinamis, dokumentasi interaktif, dan integrasi otomatis ke workflow Figma-to-Code.',
    colorGradient: 'from-purple-600/30 to-pink-600/10',
    stack: ['TypeScript', 'React', 'Storybook', 'Tailwind CSS', 'Radix Primitives', 'Vitest'],
    metrics: [
      { label: 'Efisiensi Waktu Tim Frontend', value: '+40%' },
      { label: 'Komponen Terstandarisasi', value: '48 Unit' },
      { label: 'Kesesuaian Aksesibilitas', value: '100% AA' },
    ],
    caseStudy: {
      challenge: 'Sebanyak 6 produk internal perusahaan memiliki inkonsistensi visual, duplikasi logika form validation, dan masalah aksesibilitas keyboard navigation.',
      solution: 'Membangun repositori komponen headless berbasis Radix UI dengan styling Tailwind CSS terisolasi, strict TypeScript contracts, dan automated visual regression tests.',
      architectureDetails: 'Menggunakan semantic design tokens yang diekspor otomatis dari Figma Variables ke CSS Custom Properties via GitHub Actions.',
      results: [
        'Mempercepat sprint delivery fitur antarmuka di 4 tim produk dari 2 minggu menjadi 4 hari kerja.',
        'Mengurangi bug CSS & DOM hierarchy di production sebesar 73%.',
      ],
    },
    liveUrl: 'https://example.com/aether-system',
    githubUrl: 'https://github.com/almasahmadazizi/aether-design-system',
  },
  {
    id: 'nexus-cloud-orchestrator',
    title: 'Nexus Cloud Microservices Orchestrator',
    subtitle: 'Gateway & Monitoring Tool untuk Infrastruktur Microservices',
    category: 'system',
    featured: false,
    role: 'Backend & Infrastructure Engineer',
    timeline: '3 Bulan (2024)',
    summary: 'Gateway API cerdas dengan rate limiting dinamis, distributed tracing, pemantauan kesehatan container, dan alerting instan via webhook.',
    colorGradient: 'from-amber-600/30 to-orange-600/10',
    stack: ['Node.js', 'Go', 'Redis', 'PostgreSQL', 'Docker', 'Prometheus', 'Grafana'],
    metrics: [
      { label: 'Rata-Rata Latensi Gateway', value: '< 4ms' },
      { label: 'Throughput Puncak', value: '35K RPS' },
      { label: 'Insiden Down Downtime', value: '0 Jam' },
    ],
    caseStudy: {
      challenge: 'Trafik spike yang tak terduga sering menyebabkan service degradasi dan cascading failure pada downstream microservices.',
      solution: 'Mengimplementasikan adaptive leaky-bucket rate limiting di layer Redis dan circuit breaker pattern dengan automatic graceful fallback.',
      architectureDetails: 'Zero-allocation buffer parsing dan distributed context propagation menggunakan OpenTelemetry.',
      results: [
        'Menjamin ketersediaan layanan 99.99% selama flash-sale traffic tertinggi di kuartal 4.',
        'Deteksi dini kegagalan service dalam hitungan 250ms sebelum memengaruhi pengguna luar.',
      ],
    },
    liveUrl: 'https://example.com/nexus-orchestrator',
    githubUrl: 'https://github.com/almasahmadazizi/nexus-orchestrator',
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  // Pengalaman Kerja
  {
    id: 'exp-1',
    title: 'Senior Full-Stack Engineer',
    organization: 'Nusantara Tech Innovasi Corp.',
    location: 'Jakarta / Remote',
    period: '2023 - Sekarang',
    type: 'work',
    description: 'Memimpin arsitektur web platform SaaS B2B, mengelola tim yang terdiri dari 6 frontend & backend engineers, serta menetapkan standar kualitas rekayasa perangkat lunak.',
    achievements: [
      'Memimpin migrasi arsitektur monolitik ke modular frontend, memangkas bundle size awal sebesar 48%.',
      'Merancang sistem caching terdistribusi yang mengurangi beban database sebesar 60% pada saat puncak penggunaan.',
      'Mementori 8 junior & mid-level developers dalam clean architecture, testing, dan performance profiling.',
    ],
    skills: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'GCP', 'System Design'],
  },
  {
    id: 'exp-2',
    title: 'Full-Stack Web Developer',
    organization: 'Artha Solusi Digital Studio',
    location: 'Yogyakarta / Hybrid',
    period: '2021 - 2023',
    type: 'work',
    description: 'Mengembangkan dan merilis 14+ aplikasi web kustom untuk klien berskala nasional dan internasional di sektor fintech, retail, dan edukasi.',
    achievements: [
      'Membangun modul pembayaran multi-gateway (QRIS, Kartu Kredit, Virtual Account) dengan webhook settlement otomatis.',
      'Mengoptimalkan skor Core Web Vitals pada semua proyek klien hingga mencapai status Good di Google Search Console.',
    ],
    skills: ['React', 'Express.js', 'Tailwind CSS', 'MySQL', 'Redis', 'Docker'],
  },
  {
    id: 'exp-3',
    title: 'Frontend & UI Engineering Intern',
    organization: 'Pioneer Creative Labs',
    location: 'Bandung',
    period: '2020 - 2021',
    type: 'work',
    description: 'Membantu pembuatan antarmuka web responsif, integrasi REST API, dan implementasi visual design tokens.',
    achievements: [
      'Mengonversi 50+ wireframe Figma ke dalam komponen React yang dapat digunakan kembali.',
      'Membuat modul dokumentasi komponen interaktif internal.',
    ],
    skills: ['JavaScript', 'HTML5/CSS3', 'React', 'Figma', 'Git'],
  },

  // Pendidikan
  {
    id: 'edu-1',
    title: 'Sarjana Komputer (S.Kom) — Teknik Informatika',
    organization: 'Universitas Terkemuka Indonesia',
    location: 'Indonesia',
    period: '2017 - 2021',
    type: 'education',
    description: 'Fokus studi pada Rekayasa Perangkat Lunak, Arsitektur Sistem Komputer, dan Basis Data Terdistribusi. Lulus dengan predikat Cum Laude.',
    achievements: [
      'IPK: 3.84 / 4.00 (Predikat Cum Laude).',
      'Penelitian Skripsi: "Optimasi Kinerja dan Penanganan Konkurensi pada Sistem Web Terdistribusi".',
      'Ketua Divisi Riset & Teknologi pada Himpunan Mahasiswa Informatika.',
    ],
    skills: ['Data Structures', 'Algorithms', 'Distributed Systems', 'Software Engineering Principles'],
  },

  // Organisasi & Kepemimpinan
  {
    id: 'org-1',
    title: 'Head of Tech Community & Speaker',
    organization: 'Indonesian Web Developers Meetup',
    location: 'Nasional',
    period: '2022 - Sekarang',
    type: 'organization',
    description: 'Menginisiasi workshop bulanan, mentoring teknis, dan berbagi materi terkait arsitektur web modern bagi 3.000+ anggota komunitas pengembang lokal.',
    achievements: [
      'Menyelenggarakan 18 sesi webinar teknis dengan total peserta lebih dari 4.500 pengembang.',
      'Membina program inkubasi beasiswa coding untuk 40 talenta muda dari berbagai daerah.',
    ],
    skills: ['Public Speaking', 'Community Building', 'Technical Mentorship'],
  },

  // Sertifikasi Profesional
  {
    id: 'cert-1',
    title: 'AWS Certified Solutions Architect – Associate',
    organization: 'Amazon Web Services',
    location: 'Global',
    period: '2024 - 2027',
    type: 'certification',
    description: 'Validasi kompetensi mendalam dalam merancang infrastruktur cloud yang tangguh, aman, dan hemat biaya.',
    achievements: [
      'Skor Ujian: 890 / 1000.',
      'Keahlian: Multi-tier architecture, VPC networking, auto-scaling, disaster recovery.',
    ],
    skills: ['AWS Services', 'Cloud Security', 'High Availability Design'],
  },
  {
    id: 'cert-2',
    title: 'Meta Certified Professional Frontend Developer',
    organization: 'Meta / Coursera',
    location: 'Global',
    period: '2023 - Permanen',
    type: 'certification',
    description: 'Sertifikasi profesional tingkat lanjut meliputi arsitektur React, pengujian otomatis, dan UI/UX accessibility standards.',
    achievements: [
      'Menyelesaikan 9 modul spesialisasi dengan nilai sempurna pada capstone project.',
    ],
    skills: ['React Mastery', 'Accessibility Standards', 'UX Principles'],
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'arsitektur-web-modern-2026',
    title: 'Membangun Arsitektur Web Skalabel di Era Modern: Dari Monolit ke Modular',
    slug: 'arsitektur-web-modern-2026',
    excerpt: 'Panduan komprehensif merancang aplikasi web modern yang tahan uji saat trafik melonjak, meminimalkan latensi, dan menjaga kebersihan basis kode.',
    readTime: '6 menit baca',
    publishDate: '14 Maret 2026',
    category: 'Rekayasa Perangkat Lunak',
    tags: ['Arsitektur', 'Web Performance', 'TypeScript', 'Clean Code'],
    content: [
      'Dalam lanskap rekayasa web saat ini, tantangan terbesar pengembang bukan lagi sekadar membuat antarmuka tampil di layar, melainkan memastikan sistem tetap stabil dan responsif ketika jumlah pengguna meningkat secara eksponensial.',
      'Seringkali tim terjebak dalam dilema antara arsitektur monolit yang kaku atau microservices yang prematur. Solusi terbaik yang telah terbukti di lapangan adalah arsitektur modular terorganisir (Modular Monolith / Clean Feature Folders).',
      'Dengan memisahkan concern logika bisnis (domain), penyimpanan data (repository), dan penyajian visual (UI layer), kita dapat melakukan refaktor tanpa rasa takut akan efek samping (side effects) yang tak diinginkan.',
      'Kunci utama performa frontend modern bertumpu pada 3 pilar: (1) Minimalisasi JavaScript bundle size pada initial render, (2) Optimasi caching layer menggunakan HTTP stale-while-revalidate, dan (3) Penghindaran re-render tidak perlu melalui pemisahan state atomik.',
    ],
  },
  {
    id: 'seni-mikro-interaksi-antarmuka',
    title: 'Seni Mikro-Interaksi: Membangun Produk yang Dicintai Pengguna, Bukan Hanya Berfungsi',
    slug: 'seni-mikro-interaksi-antarmuka',
    excerpt: 'Bagaimana transisi halus, umpan balik sentuhan, dan hierarki visual yang jelas dapat mengubah aplikasi biasa menjadi pengalaman yang berkesan.',
    readTime: '5 menit baca',
    publishDate: '28 Februari 2026',
    category: 'UI/UX & Desain',
    tags: ['UI/UX', 'Micro-interactions', 'Frontend Design', 'Aksesibilitas'],
    content: [
      'Perbedaan antara produk perangkat lunak biasa dan produk luar biasa sering kali terletak pada detail mikro yang hampir tidak disadari secara sadar, namun terasa secara intuitif.',
      'Ketika pengguna menekan tombol "Kirim", apakah ada respons seketika dalam waktu di bawah 100 milidetik? Apakah status pemuatan terasa menyenangkan atau justru membingungkan?',
      'Prinsip zero-pill discipline dan tipografi yang tenang membantu mata pengguna fokus pada konten inti tanpa terganggu oleh kapsul warna-warni yang berlebihan.',
      'Aksesibilitas (WCAG) bukanlah penghambat estetika, melainkan standar moral dan profesionalisme rekayasa. Kontras rasio yang cukup, navigasi keyboard yang mulus, dan state aria yang tepat adalah fondasi dari setiap desain berkelas.',
    ],
  },
  {
    id: 'menguasai-typescript-produktivitas-tim',
    title: 'Praktik Terbaik TypeScript untuk Menghilangkan Bug di Tahap Kompilasi',
    slug: 'menguasai-typescript-produktivitas-tim',
    excerpt: 'Teknik penulisan type utility, discriminated unions, dan generic functions yang membuat basis kode tim Anda lebih kokoh dan mudah dirawat.',
    readTime: '7 menit baca',
    publishDate: '10 Januari 2026',
    category: 'Teknologi & Kode',
    tags: ['TypeScript', 'Best Practices', 'Productivity'],
    content: [
      'TypeScript telah menjadi standar de facto industri. Namun, masih banyak tim yang menggunakan tipe "any" atau "unknown" tanpa batasan yang jelas, menghilangkan manfaat proteksi tipe sejak awal.',
      'Dengan memanfaatkan "Discriminated Unions", kita dapat memodelkan status aplikasi (Loading, Success, Error) sedemikian rupa sehingga mustahil bagi antarmuka untuk berada dalam kondisi inkonsisten.',
      'Menerapkan strict mode di tsconfig bukan untuk mempersulit penulisan kode, melainkan sebagai sabuk pengaman otomatis yang mendeteksi kemungkinan nilai null atau undefined sebelum kode pernah mencapai server staging.',
      'Investasi waktu pada penulisan interface dan type contract yang solid di awal sprint terbukti menghemat ratusan jam debugging di tahap akhir rilis produksi.',
    ],
  },
];
