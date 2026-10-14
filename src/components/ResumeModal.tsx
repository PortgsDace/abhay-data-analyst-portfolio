import { 
  X, 
  Download, 
  Printer, 
  FileText
} from 'lucide-react';
import { profileData } from '../data/profileData';
import { projectsData } from '../data/projectsData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Action Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Abhay — Data Analyst Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href="/Abhay_Data_Analyst_Resume.pdf"
              download="Abhay_Data_Analyst_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content (Printable ATS Layout) */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white text-slate-900 font-sans space-y-6">
          
          {/* Header */}
          <div className="text-center pb-5 border-b-2 border-slate-900 space-y-1.5">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
              {profileData.name}
            </h1>
            <p className="text-xs sm:text-sm font-bold text-slate-700">
              Data Analyst | SQL | Power BI | Python | Excel
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-1 font-medium">
              <span>{profileData.location}</span>
              <span>•</span>
              <a href={`mailto:${profileData.email}`} className="text-brand-700 hover:underline">{profileData.email}</a>
              <span>•</span>
              <a href={`tel:${profileData.phone}`} className="text-slate-800">{profileData.phone}</a>
              <span>•</span>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-brand-700 hover:underline">LinkedIn</a>
              <span>•</span>
              <a href={profileData.github} target="_blank" rel="noreferrer" className="text-brand-700 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Career Objective
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              Recent B.Tech Computer Science graduate passionate about data analytics and business intelligence. Skilled in SQL query engineering, Power BI dashboard development, statistical data cleaning with Python and Pandas, and advanced Excel modeling. Seeking an entry-level Data Analyst role to deliver actionable data-driven insights.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1 text-slate-800">
              <div><strong>Core Tools & BI:</strong> SQL, MySQL, Power BI, Power Query, DAX, Microsoft Excel (Advanced, Pivot Tables).</div>
              <div><strong>Programming & Libraries:</strong> Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, REST APIs.</div>
              <div><strong>Analytical Competencies:</strong> Data Cleaning, Exploratory Data Analysis (EDA), ETL, KPI Modeling, Cohort Retention, Anomaly Detection.</div>
              <div><strong>Developer Tools:</strong> Git, GitHub, VS Code, Jupyter Notebook, Streamlit.</div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Work Experience
            </h2>
            {profileData.workExperience.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-bold text-slate-950">{exp.role} — <span className="font-semibold text-slate-700">{exp.organization}</span></span>
                  <span className="text-[11px] text-slate-600 font-mono">{exp.period}</span>
                </div>
                <ul className="list-disc pl-4 text-xs text-slate-700 space-y-0.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Key Analytics Projects
            </h2>
            {projectsData.slice(0, 4).map((p) => (
              <div key={p.id} className="space-y-1">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-bold text-slate-950">{p.title}</span>
                  <span className="text-[10px] text-slate-600 font-mono">{p.technologies.join(', ')}</span>
                </div>
                <p className="text-xs text-slate-700">{p.shortDescription}</p>
                <ul className="list-disc pl-4 text-xs text-slate-700 space-y-0.5">
                  {p.findings.slice(0, 2).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Education
            </h2>
            {profileData.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-slate-950">{edu.degree}</strong> — <span className="text-slate-700">{edu.institution}</span>
                </div>
                <div className="font-mono text-slate-800 font-semibold">
                  {edu.period} | {edu.percentage} {edu.cgpa ? `(CGPA ${edu.cgpa})` : ''}
                </div>
              </div>
            ))}
          </div>

          {/* Trainings */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Trainings & Certifications
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <div>• <strong>Data Science Placement Course with AI:</strong> Internshala Trainings (Power BI, SQL, Python, Excel, Machine Learning).</div>
              <div>• <strong>Web Development Training:</strong> CS Soft Solutions, Chandigarh (React.js, Spring Boot, REST APIs).</div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-500">
            Complies with Indian & Remote Entry-Level Data Analyst ATS formats
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
