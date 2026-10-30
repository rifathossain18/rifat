import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  PackageCheck,
  LayoutTemplate,
  ShoppingCart,
  RefreshCw,
  Smartphone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { servicesData, ServiceItem } from '../data/services';
import { SectionHeading } from '../components/SectionHeading';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-400" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-blue-400" />;
      case 'LayoutTemplate':
        return <LayoutTemplate className="w-6 h-6 text-blue-400" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-blue-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-blue-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-400" />;
      default:
        return <Building2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-100 dark:bg-[#111827] border-t border-slate-200 dark:border-[#1E293B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading
            kicker="Capabilities &amp; Services"
            title="What I Can Build For Your Business."
            subtitle="From high-converting web landing pages in React to native-speed Flutter mobile apps, every deliverable is engineered for performance."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: 'easeOut'
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between p-7 rounded-2xl bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#1E293B] hover:border-blue-400 dark:hover:border-blue-500/40 transition-colors group shadow-lg shadow-slate-200/50 dark:shadow-black/20"
            >
              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] group-hover:border-blue-400 dark:group-hover:border-blue-500/30 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                  {service.shortDesc}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Key Deliverables
                  </div>
                  {service.deliverables.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Inquire Action */}
              <div className="pt-4 border-t border-slate-200 dark:border-[#1E293B] flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">Fixed or custom scope</span>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:translate-x-0.5 transition-all focus-visible:outline-none"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};
