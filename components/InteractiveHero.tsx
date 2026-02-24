import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, Target } from 'lucide-react';
import { CALENDLY_URL } from '../constants';
import { NodeButton } from './NodeButton';

const PHRASES = [
  "Best GTM Partner for B2B Companies?",
  "AI-Driven Appointment Setting Experts?",
  "AI + SDR + GTM — Top Agency?"
];

const TYPING_SPEED = 50;
const DELETING_SPEED = 30;
const PAUSE_DURATION = 1500;

export const InteractiveHero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleTyping = useCallback(() => {
    const currentPhrase = PHRASES[currentPhraseIndex];

    if (isDeleting) {
      setDisplayText(prev => prev.substring(0, prev.length - 1));
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex(prev => (prev + 1) % PHRASES.length);
      }
    } else {
      setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      if (displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      }
    }
  }, [currentPhraseIndex, displayText, isDeleting]);

  useEffect(() => {
    if (isSearched) {
      const timer = setTimeout(() => {
        setIsSearched(false);
      }, 30000); // 30 seconds
      return () => clearTimeout(timer);
    }
  }, [isSearched]);

  useEffect(() => {
    if (isSearched) return;

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isSearched, handleTyping]);

  const handleSearch = () => {
    if (displayText.length > 0) {
      setIsSearched(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleBooking = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFC947]/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl text-center"
      >
        <AnimatePresence mode="wait">
          {!isSearched ? (
            <motion.div
              key="search-view"
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="text-[#FFC947] font-black uppercase tracking-[0.4em] text-xs mb-6">
                AI-Powered B2B Growth Infrastructure
              </span>

              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                Search for the Best.
              </h1>

              <p className="text-white/40 text-lg md:text-xl font-medium mb-12">
                You’re already looking.
              </p>

              <div
                className={`group relative w-full max-w-2xl bg-[#111111] rounded-2xl border transition-all duration-300 ${isFocused ? 'border-[#FFC947] shadow-[0_0_30px_rgba(255,201,71,0.15)] scale-[1.02]' : 'border-white/5'
                  } ${isHovered && !isFocused ? 'border-[#FFC947]/30' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center px-6 py-5 md:py-6">
                  <Search className={`w-6 h-6 mr-4 transition-colors ${isFocused ? 'text-[#FFC947]' : 'text-white/20'}`} />
                  <input
                    type="text"
                    readOnly
                    value={displayText}
                    onKeyDown={onKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="flex-1 bg-transparent border-none outline-none text-white text-xl md:text-2xl font-medium blinking-cursor placeholder-white/10 cursor-default"
                  />
                  {displayText.length > 0 && (
                    <button
                      onClick={handleSearch}
                      className="text-[#FFC947] hover:scale-110 transition-transform"
                    >
                      <Loader2 className="w-6 h-6 animate-pulse" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-white text-4xl sm:text-5xl md:text-7xl font-black mb-12 tracking-tighter">
                You’ve Found It.
              </h2>

              <NodeButton
                label="Book Strategy Call"
                onClick={handleBooking}
                icon={Target}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
