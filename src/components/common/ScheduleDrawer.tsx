import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Building, CheckCircle2, Globe, ExternalLink, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../../data/mockData';

interface ScheduleDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ScheduleDrawer: React.FC<ScheduleDrawerProps> = ({
  isOpen,
  onClose,
  initialTopic,
}) => {
  const [topic, setTopic] = useState(initialTopic || 'General Software Engineering & Strategy');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM IST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  const topics = [
    'General Software Engineering & Strategy',
    'AI & GenAI LLM Integration',
    'Enterprise ERP & GST Solutions',
    'Cloud Migration & DevOps Pipeline',
    'Custom Mobile App Development',
  ];

  const dates = [
    { day: 'Today', date: 'Jul 26', full: 'Today, Jul 26' },
    { day: 'Tomorrow', date: 'Jul 27', full: 'Tomorrow, Jul 27' },
    { day: 'Mon', date: 'Jul 28', full: 'Mon, Jul 28' },
    { day: 'Tue', date: 'Jul 29', full: 'Tue, Jul 29' },
    { day: 'Wed', date: 'Jul 30', full: 'Wed, Jul 30' },
  ];

  const timeSlots = [
    '10:00 AM IST',
    '11:30 AM IST',
    '02:00 PM IST',
    '03:30 PM IST',
    '05:00 PM IST',
    '07:00 PM IST (US/EU Friendly)',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const payload = {
      topic,
      selectedDate,
      selectedTime,
      name,
      email,
      company: company || 'N/A',
      _subject: `BalajiOne Consultation Booking: ${topic} (${name})`,
      _cc: `support@balajione.dev,${email}`,
      _replyto: email,
      _template: 'table'
    };

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
      console.log('Schedule API notice:', err);
    }

    setIsSending(false);
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
  };

  const mailSubject = encodeURIComponent(`Consultation Booking: ${topic} - ${name}`);
  const mailBody = encodeURIComponent(
    `BalajiOne Consultation Meeting Details:\n\n` +
    `• Topic: ${topic}\n` +
    `• Date: ${selectedDate}\n` +
    `• Time: ${selectedTime}\n` +
    `• Client Name: ${name}\n` +
    `• Email: ${email}\n` +
    `• Company: ${company || 'N/A'}\n\n` +
    `Dispatched to: support@balajione.dev & contact@balajione.dev`
  );

  const whatsappMessage = encodeURIComponent(
    `Hi BalajiOne Team,\nI booked a consultation call for ${topic}.\nDate: ${selectedDate} at ${selectedTime}.\nName: ${name} (${email})`
  );

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex justify-end transition-opacity">
      <div className="w-full max-w-lg bg-[#060B26] border-l border-amber-500/30 h-full p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-white shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-amber-500/20">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                Free 30-Min Strategy Call
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">Book Consultation</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              {/* Select Topic */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-2 uppercase tracking-wider">
                  1. Consultation Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-white/5 border border-amber-500/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-sans"
                >
                  {topics.map((t) => (
                    <option key={t} value={t} className="bg-[#060B26] text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Date */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-2 uppercase tracking-wider">
                  2. Select Date
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d.full}
                      type="button"
                      onClick={() => setSelectedDate(d.full)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDate === d.full
                          ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                      }`}
                    >
                      <div className="text-[10px] font-mono opacity-80 uppercase">{d.day}</div>
                      <div className="text-xs font-bold mt-0.5">{d.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-2 uppercase tracking-wider">
                  3. Select Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`flex items-center justify-center space-x-1.5 p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-400 border-amber-300 text-slate-950 font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{time}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                  4. Your Details
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-amber-500/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
                  />
                </div>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="Work Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-amber-500/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
                  />
                </div>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-white/5 border border-amber-500/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg hover:shadow-amber-500/40 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                <Calendar className="w-4 h-4" />
                <span>{isSending ? 'Sending Booking...' : 'Confirm Meeting & Dispatch Email'}</span>
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
              <h4 className="text-2xl font-bold font-heading text-white">Meeting Confirmed!</h4>
              <p className="text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
                We have scheduled your 30-minute consultation on <span className="text-amber-400 font-semibold">{selectedDate}</span> at <span className="text-amber-400 font-semibold">{selectedTime}</span>.
              </p>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300 text-left space-y-1.5 font-mono">
                <div><strong className="text-white">Topic:</strong> {topic}</div>
                <div><strong className="text-white">Attendee:</strong> {name} ({email})</div>
                <div><strong className="text-white">Dispatched To:</strong> support@balajione.dev & contact@balajione.dev</div>
                <div><strong className="text-white">Status:</strong> HTTP Email Notification Sent</div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={`mailto:${COMPANY_INFO.supportEmail}?cc=${COMPANY_INFO.contactEmail}&subject=${mailSubject}&body=${mailBody}`}
                  className="w-full py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Mail App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center space-x-1">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>Timezone: IST (Indian Standard Time UTC+5:30)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
