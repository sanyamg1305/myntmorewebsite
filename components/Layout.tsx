
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Linkedin, Twitter, Instagram } from 'lucide-react';
import { CALENDLY_URL } from '../constants';
import logo from '../assets/logo.jpg';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Case Studies', value: 'case-studies' },
    { label: 'Resources', value: 'resources' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (value: string) => {
    onNavigate(value);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBooking = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFC947] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-white/10 py-1' : 'bg-transparent border-transparent py-2'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            className="text-3xl font-black tracking-tighter cursor-pointer text-white select-none flex items-center gap-4"
            onClick={() => handleNavClick('home')}
          >
            <img src={logo} alt="Myntmore Logo" className="h-[120px] w-auto rounded-full" />
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className={`relative transition-colors group ${link.value === 'services'
                  ? 'text-left'
                  : `text-xs font-bold uppercase tracking-widest hover:text-[#FFC947] ${activePage === link.value ? 'text-[#FFC947]' : 'text-white/50'}`
                  }`}
              >
                {link.value === 'services' ? (
                  <div className="flex flex-col items-start leading-none group">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 line-through decoration-white/20 mb-1">
                      Your Bottlenecks
                    </span>
                    <span className={`text-xs font-black uppercase tracking-widest transition-all ${activePage === 'services' ? 'text-[#FFC947]' : 'text-white'
                      } group-hover:text-white`}>
                      Our Systems
                    </span>
                    <div className="h-px bg-[#FFC947] w-0 group-hover:w-full transition-all duration-300 mt-1" />
                  </div>
                ) : (
                  <>
                    {link.label}
                    {activePage === link.value && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#FFC947]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBooking}
            className="hidden md:block bg-[#FFC947] text-black px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-full"
          >
            Book a Strategy Call
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black pt-32 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.value}
                  onClick={() => handleNavClick(link.value)}
                  className={`text-left uppercase tracking-tighter transition-all ${link.value === 'services' ? '' : 'text-4xl font-black text-white hover:text-[#FFC947]'
                    }`}
                >
                  {link.value === 'services' ? (
                    <div className="flex flex-col items-start leading-none group py-2">
                      <span className="text-sm font-black text-white/30 line-through decoration-white/20 mb-1">
                        Your Bottlenecks
                      </span>
                      <span className="text-4xl font-black text-white group-active:text-[#FFC947]">
                        Our Systems
                      </span>
                    </div>
                  ) : (
                    link.label
                  )}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={handleBooking}
                className="w-full bg-[#FFC947] text-black py-5 font-black text-xl uppercase tracking-widest mt-8"
              >
                Book a Strategy Call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/5 pb-20 mb-10">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-4xl font-black mb-8 tracking-tighter">Myntmore</h2>
            <p className="text-white/30 text-sm leading-relaxed mb-8 max-w-xs">
              Transforming B2B pipeline with AI-driven precision and authoritative thought leadership systems.
            </p>
            <div className="flex space-x-5">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <motion.div key={i} whileHover={{ y: -5, color: '#FFC947' }} className="cursor-pointer text-white/40 transition-colors">
                  <Icon size={20} />
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-[#FFC947]">Services</h4>
            <ul className="space-y-4 text-white/30 text-xs font-bold uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('services')}>Lead Generation</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('services')}>Demand Generation</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('services')}>Personal Branding</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('services')}>SDR Services</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-[#FFC947]">Company</h4>
            <ul className="space-y-4 text-white/30 text-xs font-bold uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('about')}>About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('case-studies')}>Case Studies</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('contact')}>Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('contact')}>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-[#FFC947]">Resources</h4>
            <ul className="space-y-4 text-white/30 text-xs font-bold uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('resources')}>Growth Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('resources')}>Outbound Playbooks</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('resources')}>Newsletter</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
          <p>© 2024 Myntmore Agency. Built for Scale.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
