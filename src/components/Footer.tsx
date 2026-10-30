import React from 'react';
import { ArrowUp, Mail, MessageSquare, Github, Linkedin, Facebook } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { servicesData } from '../data/services';
import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  onNavClick: (href: string) => void;
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-[#0B1220] border-t border-slate-200 dark:border-[#1E293B] pt-16 pb-12 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-[#1E293B]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                {siteConfig.brand}
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm font-normal">
              Full Stack Web Developer &amp; Flutter Mobile App Expert. Crafting high-converting landing pages with React &amp; Tailwind, and building cross-platform mobile apps with Flutter.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{siteConfig.availability.badgeText}</span>
              <span>·</span>
              <span className="text-slate-500 dark:text-slate-400">{siteConfig.contact.location}</span>
            </div>

            {/* Social icons */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="p-2 rounded-lg bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-[#1E293B] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#1E293B] transition-colors shadow-sm"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-[#1E293B] text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-[#1E293B] transition-colors shadow-sm"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/rifathossain18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-[#1E293B] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#1E293B] transition-colors shadow-sm"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mdrifathossainsagor/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-[#1E293B] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-[#1E293B] transition-colors shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576369935702"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-[#1E293B] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-[#1E293B] transition-colors shadow-sm"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.navLinks.slice(0, 6).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(item.href);
                    }}
                    className="hover:text-blue-600 dark:hover:text-white transition-colors text-slate-600 dark:text-slate-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links & Theme Toggle */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Services Offered
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="text-left hover:text-blue-600 dark:hover:text-white transition-colors text-slate-600 dark:text-slate-400"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                Theme Preference
              </span>
              <ThemeToggle showLabel />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {currentYear} {siteConfig.brand} All rights reserved. Designed &amp; developed with precision.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
