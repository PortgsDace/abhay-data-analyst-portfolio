import { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  CheckCircle2, 
  AlertCircle, 
  Code2, 
  Database, 
  Lightbulb, 
  TrendingUp, 
  FileText,
  ArrowRight,
  Download
} from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'data' | 'code' | 'insights' | 'links'>('overview');
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50 dark:bg-slate-850">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                Case Study
              </span>
              {project.category.map((cat) => (
                <span 
                  key={cat}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {project.shortDescription}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex overflow-x-auto gap-2 py-2">
          {[
            { id: 'overview', label: 'Overview & Problem', icon: FileText },
            { id: 'data', label: 'Data & Cleaning', icon: Database },
            { id: 'code', label: 'Queries & Logic', icon: Code2 },
            { id: 'insights', label: 'Findings & Recommendations', icon: Lightbulb },
            { id: 'links', label: 'Verification & Links', icon: CheckCircle2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-brand-50 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-600 dark:text-slate-300 text-sm">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
                  Executive Summary
                </h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  {project.caseStudy.overview}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  Problem Statement Investigated
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
                  Business Objective
                </h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  {project.caseStudy.businessObjective}
                </p>
              </div>

              {/* Technologies Used Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">
                  Core Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Quantitative Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {project.metrics.map((m) => (
                    <div 
                      key={m.label}
                      className="p-3.5 rounded-xl bg-brand-50/50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/60"
                    >
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{m.label}</div>
                      <div className="text-xl font-extrabold text-brand-700 dark:text-brand-300 mt-0.5">{m.value}</div>
                      {m.subtext && <div className="text-[11px] text-slate-500 mt-0.5">{m.subtext}</div>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: DATA & CLEANING */}
          {activeTab === 'data' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
                  Dataset Source & Context
                </h4>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  {project.caseStudy.datasetDetails.source}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">
                  Relational Schema & Field Structure
                </h4>
                <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1.5 border border-slate-800">
                  {project.caseStudy.datasetDetails.schema.map((tableLine, idx) => (
                    <div key={idx} className="leading-relaxed">
                      <span className="text-brand-400">{tableLine.split(':')[0]}:</span>
                      <span className="text-slate-300">{tableLine.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                  Data Cleaning & Hygiene Steps Performed
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.datasetDetails.cleaningSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-200">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
                  Analytical Methodology Applied
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.analyticalMethodology.map((method, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ArrowRight className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-200">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: CODE & IMPLEMENTATION */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {project.caseStudy.technicalImplementation.codeTitle}
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">
                    Language / Syntax: {project.caseStudy.technicalImplementation.type.toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => handleCopyCode(project.caseStudy.technicalImplementation.codeSnippet)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Snippet Block */}
              <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-200 overflow-x-auto max-h-96">
                <pre className="whitespace-pre">{project.caseStudy.technicalImplementation.codeSnippet}</pre>
              </div>

              {/* Code Explanation */}
              <div className="p-4 rounded-xl bg-brand-50/60 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold text-brand-700 dark:text-brand-300 block mb-1">
                  Technical Explanation:
                </span>
                {project.caseStudy.technicalImplementation.codeExplanation}
              </div>

              {/* Visualization Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-1">
                  Dashboard & Visualization Design
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                  {project.caseStudy.visualizationsDescription}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: FINDINGS & RECOMMENDATIONS */}
          {activeTab === 'insights' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Key Findings (Supported by Project Evidence)
                </h4>
                <div className="space-y-3">
                  {project.findings.map((finding, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                        {finding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  Actionable Business Recommendations
                </h4>
                <div className="space-y-3">
                  {project.businessRecommendations.map((rec, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/60 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                        {rec}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400">
                  Limitations & Future Scope
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 list-disc pl-4">
                  {project.limitationsAndFuture.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 5: LINKS & AUDIT */}
          {activeTab === 'links' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
                  Project Verification & External Links
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-xs mb-4">
                  In compliance with recruiter verification standards, all repository and external project links are documented below with honest status labeling:
                </p>

                <div className="space-y-3">
                  {project.links.map((link, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 dark:text-white text-sm">
                            {link.label}
                          </span>
                          {link.isVerified && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                              Verified
                            </span>
                          )}
                        </div>
                        {link.notes && (
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {link.notes}
                          </p>
                        )}
                        <span className="text-[11px] font-mono text-slate-500 break-all">
                          {link.url}
                        </span>
                      </div>

                      {link.type === 'download' ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-xs"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Archive (.ZIP)</span>
                        </a>
                      ) : link.url.startsWith('http') ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors shrink-0"
                        >
                          <span>Open Resource</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold shrink-0">
                          Active Internal Case Study
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  Recruiter Transparency Guarantee
                </span>
                <p>
                  No fake repositories, unverified metrics, or fabricated company claims are presented. Code, formulas, and schema structures represent genuine analytical work.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Project {project.id} • Abhay's Portfolio
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
