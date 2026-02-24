
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Activity, BarChart3, Database, X, Zap, Cpu, Target } from 'lucide-react';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';

const CaseStudies: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<CaseStudy | null>(null);

  return (
    <div className="bg-black text-white selection:bg-[#FFC947] selection:text-black min-h-screen">
      {/* Technical Header */}
      <section className="pt-40 pb-20 border-b border-white/5 relative overflow-hidden">
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
                PROJECT LOGS
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/40 max-w-sm leading-tight font-bold uppercase tracking-tight"
            >
              Audited outcomes from deployed growth systems. Precision execution verified through real-world scaling.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid: Validation Reports */}
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-[#FFC947]/50 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                {/* HUD Header */}
                <div className="flex items-start justify-between mb-12">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-white/30 text-[10px] font-black uppercase tracking-widest">
                      <Database size={10} />
                      {cs.category.toUpperCase()}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-[#FFC947] group-hover:border-[#FFC947]/30 transition-all">
                    <ShieldCheck size={20} />
                  </div>
                </div>

                {/* Main Outcome Metric */}
                <div className="mb-10 relative">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="text-8xl md:text-[8rem] font-black tracking-tighter leading-none text-white group-hover:text-[#FFC947] transition-colors"
                  >
                    {cs.metric}
                  </motion.div>
                </div>

                <h3 className="text-2xl md:text-3xl font-black mb-12 leading-tight uppercase tracking-tight text-white group-hover:translate-x-1 transition-transform">
                  {cs.title}
                </h3>

                {/* Technical Footnote */}
                <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest">
                      <Activity size={12} className="text-[#FFC947]" />
                      Live Optimization
                    </div>
                    <div className="w-1 h-1 bg-white/10 rounded-full" />
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                      Verified Outcome
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedReport(cs)}
                    className="flex items-center gap-3 text-[10px] font-black text-[#FFC947] uppercase tracking-[.3em] group-hover:gap-5 transition-all"
                  >
                    View Full Report <ArrowUpRight size={14} />
                  </button>
                </div>

                {/* Blueprint Background Line */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M0 50 H100 M50 0 V100" stroke="white" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/10 text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-12">
            <BarChart3 size={12} className="text-[#FFC947]" />
            Request System Audit
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-16 uppercase">VALIDATE YOUR POTENTIAL</h2>
          <button
            onClick={() => window.open('https://calendly.com', '_blank')}
            className="group relative inline-flex items-center gap-6 bg-[#FFC947] text-black px-12 py-6 text-sm font-black uppercase tracking-[0.5em] hover:bg-white transition-all duration-300 rounded-sm"
          >
            connect with us
            <div className="absolute -inset-2 border border-[#FFC947]/20 group-hover:-inset-4 transition-all duration-500 rounded-sm" />
          </button>
        </div>
      </section>

      {/* Report Modal */}
      <AnimatePresence>
        {selectedReport && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedReport(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-8 md:p-12 border-b border-white/5 flex items-start justify-between bg-white/[0.02]">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#FFC947] font-black text-xs uppercase tracking-[.4em]">
                    <ShieldCheck size={16} /> VALIDATION REPORT / {selectedReport.id.toUpperCase()}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter max-w-2xl leading-[0.9]">
                    {selectedReport.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-16">
                  {/* Challenge */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-white/30 text-[10px] font-black uppercase tracking-[.4em]">
                      <Target size={14} className="text-[#FFC947]" />
                      Technical Challenge
                    </div>
                    <p className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight text-white/80">
                      {selectedReport.reportDetails?.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-white/30 text-[10px] font-black uppercase tracking-[.4em]">
                      <Cpu size={14} className="text-[#FFC947]" />
                      Engineered Solution
                    </div>
                    <p className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight text-white/80">
                      {selectedReport.reportDetails?.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-white/30 text-[10px] font-black uppercase tracking-[.4em]">
                      <Activity size={14} className="text-[#FFC947]" />
                      Validated Result
                    </div>
                    <p className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight text-[#FFC947]">
                      {selectedReport.reportDetails?.result}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-12">
                  {/* Main Metric Highlighting */}
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-2xl text-center space-y-2">
                    <div className="text-[10px] font-black text-white/20 uppercase tracking-[.4em]">CORE_METRIC</div>
                    <div className="text-6xl font-black text-[#FFC947] tracking-tighter">{selectedReport.metric}</div>
                  </div>

                  {/* Deployed Stack */}
                  <div className="space-y-6">
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-[.4em]">DEPLOYED_STACK</div>
                    <div className="space-y-3">
                      {selectedReport.reportDetails?.stack.map(item => (
                        <div key={item} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest group hover:border-[#FFC947]/30 transition-all">
                          <Zap size={14} className="text-[#FFC947]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 md:p-12 border-t border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">
                  AUTHENTICATED_RECORD // PROJECT_LOG_v2.1
                </div>
                <button
                  onClick={() => {
                    setSelectedReport(null);
                    window.open('https://calendly.com', '_blank');
                  }}
                  className="bg-[#FFC947] text-black px-10 py-5 text-[10px] font-black uppercase tracking-[.4em] rounded-sm hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,201,71,0.1)]"
                >
                  Deploy Similar System
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudies;
