
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black text-white pb-32">
      <section className="pt-32 pb-40 border-b border-white/10 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-7xl md:text-[14rem] font-black tracking-tighter mb-16 leading-none uppercase">CONNECT</h1>
          <p className="text-2xl md:text-4xl text-white/50 max-w-2xl font-light">Let's engineer your growth machine.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 bg-black">
        <div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 uppercase">BOOK A CALL</h2>
          <div className="space-y-16 mb-24">
            <div className="flex items-start space-x-8 group">
              <div className="bg-white p-6 rounded-full group-hover:bg-[#FFC947] transition-colors">
                <Mail className="text-black" size={28} />
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-[0.4em] text-white/30 mb-2">Email</h4>
                <p className="text-2xl font-black tracking-tight hover:text-[#FFC947] transition-colors cursor-pointer">growth@myntmore.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-8 group">
              <div className="bg-white p-6 rounded-full group-hover:bg-[#FFC947] transition-colors">
                <Phone className="text-black" size={28} />
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-[0.4em] text-white/30 mb-2">Phone</h4>
                <p className="text-2xl font-black tracking-tight hover:text-[#FFC947] transition-colors cursor-pointer">+91 98210 08589</p>
              </div>
            </div>
            <div className="flex items-start space-x-8 group">
              <div className="bg-white p-6 rounded-full group-hover:bg-[#FFC947] transition-colors">
                <MapPin className="text-black" size={28} />
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-[0.4em] text-white/30 mb-2">Office</h4>
                <p className="text-2xl font-black tracking-tight">Mumbai</p>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.03] p-16 border-l-8 border-[#FFC947]">
            <p className="italic text-2xl text-white/70 leading-relaxed font-light mb-8">
              "Myntmore's approach to B2B growth is unlike anything in the Indian market. They don't just promise leads; they build scalable revenue engines."
            </p>
            <p className="font-black text-[10px] uppercase tracking-[0.5em] text-[#FFC947]">- Co-founder, TechSprout (Bangalore)</p>
          </div>
        </div>

        <div className="relative">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#111111] text-white p-20 md:p-32 text-center h-full flex flex-col justify-center border border-[#FFC947] shadow-[0_50px_100px_rgba(255,201,71,0.05)]"
            >
              <h3 className="text-5xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-none text-[#FFC947]">SENT.</h3>
              <p className="text-white/50 text-xl mb-16 font-medium">Our team will reach out within 24 hours to schedule your audit.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[10px] font-black uppercase tracking-[0.5em] border-b-4 border-white pb-1 self-center hover:text-[#FFC947] hover:border-[#FFC947] transition-colors"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 font-black text-xl focus:outline-none focus:border-[#FFC947] transition-colors placeholder:text-white/5 uppercase"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 font-black text-xl focus:outline-none focus:border-[#FFC947] transition-colors placeholder:text-white/5 uppercase"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Company</label>
                <input
                  required
                  type="text"
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 font-black text-xl focus:outline-none focus:border-[#FFC947] transition-colors placeholder:text-white/5 uppercase"
                  placeholder="ACME Corp"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 font-black text-xl focus:outline-none focus:border-[#FFC947] transition-colors resize-none placeholder:text-white/5 uppercase"
                  placeholder="Tell us about your goals"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFC947] text-black py-8 text-sm font-black uppercase tracking-[0.5em] hover:bg-white transition-all duration-300 flex items-center justify-center group"
              >
                SEND MESSAGE <Send className="ml-6 group-hover:translate-x-2 transition-transform" size={20} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
