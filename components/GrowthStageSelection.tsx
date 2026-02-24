import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Check, MousePointer2, UserCircle2, BarChart3, Target } from 'lucide-react';
import { NodeButton } from './NodeButton';

interface StageCardProps {
    id: number;
    icon: React.ReactNode;
    headline: string;
    subtext: string;
    expandedContent: string[];
    ctaText: string;
    isActive: boolean;
    isDimmed: boolean;
    onToggle: () => void;
    onNavigate: (page: string) => void;
}

const StageCard: React.FC<StageCardProps> = ({
    id,
    icon,
    headline,
    subtext,
    expandedContent,
    ctaText,
    isActive,
    isDimmed,
    onToggle,
    onNavigate
}) => {
    return (
        <motion.div
            animate={{ opacity: isDimmed ? 0.3 : 1 }}
            className={`bg-black rounded-2xl border transition-all duration-500 overflow-hidden h-full flex flex-col ${isActive ? 'border-[#FFC947]' : 'border-white/10 hover:border-white/20'
                }`}
        >
            <div
                className="p-8 md:p-10 cursor-pointer text-left flex-1 flex flex-col"
                onClick={onToggle}
            >
                <div className="flex items-start justify-between mb-8">
                    <div className="p-4 bg-white/[0.03] rounded-xl text-[#FFC947]">
                        {icon}
                    </div>
                    <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="text-white/20"
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-none">
                    {headline}
                </h3>
                <p className="text-white/50 font-medium mb-4 text-sm leading-relaxed flex-1">
                    {subtext}
                </p>

                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="pt-8 space-y-4 border-t border-white/5 mt-8">
                                {expandedContent.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/80 font-bold text-xs uppercase tracking-widest text-left">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFC947]" />
                                        {item}
                                    </div>
                                ))}

                                <NodeButton
                                    label={ctaText}
                                    onClick={(e) => {
                                        e?.stopPropagation();
                                        onNavigate('services');
                                    }}
                                    icon={Target}
                                    className="mt-8 !w-full"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const AnimatedMeetingsIcon = () => (
    <motion.div
        animate={{
            x: [0, 4, 0],
            y: [0, 4, 0],
            scale: [1, 0.9, 1]
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <MousePointer2 size={32} strokeWidth={2.5} />
    </motion.div>
);

const AnimatedPositioningIcon = () => (
    <div className="relative">
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="absolute inset-0 bg-[#FFC947] rounded-full blur-md"
        />
        <motion.div
            animate={{
                scale: [1, 1.05, 1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <UserCircle2 size={32} strokeWidth={2.5} />
        </motion.div>
    </div>
);

const AnimatedDirectionIcon = () => (
    <div className="relative w-8 h-8 flex items-end justify-between gap-1">
        {[0.6, 1, 0.8].map((speed, i) => (
            <motion.div
                key={i}
                initial={{ height: "30%" }}
                animate={{ height: ["30%", "100%", "30%"] }}
                transition={{
                    duration: 1.5 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                }}
                className="w-full bg-[#FFC947] rounded-sm"
            />
        ))}
    </div>
);

export const GrowthStageSelection: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const STAGES = [
        {
            id: 1,
            icon: <AnimatedMeetingsIcon />,
            headline: "Need Predictable Meetings",
            subtext: "Outbound, SDR, AI-driven appointment setting.",
            expandedContent: [
                "LinkedIn Lead Generation",
                "Cold Emailing",
                "SDR-as-a-Service"
            ],
            ctaText: "Build Our Pipeline"
        },
        {
            id: 2,
            icon: <AnimatedPositioningIcon />,
            headline: "Need Market Positioning",
            subtext: "Founder-led LinkedIn, newsletter, authority engines.",
            expandedContent: [
                "LinkedIn Personal Branding",
                "Instagram Personal Branding",
                "Email Newsletter Systems"
            ],
            ctaText: "Build Our Authority"
        },
        {
            id: 3,
            icon: <AnimatedDirectionIcon />,
            headline: "Need Growth Direction",
            subtext: "Fractional CMO + GTM alignment.",
            expandedContent: [
                "GTM Strategy",
                "Revenue Planning",
                "Funnel Architecture"
            ],
            ctaText: "Align Our Growth"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-black relative overflow-hidden border-y border-white/5">
            <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
                <div className="mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#FFC947] text-xs font-black uppercase tracking-[0.4em] block mb-4"
                    >
                        START WHERE YOU ARE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]"
                    >
                        What Does Your Business<br /> Need Right Now?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 max-w-xl mx-auto font-medium text-lg"
                    >
                        We align to your current stage — not sell unnecessary services.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {STAGES.map((stage, index) => (
                        <motion.div
                            key={stage.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="h-full"
                        >
                            <StageCard
                                {...stage}
                                isActive={activeCard === stage.id}
                                isDimmed={activeCard !== null && activeCard !== stage.id}
                                onToggle={() => setActiveCard(activeCard === stage.id ? null : stage.id)}
                                onNavigate={onNavigate}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
