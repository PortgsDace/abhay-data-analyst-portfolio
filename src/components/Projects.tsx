import { useState } from 'react';
import { 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Database, 
  BarChart2, 
  Code2, 
  Sheet, 
  Cpu, 
  ShieldCheck, 
  Terminal,
  Download 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/projectsData';
import { Project, ProjectCategory } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  // Filter analytics projects (excluding the technical project VoteSetu from main grid)
  const analyticsProjects = projectsData.filter((p) => !p.isTechnicalProject);
  const technicalProjects = projectsData.filter((p) => p.isTechnicalProject);

  const filteredProjects = analyticsProjects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category.includes(selectedCategory as any);
  });

  const categories: { label: ProjectCategory; icon: any }[] = [
    { label: 'All', icon: Layers },
    { label: 'Power BI', icon: BarChart2 },
    { label: 'SQL', icon: Database },
    { label: 'Python', icon: Code2 },
    { label: 'Excel', icon: Sheet },
    { label: 'Machine Learning', icon: Cpu },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wide uppercase">
            <Database className="w-3.5 h-3.5" />
            <span>Core Analytical Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Case Studies
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Every project demonstrates practical end-to-end capabilities: cleaning unformatted data, writing robust SQL queries, modeling star schemas, engineering metrics in DAX, and communicating actionable business decisions.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-600 to-teal-500 rounded-full mt-1"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-brand-600 dark:text-white shadow-md shadow-brand-500/20'
                    : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                {cat.label === 'All' && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                    {analyticsProjects.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Analytics Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              
              {/* Card Header & Visual Thumbnail Banner */}
              <div className={`p-5 bg-gradient-to-br ${project.thumbnailGradient} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
                
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.category.map((cat) => (
                      <span 
                        key={cat}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/25 backdrop-blur-md text-white border border-white/20"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-amber-950 shadow-sm">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight relative z-10 leading-snug">
                  {project.title}
                </h3>
                
                {/* Metric Strip Preview */}
                {project.metrics && project.metrics[0] && (
                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs relative z-10">
                    <span className="text-white/80 font-medium">{project.metrics[0].label}:</span>
                    <span className="font-extrabold text-white text-sm">{project.metrics[0].value}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                
                <div className="space-y-4">
                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Problem Investigated */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      Problem Investigated:
                    </span>
                    <p className="line-clamp-2">{project.problem}</p>
                  </div>

                  {/* What I Did (2 bullet highlights) */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 block">
                      Key Execution Highlights:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {project.whatIDid.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] text-slate-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-brand-600 text-white dark:bg-slate-800 dark:hover:bg-brand-600 text-xs font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>

                  {/* Direct Project Download Link (if available from resume submissions) */}
                  {project.links.find((l) => l.type === 'download') && (
                    <a
                      href={project.links.find((l) => l.type === 'download')!.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/60 transition-colors"
                      title={project.links.find((l) => l.type === 'download')!.label}
                      aria-label="Download verified project archive (.zip)"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}

                  {/* External verified code button if exists */}
                  {project.links.find((l) => l.type === 'github' && l.url.includes('/fulfillment-hub')) ? (
                    <a
                      href="https://github.com/PortgsDace/fulfillment-hub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      title="View Verified GitHub Repository"
                      aria-label="View verified repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onSelectProject(project)}
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-colors"
                      title="Inspect queries & data details"
                      aria-label="Inspect queries"
                    >
                      <Terminal className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* SECTION 7: ADDITIONAL TECHNICAL PROJECTS (VOTESETU) */}
        {technicalProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Capstone Software Engineering</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Additional Technical Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Demonstrates full-stack development, smart contracts, and distributed architecture without overshadowing primary data analytics roles.
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 shrink-0">
                17 Hardhat Tests Passing
              </span>
            </div>

            {technicalProjects.map((techProject) => (
              <div 
                key={techProject.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      B.Tech Final Year Capstone
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Solidity • React • Node • MongoDB
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {techProject.title}
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {techProject.shortDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800">
                      <div className="text-[11px] text-slate-500">Unit Tests</div>
                      <div className="text-base font-bold text-emerald-600">17 / 17 Passed</div>
                      <div className="text-[10px] text-slate-500">Hardhat automated test suite</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800">
                      <div className="text-[11px] text-slate-500">Gas Optimization</div>
                      <div className="text-base font-bold text-indigo-600">-65% Gas Cost</div>
                      <div className="text-[10px] text-slate-500">Hybrid on/off-chain model</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800">
                      <div className="text-[11px] text-slate-500">Security Rule</div>
                      <div className="text-base font-bold text-brand-600">Double-Voting Halted</div>
                      <div className="text-[10px] text-slate-500">hasVoted mapping verification</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <button
                    onClick={() => onSelectProject(techProject)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-500 text-white font-semibold text-xs shadow-sm transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Architecture Case Study</span>
                  </button>

                  <a
                    href="https://github.com/PortgsDace/btech-final-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-750 font-semibold text-xs transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Verified GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};
