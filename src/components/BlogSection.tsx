import React, { useState } from 'react';
import { ARTICLES_DATA } from '../data/portfolioData';
import { Article } from '../types';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';

interface BlogSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Collect unique tags
  const allTags = ['all', ...Array.from(new Set(ARTICLES_DATA.flatMap((a) => a.tags)))];

  const filteredArticles = ARTICLES_DATA.filter((article) =>
    selectedTag === 'all' ? true : article.tags.includes(selectedTag)
  );

  return (
    <section id="artikel" className="py-20 md:py-28 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Publikasi & Opini Industri
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Tulisan, refleksi teknis, dan tutorial arsitektur web.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Berbagi wawasan seputar best practices arsitektur komputasi awan, skalabilitas TypeScript, dan seni mendesain antarmuka yang berpusat pada kenyamanan pengguna.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedTag === tag
                  ? 'bg-neutral-800 text-white border border-neutral-700 shadow-sm'
                  : 'text-neutral-400 hover:text-white bg-neutral-900/60 border border-neutral-800/80'
              }`}
            >
              {tag === 'all' ? 'Semua Topik' : `#${tag}`}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/70 hover:border-neutral-700 transition-all duration-200 p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Unboxed Metadata: Kategori · Waktu Baca */}
                <div className="text-xs text-neutral-400 flex items-center gap-2 font-mono">
                  <span className="text-amber-400">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white hover:text-amber-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-neutral-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">
                  {article.publishDate}
                </span>

                <button
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>Baca Lengkap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
