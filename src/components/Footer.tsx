import { 
  BarChart3, 
  ArrowUp, 
  Mail, 
  Phone, 
  FileText
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { profileData } from '../data/profileData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-teal-500 flex items-center justify-center text-white">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Abhay<span className="text-brand-400">.Analytics</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Turning raw datasets into actionable business insights. Specializing in SQL data cleaning, interactive Power BI dashboards, and Python exploratory analysis.
            </p>

            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span>📍 {profileData.location}</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Open to Entry-Level Roles</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects (7)</a></li>
              <li><a href="#sandbox" className="hover:text-white transition-colors">Interactive SQL Sandbox</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Categorized Skills</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience & Education</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Data Analytics Notes</a></li>
              <li><a href="#links-audit" className="hover:text-white transition-colors">QA & Links Audit</a></li>
            </ul>
          </div>

          {/* Direct Channels & Resume (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect Directly
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <a href={`mailto:${profileData.email}`} className="text-brand-400 hover:underline flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  {profileData.email}
                </a>
              </div>
              <div>
                <a href={`tel:${profileData.phone}`} className="text-slate-300 hover:underline flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  {profileData.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Abhay. Crafted for Data Analyst, BI & SQL roles. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
