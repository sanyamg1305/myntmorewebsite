import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface CountUpProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    onComplete?: () => void;
}

const CountUp: React.FC<CountUpProps> = ({ end, suffix = '', prefix = '', duration = 3, onComplete }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true });

    const hasStarted = useRef(false);

    useEffect(() => {
        if (isInView && !hasStarted.current) {
            hasStarted.current = true;
            let startTime: number | null = null;
            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else if (onComplete) {
                    onComplete();
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, end]);

    return <span ref={nodeRef}>{prefix}{count}{suffix}</span>;
}

const STATS = [
    { value: 100, suffix: 'M+', label: 'Revenue Generated', prefix: '$' },
    { value: 2, suffix: 'M+', label: 'Emails Sent' },
    { value: 100, suffix: 'K+', label: 'Meetings Scheduled' },
    { value: 100, suffix: '+', label: 'Past Clients' },
];

const SIGNALS = [
    "Hundreds of GTM Systems Engineered",
    "Sales Calendars Filled Year-Round",
    "Conversations Started Every Hour",
    "Outreach Activated Across 300+ Cities",
];

export const MetricsSection: React.FC = () => {
    const [completedStats, setCompletedStats] = useState<number[]>([]);

    const handleStatComplete = (index: number) => {
        setCompletedStats(prev => [...new Set([...prev, index])]);
    };

    return (
        <section className="bg-[#000000] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
            <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
                <div className="mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#FFC947] font-black uppercase tracking-[0.4em] text-xs"
                    >
                        LIVE PERFORMANCE SIGNALS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]"
                    >
                        The Architecture of <br />Predictable Growth
                    </motion.h2>
                </div>

                {/* Row 1: Primary Proof Cards (Aligned with strict theme) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -2, borderColor: '#FFC947' }}
                            className="relative bg-black border border-white/10 p-6 sm:p-10 md:p-12 rounded-2xl transition-all duration-300 group"
                        >
                            <div className="relative z-10 text-center">
                                <div className="text-4xl md:text-6xl font-black text-white mb-3">
                                    <CountUp
                                        end={stat.value}
                                        suffix={stat.suffix}
                                        prefix={stat.prefix}
                                        onComplete={() => handleStatComplete(i)}
                                    />
                                </div>
                                <div className="text-white/60 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Row 2: Operational Signals (Strict Specs) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { headline: 'Hundreds of', subtext: 'GTM Systems Engineered' },
                        { headline: 'Year-Round', subtext: 'Sales Calendars Filled' },
                        { headline: 'Every Hour', subtext: 'Conversations Started' },
                        { headline: '300+ Cities', subtext: 'Outreach Activated' },
                    ].map((signal, i) => (
                        <motion.div
                            key={signal.subtext}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                            whileHover={{
                                y: -2,
                                borderColor: '#FFC947',
                                transition: { duration: 0.2 }
                            }}
                            className="bg-black border border-white/10 p-6 sm:p-10 md:p-12 rounded-2xl transition-all duration-300 group relative text-center"
                        >
                            <div className="space-y-2">
                                <div className="text-3xl md:text-[40px] font-bold text-white tracking-tight leading-none">
                                    {signal.headline}
                                </div>
                                <div className="text-white/60 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] leading-tight">
                                    {signal.subtext}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
