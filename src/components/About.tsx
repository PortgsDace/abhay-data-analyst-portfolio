import { 
  GraduationCap, 
  MapPin, 
  Wrench, 
  Target, 
  CheckCircle2, 
  Sparkles,
  FileCheck2,
  Database,
  BarChart,
  Lightbulb
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './SocialIcons';
import { profileData } from '../data/profileData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-600 to-teal-500 rounded-full mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio & Analytical Mindset (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300">
            
            <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-200 font-normal">
              {profileData.aboutText}
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                Analytical Philosophy & Core Competencies
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Rather than treating data as passive numbers or stopping at descriptive summaries, I approach datasets with a <strong>business question in mind</strong>. Whether it's pinpointing the exact delivery corridor causing SLA breaches in logistics or modeling when retail buyers drop off after their first purchase, my focus is always on translating raw records into clear, defendable operational recommendations.
              </p>
            </div>

            {/* 4 Pillars of my Analytical Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-850 hover:border-brand-300 dark:hover:border-brand-700 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 mb-2 text-brand-600 dark:text-brand-400">
                  <Database className="w-4 h-4" />
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">Data Cleaning & Hygiene</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                  Handling nulls, duplicates, and inconsistent datetime stamps via SQL and Pandas before calculating metrics.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-850 hover:border-teal-300 dark:hover:border-teal-700 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 mb-2 text-teal-600 dark:text-teal-400">
                  <BarChart className="w-4 h-4" />
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">Business Intelligence & DAX</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                  Building star schemas, dynamic time intelligence, and role-based Power BI dashboards.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-850 hover:border-brand-300 dark:hover:border-brand-700 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 mb-2 text-brand-600 dark:text-brand-400">
                  <FileCheck2 className="w-4 h-4" />
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">Actionable KPIs</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                  Prioritizing cohort retention, unit costs, and SLA breach rates over vanity metrics.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-850 hover:border-teal-300 dark:hover:border-teal-700 transition-colors shadow-sm">
                <div className="flex items-center gap-2.5 mb-2 text-teal-600 dark:text-teal-400">
                  <Lightbulb className="w-4 h-4" />
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">Clear Communication</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                  Translating complex multi-table findings into concise takeaways for non-technical leadership.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 shadow-lg p-6 space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4 pb-5 border-b border-slate-200 dark:border-slate-750">
                <div className="relative">
                  <img
                    src="/profile.png"
                    alt="Abhay"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-brand-500/30 shadow-md"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {profileData.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                    Data Analyst Fresher
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    <span>{profileData.location}</span>
                  </p>
                </div>
              </div>

              {/* Education Snippet */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Education
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      B.Tech in Computer Science & Engineering
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Government College Dharamshala, HPTU (2022–2026)
                    </p>
                    <div className="mt-1 inline-flex items-center gap-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
                        Percentage: 78.00%
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                        (CGPA: 7.45)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 pl-10 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Class XII Senior Secondary (HPBOSE, 2021): <span className="font-semibold text-brand-600 dark:text-brand-400">92.20%</span>
                  </p>
                </div>
              </div>

              {/* Key Analytical Tools */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-brand-500" />
                  Primary Analytical Tools
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['SQL', 'MySQL', 'Power BI', 'DAX', 'Python', 'Pandas', 'Advanced Excel', 'ETL', 'Scikit-learn'].map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Links & Status */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">Opportunity Status:</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Seeking Entry-Level Roles
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-[#E4405F] hover:text-white dark:hover:bg-[#E4405F] text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
