import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, CheckCircle2, User, Building, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../../data/mockData';

interface ContactSectionProps {
  onOpenSchedule: () => void;
  prefilledScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenSchedule, prefilledScope }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('₹50,000 / Month (Professional Scale)');
  const [projectType, setProjectType] = useState('Custom Web/Mobile Application');
  const [message, setMessage] = useState(prefilledScope ? `Inquiry regarding: ${prefilledScope}` : '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const payload = {
      name,
      company: company || 'N/A',
      email,
      phone,
      budget,
      projectType,
      message,
      _subject: `BalajiOne Project Inquiry - ${projectType} (${name})`,
      _cc: `support@balajione.dev,${email}`,
      _replyto: email,
      _template: 'table'
    };

    // Dispatch real HTTP POST email payload to FormSubmit API
    try {
      await fetch('https://formsubmit.co/ajax/contact@balajione.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.log('FormSubmit API notice:', err);
    }

    setIsSending(false);
    setIsSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 }
    });
  };

  const mailSubject = encodeURIComponent(`BalajiOne Project Inquiry - ${projectType} (${name})`);
  const mailBody = encodeURIComponent(
    `BalajiOne Project Inquiry Details:\n\n` +
    `• Name: ${name}\n` +
    `• Company: ${company || 'N/A'}\n` +
    `• Client Email: ${email}\n` +
    `• Phone/WhatsApp: ${phone}\n` +
    `• Selected Plan / Budget: ${budget}\n` +
    `• Project Type: ${projectType}\n` +
    `• Requirements:\n${message}\n\n` +
    `Sent to: contact@balajione.dev & support@balajione.dev`
  );

  const whatsappMessage = encodeURIComponent(
    `Hi BalajiOne Team,\nMy name is ${name}. I want to discuss a ${projectType} project (${budget}).\nEmail: ${email}\nPhone: ${phone}`
  );

  return (
    <section id="contact" className="py-24 bg-[#060B26] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            Let&apos;s Build Together
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-4 leading-tight">
            Start Your <span className="gradient-text-gold-luxury">Project Today</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Tell us about your project requirements, goals, and timeline. All project details are sent to <strong className="text-amber-400">contact@balajione.dev</strong> and <strong className="text-amber-400">support@balajione.dev</strong> for instant blueprint preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Office Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card-interactive rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">Direct Communication</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Prefer to email directly or chat on WhatsApp? Our technical founders and software architects respond within 4 hours.
              </p>

              {/* Direct channels */}
              <div className="space-y-4">
                <a
                  href={`mailto:${COMPANY_INFO.contactEmail}`}
                  className="flex items-center space-x-4 p-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-amber-400 uppercase font-semibold">Project Inquiries & Quotes</div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {COMPANY_INFO.contactEmail}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.supportEmail}`}
                  className="flex items-center space-x-4 p-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-amber-300 uppercase font-semibold">24/7 Technical Support</div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      {COMPANY_INFO.supportEmail}
                    </div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-3.5 rounded-2xl bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-500/40 text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-emerald-400 uppercase font-semibold">WhatsApp Quick Connect</div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {COMPANY_INFO.phone} (Instant Chat)
                    </div>
                  </div>
                </a>
              </div>

              {/* Schedule consultation banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-400/10 to-amber-600/20 border border-amber-500/30 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono text-amber-300 font-bold">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>30-Min Architecture Discovery Call</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Book a free video call directly with Pratap Kumar Das (Founder & Lead Engineer) to discuss your scope.
                </p>
                <button
                  onClick={onOpenSchedule}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md cursor-pointer"
                >
                  Book Free Consultation Slot &rarr;
                </button>
              </div>

              {/* Physical Address */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 font-semibold">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>HQ Registered Address</span>
                </div>
                <div className="text-xs text-slate-300 font-sans leading-relaxed">
                  {COMPANY_INFO.address}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Coordinates: {COMPANY_INFO.coordinates}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-gold rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  Step 1 of 2 • Scope Definition
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Tell Us About Your Project
                </h3>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Pratap Kumar Das"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Company / Organization
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. BalajiOne Enterprises"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. pratapkudas111@gmail.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 93485 32113"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actual Recent Prices Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Select Plan / Budget *
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-[#060B26] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-sans"
                      >
                        <option value="₹20,000 / Month (Starter Growth Plan)" className="bg-slate-900">
                          ₹20,000 / Mo ($249) • Starter Growth
                        </option>
                        <option value="₹50,000 / Month (Professional Scale Plan)" className="bg-slate-900">
                          ₹50,000 / Mo ($599) • Professional Scale (Popular)
                        </option>
                        <option value="₹70,000 / Month (Enterprise Global Plan)" className="bg-slate-900">
                          ₹70,000 / Mo ($849) • Enterprise Global
                        </option>
                        <option value="Custom Project Scope (Tailored Quote)" className="bg-slate-900">
                          Custom Project Scope (Tailored Quote)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Primary Service Needed
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full bg-[#060B26] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-sans"
                      >
                        <option value="Custom Web Application" className="bg-slate-900">Custom Web Application</option>
                        <option value="Mobile App (iOS & Android)" className="bg-slate-900">Mobile App (iOS & Android)</option>
                        <option value="Enterprise ERP / CRM System" className="bg-slate-900">Enterprise ERP / CRM System</option>
                        <option value="Solar Energy CRM" className="bg-slate-900">Solar Energy CRM</option>
                        <option value="School ERP Platform" className="bg-slate-900">School ERP Platform</option>
                        <option value="AI Chatbot & GenAI Pipeline" className="bg-slate-900">AI Chatbot & GenAI Pipeline</option>
                        <option value="Cloud Migration & DevOps" className="bg-slate-900">Cloud Migration & DevOps</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Project Description & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your project requirements, target launch date, or specific tech stack preferences..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-sm shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_45px_rgba(245,158,11,0.8)] hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                    <span>{isSending ? 'Dispatching Email...' : 'Submit Project Inquiry & Send Direct Email'}</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-2xl font-bold font-heading text-white">Inquiry & Quote Dispatched!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you <span className="text-amber-400 font-semibold">{name}</span>. Your inquiry details have been dispatched to <strong className="text-amber-400">contact@balajione.dev</strong> and <strong className="text-amber-400">support@balajione.dev</strong>. Our lead architect will review and email your proposal to <span className="text-amber-400 font-semibold">{email}</span> within 4 hours.
                  </p>

                  {/* 1-Click Mail Client & WhatsApp Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${COMPANY_INFO.contactEmail}?cc=${COMPANY_INFO.supportEmail}&subject=${mailSubject}&body=${mailBody}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Mail App (Outlook/Gmail)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
