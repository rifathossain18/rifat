import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Mail,
  Send,
  Copy,
  Check,
  AlertCircle,
  Clock,
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Facebook
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/SectionHeading';

interface ContactProps {
  prefilledService?: string;
  prefilledBudget?: string;
}

export const Contact: React.FC<ContactProps> = ({
  prefilledService = '',
  prefilledBudget = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    serviceRequired: 'Business Landing Pages',
    estimatedBudget: '$399 – Standard Plan',
    projectDetails: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledBudget) {
      setFormData((prev) => ({ ...prev, estimatedBudget: prefilledBudget }));
    }
  }, [prefilledBudget]);

  const serviceOptions = [
    'High-Converting Landing Pages (React)',
    'Product & SaaS Landing Pages',
    'Flutter Mobile App Development (iOS & Android)',
    'E-commerce & Web Applications',
    'Website & UI/UX Redesign',
    'Responsive Frontend Development',
    'Custom Scope / Consultation'
  ];

  const budgetOptions = [
    '$199 – Basic Plan',
    '$399 – Standard Plan',
    '$699 – Premium Plan',
    '$1,000+ – Multi-Page / Complex Funnel',
    'Flexible / Let’s Discuss'
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp or phone number is required.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please share a brief summary of your project goals.';
    } else if (formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = 'Please provide at least 15 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateMessageBody = () => {
    return `Hello Rifat, I would like to inquire about a landing page project:
• Name: ${formData.fullName}
• Email: ${formData.email}
• WhatsApp: ${formData.whatsappNumber}
• Service: ${formData.serviceRequired}
• Estimated Budget: ${formData.estimatedBudget}
• Project Summary:
${formData.projectDetails}`;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = encodeURIComponent(generateMessageBody());
    const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmittedSuccess(true);
  };

  const handleEmailSend = () => {
    if (!validate()) return;

    const subject = encodeURIComponent(`Project Inquiry: ${formData.serviceRequired} – ${formData.fullName}`);
    const body = encodeURIComponent(generateMessageBody());
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmittedSuccess(true);
  };

  const handleCopyBrief = () => {
    if (!validate()) return;

    navigator.clipboard.writeText(generateMessageBody());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 3000);
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-5 h-5" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5" />;
      case 'Facebook':
        return <Facebook className="w-5 h-5" />;
      case 'WhatsApp':
        return <MessageSquare className="w-5 h-5" />;
      case 'Email':
        return <Mail className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-100 dark:bg-[#111827] border-t border-slate-200 dark:border-[#1E293B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Get In Touch"
          title="Start Your Project."
          subtitle="Tell me about your product, business goals, and timeline. I'll review your brief and get back to you promptly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact & Socials Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] p-6 sm:p-8 space-y-6 shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors duration-300">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-500/40 shadow-md shrink-0">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/me.png`}
                    alt="Rifat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Direct Communication</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">
                    Message or email Rifat directly for rapid answers.
                  </p>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                {/* Email card */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors group shadow-sm"
                >
                  <div className="p-2.5 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Email Address</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp card */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-emerald-500/50 transition-colors group shadow-sm"
                >
                  <div className="p-2.5 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">WhatsApp Chat</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      {siteConfig.contact.whatsappDisplay}
                    </div>
                  </div>
                </a>
              </div>

              {/* Working hours & availability note */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#111827]/60 border border-slate-200 dark:border-[#1E293B] space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Response Time:</span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400">Within 24 Hours</span>
                </div>
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 font-normal">
                  <span>Location:</span>
                  <span className="text-slate-700 dark:text-slate-300">{siteConfig.contact.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-[#1E293B]">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Connect on Socials
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-[#1E293B] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#1E293B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      title={social.name}
                    >
                      {getSocialIcon(social.name)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Frontend Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Project Inquiry Form</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Fill in your project details. Once completed, you can instantly send via WhatsApp, email, or copy your project brief.
                </p>
              </div>

              {submittedSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Inquiry brief formatted!</span>
                    <span>Your WhatsApp message or email client is prepared. Looking forward to discussing your project!</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleWhatsAppSend} noValidate className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name <span className="text-rose-500 dark:text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-white text-sm border focus:outline-none focus:ring-2 transition-colors ${
                      errors.fullName
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-[#1E293B] focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email & WhatsApp Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-500 dark:text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-white text-sm border focus:outline-none focus:ring-2 transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-[#1E293B] focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="whatsappNumber" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      WhatsApp / Phone Number <span className="text-rose-500 dark:text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, whatsappNumber: e.target.value });
                        if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: '' });
                      }}
                      placeholder="e.g. +880 1642-695161"
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-white text-sm border focus:outline-none focus:ring-2 transition-colors ${
                        errors.whatsappNumber
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-[#1E293B] focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                    {errors.whatsappNumber && (
                      <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.whatsappNumber}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Required & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceRequired" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Service Required
                    </label>
                    <select
                      id="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-white text-sm border border-slate-200 dark:border-[#1E293B] focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="estimatedBudget" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      id="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-white text-sm border border-slate-200 dark:border-[#1E293B] focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Project Details &amp; Goals <span className="text-rose-500 dark:text-rose-400">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDetails: e.target.value });
                      if (errors.projectDetails) setErrors({ ...errors, projectDetails: '' });
                    }}
                    placeholder="Tell me about your product or business, what sections you need, any reference websites, and your target launch date..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-white text-sm border focus:outline-none focus:ring-2 transition-colors resize-none ${
                      errors.projectDetails
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-[#1E293B] focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                {/* Action Buttons: WhatsApp Primary, Email, Copy Brief */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-lg shadow-emerald-600/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#111827] hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-[#1E293B] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                    title="Copy full brief to clipboard"
                  >
                    {copiedBrief ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Frontend Scope Disclosure (PRD Requirement) */}
                <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left pt-1">
                  * Note: This frontend form formats your project inquiry into a direct message for WhatsApp or Email. No form data is permanently stored on external servers.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

