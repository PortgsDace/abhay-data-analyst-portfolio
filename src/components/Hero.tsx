import { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  FileText
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './SocialIcons';
import { profileData } from '../data/profileData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'retention' | 'logistics' | 'risk'>('retention');

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Call-to-Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                Seeking Entry-Level Data & BI Analyst Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Turning Data Into Insights.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-teal-600 to-brand-500 dark:from-brand-400 dark:via-teal-400 dark:to-brand-300">
                  Helping Businesses Make Better Decisions.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg font-semibold text-brand-700 dark:text-brand-300">
                {profileData.subheadline}
              </p>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed max-w-2xl">
              {profileData.heroIntro}
            </p>

            {/* Quick Skills Pill Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mr-1">
                Core Stack:
              </span>
              {['SQL (MySQL)', 'Power BI & DAX', 'Python (Pandas)', 'Advanced Excel', 'Data Cleaning', 'EDA'].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* 4 Functional Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* 1. View My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md shadow-brand-500/20 transition-all hover:gap-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* 2. Interactive ATS Resume Preview */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-100 font-semibold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500"
                title="View interactive ATS-optimized resume"
              >
                <FileText className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>View Resume</span>
              </button>

              {/* 3. Direct PDF Download */}
              <a
                href="/Abhay_Data_Analyst_Resume.pdf"
                download="Abhay_Data_Analyst_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-500"
                title="Direct PDF Download"
              >
                <Download className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Download PDF</span>
              </a>

              {/* 3. Let's Connect */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>

              {/* 4. Social Profile Icons */}
              <div className="flex items-center gap-2 pl-1 border-l border-slate-200 dark:border-slate-800 ml-1">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#38bdf8] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition-colors"
                  aria-label="Abhay's LinkedIn Profile"
                  title="View LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition-colors"
                  aria-label="Abhay's GitHub Profile"
                  title="View GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-[#E4405F] dark:hover:text-[#f472b6] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition-colors"
                  aria-label="Abhay's Instagram Profile"
                  title="View Instagram (@abhay_thakur.r10)"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Recruiter Trust Note */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-600 dark:text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                7 Documented Projects
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                Verified GitHub Repos
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                B.Tech CSE (78.00%)
              </span>
            </div>

          </div>

          {/* Right Column: Analytics Dashboard Visual (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Container */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
                
                {/* Visual Header with Tab Switcher */}
                <div className="px-4 py-3 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">
                      Analytics Sandbox Preview
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300">
                    Sample Data
                  </span>
                </div>

                {/* Dashboard Subheader & Navigation */}
                <div className="p-4 pb-2">
                  <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-lg text-xs font-medium">
                    <button
                      onClick={() => setActiveTab('retention')}
                      className={`py-1.5 px-2 rounded-md transition-all text-center ${
                        activeTab === 'retention'
                          ? 'bg-white dark:bg-slate-700 text-brand-700 dark:text-brand-300 shadow-sm font-semibold'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                      }`}
                    >
                      Retention BI
                    </button>
                    <button
                      onClick={() => setActiveTab('logistics')}
                      className={`py-1.5 px-2 rounded-md transition-all text-center ${
                        activeTab === 'logistics'
                          ? 'bg-white dark:bg-slate-700 text-brand-700 dark:text-brand-300 shadow-sm font-semibold'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                      }`}
                    >
                      Route SQL
                    </button>
                    <button
                      onClick={() => setActiveTab('risk')}
                      className={`py-1.5 px-2 rounded-md transition-all text-center ${
                        activeTab === 'risk'
                          ? 'bg-white dark:bg-slate-700 text-brand-700 dark:text-brand-300 shadow-sm font-semibold'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                      }`}
                    >
                      Risk Python
                    </button>
                  </div>
                </div>

                {/* Tab Content 1: Retail Retention */}
                {activeTab === 'retention' && (
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Cohort Window: Rolling 90 Days</span>
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> +14.2% MoM
                      </span>
                    </div>

                    {/* KPI Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750">
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Repeat Rev Share</span>
                        <div className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">61.4%</div>
                        <span className="text-[10px] text-brand-600 dark:text-brand-400 font-medium">From 28% of buyers</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750">
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Churn Cliff</span>
                        <div className="text-xl font-bold text-amber-600 dark:text-amber-400 mt-0.5">45-60 Days</div>
                        <span className="text-[10px] text-slate-500 font-medium">Re-engagement trigger</span>
                      </div>
                    </div>

                    {/* Mini SVG Chart: Cohort Retention Curve */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750 space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <span>Cohort Retention Trajectory (%)</span>
                        <span className="text-[11px] text-slate-500">DAX Measure</span>
                      </div>
                      <div className="h-24 w-full flex items-end justify-between gap-1.5 pt-2">
                        {[
                          { label: 'Day 0', val: 100, h: 'h-20', col: 'bg-brand-600' },
                          { label: 'Day 15', val: 78, h: 'h-16', col: 'bg-brand-500' },
                          { label: 'Day 30', val: 62, h: 'h-12', col: 'bg-brand-500' },
                          { label: 'Day 45', val: 41, h: 'h-8', col: 'bg-amber-500' },
                          { label: 'Day 60', val: 32, h: 'h-6', col: 'bg-rose-500' },
                          { label: 'Day 90', val: 28, h: 'h-5', col: 'bg-emerald-600' }
                        ].map((bar) => (
                          <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                            <span className="text-[9px] text-slate-500 font-mono">{bar.val}%</span>
                            <div className={`w-full ${bar.h} ${bar.col} rounded-t-sm transition-all`} />
                            <span className="text-[9px] text-slate-500 whitespace-nowrap">{bar.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 2: Logistics Route SQL */}
                {activeTab === 'logistics' && (
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Query: SLA Corridor Breach Rates</span>
                      <span className="text-brand-600 font-mono text-[11px]">MySQL CTE</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750">
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Sorting Delay Share</span>
                        <div className="text-xl font-bold text-rose-600 dark:text-rose-400 mt-0.5">18.4%</div>
                        <span className="text-[10px] text-slate-500 font-medium">Interchange dwell time</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750">
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Cleaned Duplicates</span>
                        <div className="text-xl font-bold text-teal-600 dark:text-teal-400 mt-0.5">6.2%</div>
                        <span className="text-[10px] text-slate-500 font-medium">Filtered via ROW_NUMBER()</span>
                      </div>
                    </div>

                    {/* Query Table Snippet */}
                    <div className="p-3 rounded-xl bg-slate-900 text-slate-200 font-mono text-[11px] space-y-1.5 overflow-x-auto">
                      <div className="text-[10px] text-slate-400 font-sans font-semibold">Top Breach Corridors (SQL View):</div>
                      <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400 text-[10px]">
                        <span>ROUTE</span>
                        <span>AVG HRS</span>
                        <span>BREACH %</span>
                      </div>
                      <div className="flex justify-between text-emerald-400">
                        <span>DELHI → CHANDIGARH</span>
                        <span>14.2h</span>
                        <span className="text-slate-300">4.1%</span>
                      </div>
                      <div className="flex justify-between text-amber-300">
                        <span>MUMBAI → AHMEDABAD</span>
                        <span>22.6h</span>
                        <span className="text-slate-300">11.8%</span>
                      </div>
                      <div className="flex justify-between text-rose-400">
                        <span>KOLKATA → PATNA</span>
                        <span>38.4h</span>
                        <span className="text-rose-400 font-bold">29.6%</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 3: Financial Risk Python */}
                {activeTab === 'risk' && (
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Model: Statistical IQR Anomaly Flags</span>
                      <span className="text-amber-600 font-mono text-[11px]">Pandas / NumPy</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750">
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Default Probability</span>
                        <div className="text-xl font-bold text-rose-600 dark:text-rose-400 mt-0.5">4.6x Lift</div>
                        <span className="text-[10px] text-slate-500 font-medium">For 3+ overdrafts / 30d</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750">
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Flagged Anomalies</span>
                        <div className="text-xl font-bold text-brand-600 dark:text-brand-400 mt-0.5">312 Cases</div>
                        <span className="text-[10px] text-slate-500 font-medium">Q3 + 1.5 * IQR limit</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750 space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <span>Account Risk Stratification</span>
                        <span className="text-[10px] text-slate-500">Segmentation</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-600 dark:text-slate-300">Healthy Tier</span>
                          <span className="font-mono font-bold text-emerald-600">76.4%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '76.4%' }}></div>
                        </div>

                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-600 dark:text-slate-300">Moderate / Watchlist</span>
                          <span className="font-mono font-bold text-amber-600">18.2%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '18.2%' }}></div>
                        </div>

                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-600 dark:text-slate-300">High Risk / Overdraft Critical</span>
                          <span className="font-mono font-bold text-rose-600">5.4%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: '5.4%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Footer: Transparent disclaimer */}
                <div className="px-4 py-2.5 bg-slate-100/70 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                    Interactive Portfolio Sandbox
                  </span>
                  <a
                    href="#projects"
                    className="font-medium text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-0.5"
                  >
                    <span>Inspect Projects</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

              </div>

              {/* Decorative Subtle Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xs">
                  SQL
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800 dark:text-slate-100">Cleaned & Modeled</div>
                  <div className="text-[9px] text-slate-500">Grounded in actual project evidence</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
