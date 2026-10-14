import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  Download, 
  ExternalLink, 
  MessageSquare,
  MapPin,
  Clock
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { profileData } from '../data/profileData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail || !formMessage) {
      setStatusMessage('Please provide your email address and message.');
      return;
    }

    // Direct mailto generation for authentic recruiter communication without fake backends
    const subject = encodeURIComponent(formSubject || `Portfolio Inquiry from ${formName || 'Recruiter'}`);
    const body = encodeURIComponent(`Hi Abhay,\n\nName: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`);
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;

    setStatusMessage('Opening your email client to send message to abuak460@gmail.com...');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wide uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's turn data into meaningful decisions.
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            I'm open to entry-level opportunities in data analytics and business intelligence. Have a role, project, or conversation in mind? I'd be happy to connect.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-600 to-teal-500 rounded-full mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm space-y-6">
              
              <h3 className="text-base font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span>Verified Direct Channels</span>
                <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Active
                </span>
              </h3>

              {/* Email Block with Copy & Send */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-750 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                    Email Address
                  </span>
                  {copied && (
                    <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied!
                    </span>
                  )}
                </div>

                <div className="text-sm font-mono font-bold text-slate-900 dark:text-white break-all">
                  {profileData.email}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </button>

                  <a
                    href={`mailto:${profileData.email}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>

              {/* Phone Block */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-750 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    Direct Phone / WhatsApp
                  </span>
                  <div className="text-sm font-mono font-bold text-slate-900 dark:text-white mt-0.5">
                    {profileData.phone}
                  </div>
                </div>

                <a
                  href={`tel:${profileData.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* Location & Timezone */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {profileData.location}
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  IST (UTC+5:30)
                </span>
              </div>

              {/* Professional Socials */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Social & Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 hover:border-[#0A66C2] text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0A66C2]" />
                  </a>

                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 hover:border-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-900" />
                  </a>
                </div>
              </div>

              {/* Download Resume Action */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="/Abhay_Data_Analyst_Resume.pdf"
                  download="Abhay_Data_Analyst_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-brand-600 text-white dark:bg-brand-600 dark:hover:bg-brand-500 font-bold text-sm shadow-sm transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download My Resume</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full text-center text-xs text-brand-600 dark:text-brand-400 hover:underline py-1 font-medium"
                >
                  View ATS-Friendly Resume Preview
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500">
                  Submit this form to launch your email client pre-filled with your message directly to Abhay.
                </p>
              </div>

              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Data Analyst Role / Interview Invitation"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Share role details, questions about my projects, or an interview invitation..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-xs text-brand-700 dark:text-brand-300 font-medium">
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>

              <div className="pt-2 text-center text-xs text-slate-400">
                Direct inquiries welcome • Typically replies within 24 hours
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
