import { 
  Database, 
  BarChart3, 
  Code2, 
  Sheet, 
  Cpu, 
  Wrench, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { skillCategories } from '../data/profileData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return Database;
      case 'BarChart3': return BarChart3;
      case 'Code2': return Code2;
      case 'Sheet': return Sheet;
      case 'Cpu': return Cpu;
      default: return Wrench;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Categorized Technical Skills
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Prioritizing core Data Analyst competencies: writing clean SQL, engineering DAX measures, exploring data with Python and Pandas, and modeling spreadsheet solutions. No arbitrary percentages.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-600 to-teal-500 rounded-full mt-1"></div>
        </div>

        {/* Priority 4 Banner (SQL, Power BI, Excel, Python) */}
        <div className="mb-10 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              ★
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Primary Target Stack
              </h3>
              <p className="text-xs text-slate-500">
                Core technologies verified across internships, academic coursework, and case studies.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { name: 'SQL (MySQL)', color: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' },
              { name: 'Power BI & DAX', color: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' },
              { name: 'Advanced Excel', color: 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800' },
              { name: 'Python (Pandas)', color: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800' },
            ].map((st) => (
              <span
                key={st.name}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${st.color} shadow-xs`}
              >
                {st.name}
              </span>
            ))}
          </div>
        </div>

        {/* 6 Categorized Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {category.skills.length} Competencies
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          skill.highlight
                            ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-brand-300 font-semibold border border-slate-700'
                            : 'bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-800'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    Project-applied
                  </span>
                  <span className="font-mono">Ready for production</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
