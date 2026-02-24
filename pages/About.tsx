
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import tejasImg from '../assets/tejas.png';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-48 border-b border-white/10 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FFC947]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-[12rem] font-black tracking-tighter mb-20 uppercase leading-none"
          >
            WHO WE ARE
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <p className="text-3xl font-light leading-relaxed text-white/60">
              Myntmore was founded to bridge the gap between creative storytelling and hard-hitting performance. We don't just generate leads; we engineer authority.
            </p>
            <p className="text-3xl font-light leading-relaxed text-white/60">
              Today, we serve as the outsourced growth engine for B2B brands that refuse to settle for average conversion rates. We leverage AI, automation, and humans to scale.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32 bg-black border-b border-white/10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase text-[#FFC947]">MISSION</h2>
            <div className="h-2 w-24 bg-white/20"></div>
          </div>
          <div className="lg:w-2/3">
            <div className="prose prose-xl prose-invert leading-relaxed text-white/80 font-light">
              <p className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
                Empowering businesses to thrive in the digital age.
              </p>
              <p className="mb-6">
                At Myntmore, our mission is to empower businesses of all sizes to thrive in the digital age. We believe that effective marketing should not only drive traffic and generate leads, but also build lasting connections.
              </p>
              <p className="mb-6">
                To achieve this mission, we combine cutting-edge technology with human creativity and empathy, using data-driven insights to develop personalized strategies.
              </p>
              <p>
                Our ultimate goal is to help our clients achieve their business objectives and exceed their expectations, delivering results that go beyond just numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight Section */}
      <section className="max-w-7xl mx-auto px-6 py-40 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden border border-white/10 group"
          >
            <img
              src={tejasImg}
              alt="Tejas Jhaveri"
              className="w-full h-full object-cover object-top grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
            <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2">Tejas Jhaveri</h3>
              <p className="text-[#FFC947] text-xs font-black uppercase tracking-[0.5em]">Founder & Visionary</p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-[#FFC947]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFC947]">The Story</span>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
                FROM ZERO TO <span className="text-[#FFC947]">$3M+</span> REVENUE
              </h2>

              <div className="space-y-6 text-white/60 text-lg leading-relaxed font-medium">
                <p>
                  Hey there! I am <span className="text-white font-bold">Tejas Jhaveri</span>, a self-inspired entrepreneur who started an inspiring journey with eCommerce company Flintstop.com from zero in 2014 and scaled it to more than $3 million in revenue and 12,000 orders a day.
                </p>
                <p>
                  As an Angel Investor and Tedx speaker, I've spent years visualizing dreams and turning them into scalable realities. I don't just focus on metrics; I focus on the customer persona and the emotions that drive the click-to-cart journey.
                </p>
                <p>
                  I have mentored and implemented growth strategies for more than <span className="text-[#FFC947] font-black">200+ D2C and SaaS companies</span>, reinventing customer journeys to help them accentuate online sales and dominate their markets.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">Tedx Talk</div>
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest">Global Speaker</p>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">200+ Brands</div>
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest">Mentored & Scaled</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
