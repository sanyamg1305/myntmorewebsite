
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, HelpCircle, Cpu, Zap, Target, BarChart3, ShieldCheck } from 'lucide-react';
import { SERVICES, CALENDLY_URL } from '../constants';

const Systems: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const systemModules = [
    {
      id: 'SYS_01',
      title: 'Outbound Infrastructure',
      tagline: 'Technical lead gen engineering.',
      icon: <Cpu size={24} />,
      services: SERVICES.filter(s => ['lead-gen', 'cold-email'].includes(s.id)),
      metrics: ['99.8% Deliverability', '3.5x Output', 'AI Personalization']
    },
    {
      id: 'SYS_02',
      title: 'Authority Architecture',
      tagline: 'High-intent demand generation.',
      icon: <ShieldCheck size={24} />,
      services: SERVICES.filter(s => ['demand-gen', 'personal-branding', 'newsletters'].includes(s.id)),
      metrics: ['150k+ Impressions', 'Top 1% Creators', 'Multi-channel Coverage']
    },
    {
      id: 'SYS_03',
      title: 'Execution Ops',
      tagline: 'Fractional & performance management.',
      icon: <Zap size={24} />,
      services: SERVICES.filter(s => ['sdr-services', 'fractional-cmo'].includes(s.id)),
      metrics: ['Done-for-you', 'Daily Optimization', 'Strategic Clarity']
    }
  ];

  const handleBooking = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <div className="bg-black text-white selection:bg-[#FFC947] selection:text-black min-h-screen">
      {/* HUD Header */}
      <section className="pt-40 pb-20 border-b border-white/5 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="space-y-6">

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase"
              >
                OUR SYSTEMS
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/40 max-w-sm leading-relaxed font-bold uppercase tracking-tight"
            >
              We stop building services. We start deploying revenue-generating infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vertical Module Stack */}
      <section className="py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-40">
            {systemModules.map((module, idx) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
              >
                {/* Module Sidebar (Technical look) */}
                <div className="lg:col-span-4 sticky top-40 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC947]">
                      {module.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-[#FFC947] uppercase tracking-[0.3em] mb-1">{module.id}</div>
                      <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">{module.title}</h2>
                    </div>
                  </div>

                  <p className="text-white/40 text-sm font-bold uppercase leading-relaxed max-w-xs pt-4">
                    {module.tagline}
                  </p>

                  <div className="pt-8 space-y-4">
                    {module.metrics.map(metric => (
                      <div key={metric} className="flex items-center gap-3 text-[10px] font-black text-white/20 uppercase tracking-widest bg-white/[0.02] p-3 border border-white/5 rounded-lg group hover:border-[#FFC947]/20 hover:text-white transition-all">
                        <BarChart3 size={12} className="text-[#FFC947]" />
                        {metric}
                      </div>
                    ))}
                  </div>

                  {/* Tech Circuit SVG Element - More Complex */}
                  <div className="hidden lg:block pt-12 opacity-30">
                    <svg width="240" height="120" viewBox="0 0 240 120" className="text-white">
                      <motion.path
                        d="M0 60 H40 L60 20 H120 L140 100 H180 L200 60 H240"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeDasharray="4,4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      <motion.circle
                        cx="60" cy="20" r="2.5"
                        fill="#FFC947"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1 }}
                      />
                      <motion.circle
                        cx="140" cy="100" r="2.5"
                        fill="#FFC947"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1.5 }}
                      />
                      <path d="M40 60 V100 H80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
                      <rect x="78" y="98" width="4" height="4" fill="currentColor" opacity="0.5" />
                    </svg>
                  </div>
                </div>

                {/* Module Details (Services) */}
                <div className="lg:col-span-8 space-y-12">
                  {module.services.map((service, sIdx) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group overflow-hidden relative"
                    >


                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                        <div className="space-y-6 flex-1">

                          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-[#FFC947] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-white/40 text-lg leading-relaxed max-w-xl font-medium">
                            {service.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {service.details?.map(detail => (
                              <div key={detail} className="flex items-center gap-3 text-[10px] font-black text-white/60 uppercase tracking-widest p-2 border border-white/5 rounded-md">
                                <Check size={14} className="text-[#FFC947]" />
                                {detail}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-8 md:pt-0">
                          <button
                            onClick={handleBooking}
                            className="flex items-center gap-4 bg-white/5 hover:bg-[#FFC947] hover:text-black p-4 rounded-2xl transition-all group/btn"
                          >
                            <span className="text-[10px] font-black uppercase tracking-widest">Connect Now</span>
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Process (HUD Style) */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">PROCESS</h2>
            <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] text-right">
              DEPLOYMENT LIFECYCLE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {['Inquiry', 'Architecture', 'Deployment', 'Optimization', 'Scaling'].map((step, idx) => (
              <div key={step} className="relative group">
                <div className="text-[10px] font-black text-[#FFC947] mb-4">0{idx + 1}</div>
                <div className="h-px w-full bg-white/10 mb-8 overflow-hidden relative">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    className="absolute inset-0 bg-[#FFC947] origin-left"
                  />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-[#FFC947] transition-colors">{step}</h4>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest leading-relaxed">
                  Systematic approach for guaranteed {step.toLowerCase()} outcomes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium FAQ Accordion Section */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4 space-y-8 sticky top-40 h-fit">
              <div className="w-16 h-16 rounded-full border border-[#FFC947]/30 flex items-center justify-center text-[#FFC947]">
                <HelpCircle size={32} />
              </div>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">
                TECHNICAL<br />
                <span className="text-white/20">QUERIES</span>
              </h2>
              <p className="text-white/40 text-sm font-bold uppercase tracking-tight leading-relaxed max-w-xs">
                Clarification for leadership teams deployment-readiness, integration complexity, and scaling.
              </p>


            </div>

            <div className="lg:col-span-8 space-y-4">
              {[
                {
                  q: 'What is the expected timeline for system maturity?',
                  a: 'We deploy the foundational infrastructure within the first 30 days. Full system maturity, optimization loops, and predictable pipeline scaling are typically achieved within 90 days of active deployment.'
                },
                {
                  q: 'What is your ideal client profile (ICP) for these systems?',
                  a: 'Our systems are engineered for B2B entities in SaaS, Fintech, and Tech-enabled services. We primarily work with Seed to Series C startups and specialized enterprise units requiring high-precision execution.'
                },
                {
                  q: 'What level of internal alignment is required for deployment?',
                  a: 'This is a done-for-you (DFY) engagement. We require minimal strategic alignment (approx. 2-4 hours monthly) to ensure synchronization with your internal revenue targets.'
                },
                {
                  q: 'How are your performance-based retainers structured?',
                  a: 'We operate on a transparent monthly retainer model focused on maintenance and growth, supplemented by incentive-based structures tied directly to qualified pipeline generation.'
                },
                {
                  q: 'How does Myntmore handle CRM and sales stack integration?',
                  a: 'Our outbound layers are built to sync seamlessly with Salesforce, HubSpot, and Pipedrive. We handle the technical mapping to ensure all engagement data flows directly into your source of truth.'
                },
                {
                  q: 'What security and compliance frameworks are built-in?',
                  a: 'All outreach infrastructure is GDPR compliant and adheres to SOC2 best practices. We utilize isolated server environments and rotative authority IPs to protect your domain reputation.'
                },
                {
                  q: 'What are the vertical scaling capabilities of the systems?',
                  a: 'The architecture is built for elasticity. We can increase volume nodes (10x scaling) within 48 hours without compromising deliverability or lead quality.'
                }
              ].map((faq, i) => {
                const [isOpen, setIsOpen] = useState(i === 0);
                return (
                  <motion.div
                    key={i}
                    className={`border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 ${isOpen ? 'bg-white/[0.03] border-white/10' : 'bg-transparent'}`}
                  >
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full text-left p-8 md:p-10 flex items-center justify-between group"
                    >
                      <span className={`text-xl md:text-2xl font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-[#FFC947]' : 'text-white'}`}>
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'bg-[#FFC947] border-[#FFC947] text-black' : 'border-white/10 text-white'}`}
                      >
                        <Zap size={16} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                        >
                          <div className="px-8 md:px-10 pb-10">
                            <div className="w-full h-px bg-white/5 mb-8" />
                            <p className="text-white/50 text-lg leading-relaxed font-bold uppercase tracking-tight max-w-3xl">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-48 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] tracking-tighter uppercase select-none pointer-events-none whitespace-nowrap">
          READY TO SCALE
        </div>

        <div className="relative z-10 px-6">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-16 uppercase">START DEPLOYMENT</h2>
          <button
            onClick={handleBooking}
            className="group relative inline-flex items-center gap-6 bg-[#FFC947] text-black px-12 py-6 text-sm font-black uppercase tracking-[0.5em] hover:bg-white transition-all duration-300"
          >
            Deploy Your System
            <div className="absolute -inset-2 border border-[#FFC947]/20 group-hover:-inset-4 transition-all duration-500 rounded-sm" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Systems;
