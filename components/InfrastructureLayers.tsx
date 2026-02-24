import React, { useEffect } from 'react';
import { motion, useTransform, useMotionValue, animate } from 'framer-motion';

interface LayerData {
    id: number;
    title: string;
    description: string;
    tags: string[];
}

const LAYERS: LayerData[] = [
    {
        id: 1,
        title: "Strategy",
        description: "GTM alignment, ICP mapping, revenue models.",
        tags: ["Fractional CMO"]
    },
    {
        id: 2,
        title: "Positioning",
        description: "Founder authority + content distribution.",
        tags: ["LinkedIn", "Newsletter", "Podcast"]
    },
    {
        id: 3,
        title: "Acquisition",
        description: "AI-driven outbound systems.",
        tags: ["LinkedIn Lead Gen", "Cold Email"]
    },
    {
        id: 4,
        title: "Pipeline",
        description: "SDR execution + meeting flow.",
        tags: ["Appointment Setting"]
    }
];

const ArchitectureBlock: React.FC<{
    layer: LayerData;
    progress: any;
    index: number;
}> = ({ layer, progress, index }) => {
    // Each block activates in its own 25% of the range
    const start = index * 0.25;
    const end = (index + 1) * 0.25;

    const isActive = useTransform(progress, [start, end], [0, 1]);
    const opacity = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0.4, 1, 1, 0.4]);
    const scale = useTransform(progress, [start, end], [0.98, 1]);
    const borderColor = useTransform(isActive, [0, 1], ["rgba(255, 255, 255, 0.1)", "#FFC947"]);
    const glowOpacity = useTransform(isActive, [0, 1], [0, 0.4]);

    return (
        <motion.div
            style={{ opacity, scale }}
            className="flex-1 min-w-[280px] md:min-w-0 h-full relative group"
        >
            <motion.div
                style={{ borderColor }}
                className="h-full bg-black border rounded-xl p-8 flex flex-col items-center text-center justify-between gap-6 transition-all duration-500 hover:-translate-y-1 relative"
            >
                {/* Glow Effect */}
                <motion.div
                    style={{ opacity: glowOpacity }}
                    className="absolute inset-0 bg-[#FFC947]/5 blur-2xl -z-10 pointer-events-none"
                />

                {/* Layer Marker */}
                <div className="w-full">
                    <motion.div
                        className="text-[10px] font-black tracking-[0.4em] uppercase mb-4"
                        style={{ color: useTransform(isActive, [0, 1], ["rgba(255,255,255,0.3)", "#FFC947"]) }}
                    >
                        LAYER 0{layer.id}
                    </motion.div>
                    <motion.h3
                        className="text-2xl md:text-3xl font-black mb-4 tracking-tighter uppercase"
                        style={{ color: useTransform(isActive, [0, 1], ["rgba(255,255,255,0.5)", "#FFFFFF"]) }}
                    >
                        {layer.title}
                    </motion.h3>
                    <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed px-2">
                        {layer.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {layer.tags.map(tag => (
                        <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border transition-all duration-500 ${index === 0 ? 'border-[#FFC947] text-[#FFC947]' : 'border-white/10 text-white/30'
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Signal Connector Arrow */}
            {index < LAYERS.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                    <div className="w-8 h-px bg-white/20 relative">
                        <motion.div
                            style={{ scaleX: isActive }}
                            className="absolute inset-0 bg-[#FFC947] origin-left shadow-[0_0_10px_#FFC947]"
                        />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-white/20 rotate-45" />
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export const InfrastructureLayers: React.FC = () => {
    const progress = useMotionValue(0);

    useEffect(() => {
        const controls = animate(progress, 1, {
            duration: 10,
            repeat: Infinity,
            ease: "linear"
        });
        return () => controls.stop();
    }, [progress]);

    return (
        <section className="py-16 md:py-24 bg-black relative overflow-hidden border-t border-white/5">
            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16 text-center mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#FFC947] text-xs font-black uppercase tracking-[0.5em] block mb-8"
                    >
                        REVENUE INFRASTRUCTURE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.85]"
                    >
                        Systemized Growth.<br />Engineered Results.
                    </motion.h2>
                    <p className="text-white/70 font-medium text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                        Growth is a component-based architecture. Build the map, then scale the volume.
                    </p>
                </div>

                {/* Architecture Row */}
                <div className="relative">
                    <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-10 md:pb-0 scroll-smooth snap-x">
                        {LAYERS.map((layer, index) => (
                            <div key={layer.id} className="snap-center">
                                <ArchitectureBlock
                                    layer={layer}
                                    progress={progress}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Progress Fill Bar - Integrated better */}
                    <div className="mt-16 h-px w-full bg-white/5 relative hidden md:block">
                        <motion.div
                            style={{ scaleX: progress }}
                            className="absolute inset-0 bg-[#FFC947]/30 origin-left"
                        />
                    </div>
                </div>
            </div>

            {/* Background Structural Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="absolute top-1/4 w-full h-px bg-white" />
                <div className="absolute top-1/2 w-full h-px bg-white" />
                <div className="absolute top-3/4 w-full h-px bg-white" />
                <div className="absolute left-1/4 h-full w-px bg-white" />
                <div className="absolute left-1/2 h-full w-px bg-white" />
                <div className="absolute left-3/4 h-full w-px bg-white" />
            </div>
        </section>
    );
};
