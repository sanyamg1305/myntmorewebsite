import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Target, Search } from 'lucide-react';
import { SERVICES, CASE_STUDIES, CALENDLY_URL } from '../constants';
import { InteractiveHero } from '../components/InteractiveHero';
import { MetricsSection } from '../components/MetricsSection';
import { GrowthEngine } from '../components/GrowthEngine';
import { GrowthStageSelection } from '../components/GrowthStageSelection';
import { InfrastructureLayers } from '../components/InfrastructureLayers';
import { NodeButton } from '../components/NodeButton';
import tajLogo from '../assets/taj.png';
import weworkLogo from '../assets/wework.png';
import sunpharmaLogo from '../assets/sunpharma.png';
import tanishqLogo from '../assets/tanishq.png';
import logo1 from '../assets/partners/1.png';
import logo2 from '../assets/partners/2.png';
import logo3 from '../assets/partners/3.png';
import logo4 from '../assets/partners/4.png';
import logo5 from '../assets/partners/5.png';
import logo6 from '../assets/partners/6.png';
import logo7 from '../assets/partners/7.png';
import logo8 from '../assets/partners/8.png';

// New Logos
import antal from '../assets/partners/antal.png';
import arcedior from '../assets/partners/arcedior.png';
import drsayani from '../assets/partners/drsayani.png';
import edababy from '../assets/partners/edababy.png';
import happyecom from '../assets/partners/happyecom.png';
import networkbay from '../assets/partners/networkbay.png';
import prakritik from '../assets/partners/prakritik.png';
import refreshRack from '../assets/partners/refresh-rack.png';
import skc from '../assets/partners/skc.png';
import vedastram from '../assets/partners/vedastram.png';

const CLIENT_LOGOS = [
  tajLogo, weworkLogo, sunpharmaLogo, tanishqLogo,
  antal, arcedior, drsayani, edababy, happyecom,
  networkbay, prakritik, refreshRack, skc, vedastram
];
const PARTNER_LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

interface SectionHeadingProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, level = 'h2' }) => {
  const Tag = level as any;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "circOut" }}
      className="mb-12 text-center"
    >
      <Tag className={level === 'h1' ? 'massive-header' : ''}>{children}</Tag>
    </motion.div>
  );
};

const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const targetRef = useRef(null);

  const handleBooking = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="overflow-x-hidden bg-black text-white railway-track" ref={targetRef}>
      <div className="railway-node w-full !p-0">
        <InteractiveHero />
      </div>

      <div className="railway-node">
        <MetricsSection />
      </div>

      {/* Trust Bar (Infinite Marquee) - CLIENTS */}
      <section className="py-12 border-y border-white/5 relative overflow-hidden relative z-10 railway-node">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-center text-xs font-black uppercase tracking-[0.6em] text-white/20">Powering Leading Revenue Teams</p>
        </div>
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex space-x-12 md:space-x-20 items-center whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => {
              // Custom scaling logic for visual balance
              let scale = 1;
              const logoStr = String(logo).toLowerCase();

              if (logo === prakritik || logo === networkbay) {
                scale = 2.4; // Very small logos
              } else if (logo === skc || logo === vedastram || logo === drsayani ||
                logo === weworkLogo || logo === sunpharmaLogo || logo === edababy) {
                scale = 1.8; // Small logos
              } else if (logo === refreshRack || logo === happyecom) {
                scale = 0.7; // Large logos
              }

              return (
                <div key={index} className="w-24 md:w-36 h-12 flex items-center justify-center shrink-0">
                  <img
                    src={logo}
                    alt="Client Logo"
                    style={{ transform: `scale(${scale})` }}
                    className="max-h-full max-w-full object-contain mix-blend-screen invert grayscale contrast-200 hover:!scale-[1.15] transition-transform duration-500"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="railway-node w-full">
        <GrowthEngine />
      </div>

      <div className="railway-node w-full">
        <GrowthStageSelection onNavigate={onNavigate} />
      </div>

      <div className="railway-node w-full">
        <InfrastructureLayers />
      </div>

      {/* Framework Section */}
      <section className="py-16 md:py-24 relative z-10 w-full railway-node">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading level="h1">THE<br />FRAMEWORK</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 divide-x divide-white/5 border border-white/5">
            {[
              { title: 'Diagnose', icon: Search, text: 'Mapping the leaks in your current acquisition systems.' },
              { title: 'Build', icon: Zap, text: 'Deploying custom tech stacks and messaging frameworks.' },
              { title: 'Execute', icon: Target, text: 'Active outbound and content scaling by our core team.' },
              { title: 'Scale', icon: TrendingUp, text: 'Optimizing for LTV and institutionalizing success.' },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="p-16 relative overflow-hidden group cursor-default flex flex-col items-center"
              >
                <div className="text-7xl md:text-9xl font-black text-white/[0.02] absolute -top-8 md:-top-16 -right-4 md:-right-8 group-hover:text-[#FFC947]/10 transition-colors duration-700">0{i + 1}</div>

                <div className="relative z-10 text-center">
                  <step.icon className="w-12 h-12 mb-10 text-[#FFC947] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter leading-none">{step.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed max-w-[200px] mx-auto">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 relative z-10 w-full railway-node">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading level="h1">RESULTS<br /><span className="text-[#FFC947]">proven</span></SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center">
            {CASE_STUDIES.slice(0, 2).map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="border border-white/10 p-12 hover:border-[#FFC947] bg-white/[0.02] transition-all duration-500 group cursor-pointer flex flex-col items-center justify-between h-full min-h-[400px]"
                onClick={() => onNavigate('case-studies')}
              >
                <div>
                  <div className="text-[10px] font-black text-[#FFC947] uppercase tracking-[0.5em] mb-8">{cs.category}</div>
                  <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tighter text-white group-hover:text-[#FFC947] transition-colors leading-none mx-auto">{cs.metric}</div>
                  <h3 className="text-2xl font-bold mb-8 leading-tight tracking-tight text-white/80 group-hover:text-white transition-colors">{cs.title}</h3>
                </div>
                <div className="flex items-center justify-center text-xs font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-[#FFC947] transition-colors pt-8 border-t border-white/5 w-full">
                  View Strategy <ArrowRight className="ml-2" size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Ticker - Just above the footer/final CTA */}
      <section className="py-12 border-t border-white/5 relative overflow-hidden z-10 railway-node">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-center text-xs font-black uppercase tracking-[0.6em] text-white/20">Our Partners</p>
        </div>
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex space-x-12 md:space-x-20 items-center whitespace-nowrap grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
              <div key={index} className="w-24 md:w-40 h-16 flex items-center justify-center shrink-0">
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="max-h-full max-w-full object-contain mix-blend-screen invert grayscale contrast-[1.5] brightness-200 hover:scale-110 transition-transform duration-500 scale-[1.4]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final Yellow CTA Banner */}
      <section className="py-24 relative z-20 w-full railway-node border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            onClick={handleBooking}
            className="bg-[#FFC947] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 cursor-pointer transition-all duration-500 shadow-[0_20px_50px_rgba(255,201,71,0.15)] relative"
          >
            {/* Left: Heading */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-black text-black leading-none tracking-tighter uppercase mb-4">
                READY TO<br /> <span className="text-black/40">DOMINATE?</span>
              </h1>
              <p className="text-black/80 font-bold text-lg uppercase tracking-widest">Let's build your growth engine</p>
            </div>

            {/* Middle: Supporting Text */}
            <div className="max-w-[280px] text-center md:text-left hidden lg:block border-l border-black/10 pl-8">
              <p className="text-black/70 text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed">
                ENGINEERING HIGH-PERFORMANCE OUTBOUND SYSTEMS & AUTHORITY ARCHITECTURE.
              </p>
            </div>

            {/* Right: Large Arrow Button */}
            <div className="w-24 h-24 md:w-36 md:h-36 bg-black flex items-center justify-center rounded-[2rem] md:rounded-[2.5rem] shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <ArrowRight className="w-12 h-12 md:w-20 md:h-20 text-[#FFC947] -rotate-45" strokeWidth={3} />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
