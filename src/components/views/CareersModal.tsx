import React, { useState } from 'react';
import { X, MapPin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CareersModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const jobs = [
    {
      id: 'job-1',
      title: 'Senior Full-Stack Architect (Next.js & Node.js)',
      department: 'Engineering',
      location: 'India Remote / Bengaluru',
      type: 'Full-time',
      experience: '5+ Yrs',
    },
    {
      id: 'job-2',
      title: 'Lead Generative AI & Machine Learning Engineer',
      department: 'AI Intelligence',
      location: 'India Remote',
      type: 'Full-time',
      experience: '4+ Yrs',
    },
    {
      id: 'job-3',
      title: 'Senior UI/UX Design System Specialist',
      department: 'Product Design',
      location: 'India Remote / Gurugram',
      type: 'Full-time',
      experience: '3+ Yrs',
    },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#070D22] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
          Join BalajiOne Enterprises
        </span>
        <h3 className="text-3xl font-extrabold font-heading text-white mb-2">Open Engineering Roles</h3>
        <p className="text-xs text-slate-300 mb-6">
          We are always searching for world-class engineers, AI researchers, and designers passionate about building scalable digital solutions.
        </p>

        {!submitted ? (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-5 rounded-2xl bg-white/[0.03] border border-amber-500/20 hover:border-amber-400/50 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0"
              >
                <div>
                  <h4 className="text-base font-bold text-white font-heading">{job.title}</h4>
                  <div className="flex items-center space-x-3 text-xs text-slate-400 font-mono mt-1">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{job.location}</span>
                    </span>
                    <span>•</span>
                    <span className="text-amber-400">{job.type}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job.title)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs shadow-md hover:scale-105 transition-all shrink-0 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}

            {selectedJob && (
              <form onSubmit={handleApply} className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-4 mt-6">
                <h4 className="text-sm font-bold text-amber-300 font-heading">
                  Applying for: {selectedJob}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full bg-white/5 border border-amber-500/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full bg-white/5 border border-amber-500/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <input
                  type="url"
                  required
                  placeholder="LinkedIn or GitHub Profile / Resume URL *"
                  value={resumeUrl}
                  onChange={(e) => setResumeUrl(e.target.value)}
                  className="w-full bg-white/5 border border-amber-500/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-xs shadow-md cursor-pointer"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
            <h4 className="text-2xl font-bold font-heading">Application Received!</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Thank you <strong className="text-amber-400">{applicantName}</strong>. Your resume details have been routed to <strong className="text-amber-400">support@balajione.dev</strong>. Our talent team will review your credentials and contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 rounded-xl bg-white/10 text-xs font-bold hover:bg-white/20 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
