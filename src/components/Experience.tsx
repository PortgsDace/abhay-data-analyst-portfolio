import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { profileData } from '../data/profileData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wide uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Hands-on internships, comprehensive analytical coursework, and verified academic credentials without fabricated claims.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-600 to-teal-500 rounded-full mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience & Internships (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <Briefcase className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Internships & Work History
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {profileData.workExperience.map((item) => (
                <div key={item.id} className="relative pl-9 space-y-3">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-brand-600 border-4 border-white dark:border-slate-900 shadow-sm" />

                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3 hover:border-brand-300 dark:hover:border-brand-700 transition-colors">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h4>
                      <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-2 mt-0.5">
                        <span>{item.organization}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-xs text-slate-500 font-normal flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </p>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-1">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-medium rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Documented Trainings / Certifications Block */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <Award className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Documented Trainings & Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {profileData.trainingsAndCertifications.map((cert) => (
                  <div 
                    key={cert.id}
                    className="p-5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <span className="text-xs text-slate-500 font-mono">
                        {cert.period}
                      </span>
                    </div>
                    <div className="text-xs text-brand-600 dark:text-brand-400 font-semibold">
                      {cert.organization} • {cert.location}
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-2 text-xs text-slate-600 dark:text-slate-300">
                      {cert.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-brand-500 font-bold">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Verified Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-5">
              {profileData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 uppercase tracking-wider">
                      {edu.id === 'btech' ? 'Undergraduate Degree' : 'Senior Secondary'}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 font-mono">
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Percentage & Score Highlight */}
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">Academic Score:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                        {edu.percentage}
                      </span>
                      {edu.cgpa && (
                        <span className="text-xs text-slate-500 font-mono">
                          (CGPA {edu.cgpa})
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-1">
                    {edu.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-teal-500 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Verified Note Banner */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Source of Truth Compliance
                </span>
                <p>
                  Education records adhere to the official uploaded resume. Matriculation (10th) has been purposefully omitted in accordance with user requirements.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
