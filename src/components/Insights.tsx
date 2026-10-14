import { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Lightbulb
} from 'lucide-react';
import { analyticsInsights } from '../data/insightsData';

export const Insights: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(analyticsInsights[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="insights" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Analytical Notes & Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Data Analytics Insights
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Practical notes on data hygiene, translating business ambiguity into SQL CTEs, designing actionable KPIs, and communicating findings effectively.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-600 to-teal-500 rounded-full mt-1"></div>
        </div>

        {/* Insights Grid / Accordions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analyticsInsights.map((insight) => {
            const isExpanded = expandedId === insight.id;
            return (
              <div
                key={insight.id}
                className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-white dark:bg-slate-900 border-brand-400 dark:border-brand-600 shadow-md ring-1 ring-brand-500/10'
                    : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                }`}
              >
                <div className="p-6">
                  
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 text-[10px]">
                      {insight.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {insight.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {insight.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {insight.summary}
                  </p>

                  {/* Core Takeaway Callout */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 mb-3 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Key Takeaway:</strong>
                      {insight.keyTakeaway}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed animate-in fade-in duration-200">
                      {insight.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                </div>

                {/* Footer Toggle Button */}
                <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-850/40 rounded-b-2xl flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(insight.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                  >
                    <span>{isExpanded ? 'Collapse Insight' : 'Read Full Note'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[11px] text-slate-400 font-mono">Learning Note #{insight.id.slice(0, 4)}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
