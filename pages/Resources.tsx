
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, BookOpen, Clock, Activity, Terminal } from 'lucide-react';
import { BLOG_POSTS, PLAYBOOKS } from '../constants';

interface ResourcesProps {
  onNavigate?: (page: string) => void;
  onSelectBlog?: (id: string) => void;
}

const Resources: React.FC<ResourcesProps> = ({ onNavigate, onSelectBlog }) => {
  return (
    <div className="bg-black text-white selection:bg-[#FFC947] selection:text-black min-h-screen">
      {/* HUD Header */}
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
                DOCUMENTATION LIBRARY
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/40 max-w-sm leading-tight font-bold uppercase tracking-tight"
            >
              Technical playbooks and growth insights for revenue engineering teams.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Asset Library: Playbooks */}
      <section className="py-24 md:py-40 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">FREE PLAYBOOKS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLAYBOOKS.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-10 hover:border-[#FFC947]/50 transition-all duration-500 overflow-hidden"
              >


                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC947] mb-10 group-hover:scale-110 transition-transform">
                  <Download size={24} />
                </div>

                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight group-hover:text-[#FFC947] transition-colors leading-tight">
                  {p.title}
                </h3>

                <p className="text-white/40 text-sm font-medium mb-12 leading-relaxed uppercase tracking-tight group-hover:text-white/60 transition-colors">
                  {p.description}
                </p>

                <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#FFC947] group-hover:gap-6 transition-all">
                  Deploy_Playbook_v2.0 <ExternalLink size={12} />
                </button>

                {/* Decorative Pattern */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/[0.02] rounded-full group-hover:bg-[#FFC947]/5 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Logs: Blog */}
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">PROTOCOL INSIGHTS</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {BLOG_POSTS.map((post, idx) => (
              <motion.div
                key={post.id}
                onClick={() => onSelectBlog && onSelectBlog(post.id)}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="group relative cursor-pointer bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all overflow-hidden"
              >
                <div className="flex items-center gap-6 mb-8 text-[10px] font-black uppercase tracking-[0.4em]">
                  <span className="text-[#FFC947]">{post.category}</span>
                  <div className="w-1 h-1 bg-white/10 rounded-full" />
                  <span className="text-white/20">{post.date}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black mb-10 leading-none uppercase tracking-tighter group-hover:text-[#FFC947] transition-colors">
                  {post.title}
                </h3>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg text-[10px] font-black text-white/40 tracking-widest uppercase">
                    <Clock size={12} /> 6 MIN READ
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg text-[10px] font-black text-white/40 tracking-widest uppercase">
                    <Activity size={12} /> STABILITY: HIGH
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg text-[10px] font-black text-white/40 tracking-widest uppercase">
                    <Terminal size={12} /> READY TO DEPLOY
                  </div>
                </div>

                {/* Technical Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-10 transition-all">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#FFC947]">
                    <path d="M100 0 L100 100 L0 100" fill="currentColor" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter: Protocol Subscription */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FFC947] p-12 md:p-24 rounded-[3rem] text-black relative overflow-hidden group">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }} />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-xl space-y-8">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-[#FFC947]">
                  <Mail size={32} />
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                  SUBSCRIBE TO<br />
                  <span className="opacity-40">PROTOCOLS</span>
                </h2>
                <p className="text-lg font-black uppercase tracking-tight opacity-70">
                  Weekly growth systems, outbound scripts, and architectural updates delivered to your terminal.
                </p>
              </div>

              <div className="w-full lg:max-w-md space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="ENTER EMAIL"
                    className="w-full bg-black/5 border-2 border-black/10 px-8 py-6 font-black text-sm focus:border-black transition-all outline-none uppercase tracking-widest placeholder:text-black/30 rounded-2xl"
                  />
                </div>
                <button className="w-full bg-black text-[#FFC947] px-12 py-6 font-black text-sm uppercase tracking-[.4em] hover:bg-white hover:text-black transition-all rounded-2xl">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
