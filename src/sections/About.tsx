import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Palette,
  Terminal,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  Layers,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { Profile3DCard } from '../components/Profile3DCard';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const skills = [
    { name: 'React.js', category: 'Frontend Web', level: 'Expert' },
    { name: 'Flutter', category: 'Mobile App (iOS/Android)', level: 'Expert' },
    { name: 'Tailwind CSS', category: 'Modern Styling', level: 'Expert' },
    { name: 'TypeScript', category: 'Type Safety & Logic', level: 'Advanced' },
    { name: 'JavaScript', category: 'Dynamic Interactivity', level: 'Expert' },
    { name: 'HTML5 & CSS3', category: 'Core Web Foundation', level: 'Expert' },
    { name: 'Framer Motion', category: '3D & Micro-Animations', level: 'Advanced' },
    { name: 'Responsive UI', category: 'Web & Mobile Viewports', level: 'Expert' }
  ];

  const philosophies = [
    {
      title: 'Clarity Over Cleverness',
      desc: 'Visitors scan in seconds. Copy, hierarchy, and navigation must be instantly intuitive.'
    },
    {
      title: 'Mobile & Web Parity',
      desc: 'Seamless user experience across iOS, Android, and all web screens.'
    },
    {
      title: 'Zero-Bloat Engineering',
      desc: 'Pure clean code without heavy legacy templates, ensuring sub-second load times.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-100 dark:bg-[#111827] border-t border-slate-200 dark:border-[#1E293B] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading
            kicker="Background"
            title={siteConfig.bioHeadline}
            subtitle="A dedicated independent web developer and Flutter app expert focused on building digital products that convert."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 3D Profile Card with Interactive Tilt & Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <Profile3DCard
              imageSrc="/assets/me.png"
              className="w-full max-w-sm sm:max-w-md"
            />
          </motion.div>

          {/* Right Column: Biography & Skills Inventory */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Biography Prose */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Meet the Developer</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                "I'm Rifat, a Frontend Web Developer &amp; Flutter Mobile App Expert focused on creating modern, high-converting digital products."
              </h3>
              {siteConfig.bioText.slice(1).map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {philosophies.map((p) => (
                <div
                  key={p.title}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] space-y-1 shadow-sm"
                >
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">✓ {p.title}</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 block font-normal leading-relaxed">{p.desc}</span>
                </div>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Skills &amp; Technologies
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-lg bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] text-center shadow-sm"
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white">{skill.name}</div>
                    <div className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Commitment & Talk Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] shadow-md">
              <div className="text-xs text-slate-600 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white block text-sm">Direct Collaboration</span>
                <span>No account managers or middlemen. You speak directly with Rifat from start to finish.</span>
              </div>

              <button
                onClick={onContactClick}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
