import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Eye,
  ArrowRight,
  Headphones,
  Utensils,
  Layers,
  Home,
  Briefcase,
  UserCheck,
  Sparkles
} from 'lucide-react';
import { projectsData, Project } from '../data/projects';
import { SectionHeading } from '../components/SectionHeading';

interface ProjectsProps {
  onOpenModal: (project: Project, tab?: 'preview' | 'details') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'SaaS & Tech', value: 'saas' },
    { label: 'Hospitality & Dining', value: 'hospitality' },
    { label: 'Services & Personal', value: 'services' }
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.categorySlug === activeCategory);

  const getProjectIcon = (categorySlug: string) => {
    switch (categorySlug) {
      case 'ecommerce':
        return <Headphones className="w-5 h-5 text-blue-400" />;
      case 'hospitality':
        return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'saas':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'services':
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-slate-50 dark:bg-[#0B1220] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading
            kicker="Selected Work"
            title="Conversion-Focused Landing Pages."
            subtitle="Explore high-converting landing pages and applications engineered with React, TypeScript, and Tailwind CSS, built to convert visitors into loyal customers."
          />
        </motion.div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-[#1E293B] shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Demo indicator disclaimer */}
        <div className="text-center mb-8">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Realistic demo projects designed to showcase architecture, responsive styling, and conversion flows.
          </span>
        </div>

        {/* Projects Grid with 3D Perspective Hover Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
              className="flex flex-col rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/30 group transition-colors duration-300"
              style={{ perspective: 1000 }}
            >
              {/* 3D-Perspective Hover Image / Mockup Container */}
              <motion.div
                whileHover={{
                  rotateX: -7,
                  rotateY: 7,
                  scale: 1.025,
                  z: 15
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 18,
                  mass: 0.6
                }}
                style={{
                  transformPerspective: 1000,
                  transformStyle: 'preserve-3d'
                }}
                className={`relative h-56 sm:h-64 bg-gradient-to-br ${project.previewGradient} p-5 flex flex-col justify-between overflow-hidden cursor-pointer select-none`}
                onClick={() => onOpenModal(project, 'preview')}
              >
                {/* Decorative Top Browser Bar with 3D Z-depth */}
                <div
                  className="flex items-center justify-between text-xs text-slate-400 z-10"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  <div className="flex items-center gap-1.5 bg-[#0B1220]/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#1E293B]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[11px] text-slate-300">
                      demo.{project.id}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#0B1220]/80 backdrop-blur-sm border border-[#1E293B] text-slate-300 shadow-md">
                    {getProjectIcon(project.categorySlug)}
                  </div>
                </div>

                {/* Simulated Visual Preview Card with 3D Pop */}
                <div
                  className="my-auto text-center"
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/25 text-blue-300 border border-blue-500/40 text-[10px] font-semibold mb-2 shadow-sm">
                    {project.demoPreview.badge}
                  </div>
                  <h4 className="text-xl font-extrabold text-white tracking-tight px-4 line-clamp-2 drop-shadow-md">
                    {project.demoPreview.heroTitle}
                  </h4>
                  <p className="mt-1 text-xs text-slate-300/90 px-6 line-clamp-1">
                    {project.demoPreview.heroSubtitle}
                  </p>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0B1220]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenModal(project, 'preview');
                    }}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Live Preview</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenModal(project, 'details');
                    }}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-200 bg-[#111827] hover:bg-slate-800 border border-[#1E293B] rounded-lg shadow-lg flex items-center gap-1.5"
                  >
                    <span>View Details</span>
                  </button>
                </div>

                {/* Bottom stats pill */}
                <div
                  className="flex items-center justify-between text-[11px] text-slate-400 z-10 pt-2 border-t border-slate-800/60"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <span className="font-semibold text-white">
                    {project.metrics[0]?.value} {project.metrics[0]?.label}
                  </span>
                  <span className="text-blue-400/90 font-medium">3D Interactive · Click</span>
                </div>
              </motion.div>

              {/* Card Meta & Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-[#1E293B]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#0B1220] px-2.5 py-1 rounded border border-slate-200 dark:border-[#1E293B]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 px-1 py-1">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => onOpenModal(project, 'preview')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                    </button>

                    <button
                      onClick={() => onOpenModal(project, 'details')}
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <span>Case Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
