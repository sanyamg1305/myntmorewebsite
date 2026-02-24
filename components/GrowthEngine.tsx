import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, Activity, Zap, Cpu, BarChart3, ShieldCheck } from 'lucide-react';

interface NodeData {
    id: string;
    title: string;
    description: string;
    icon: any;
    details: {
        subtitle: string;
        points: string[];
    };
    position: { x: number; y: number };
}

const NODES: NodeData[] = [
    {
        id: 'gtm-strategy',
        title: 'GTM Strategy',
        description: 'Strategic Foundation',
        icon: Target,
        details: {
            subtitle: 'Market Architecture',
            points: [
                'ICP development & revenue modeling',
                'Sales-led vs PLG motion design',
                'Messaging frameworks'
            ]
        },
        position: { x: 15, y: 30 }
    },
    {
        id: 'thought-leadership',
        title: 'Authority',
        description: 'Thought Leadership',
        icon: ShieldCheck,
        details: {
            subtitle: 'Authority Engine',
            points: [
                'Strategic content architecture',
                'Founder ghostwriting',
                'Automated distribution'
            ]
        },
        position: { x: 15, y: 70 }
    },
    {
        id: 'lead-gen',
        title: 'Lead Gen',
        description: 'Core Hub',
        icon: Cpu,
        details: {
            subtitle: 'Pipeline Infrastructure',
            points: [
                'AI-driven personalization',
                'Deliverability optimization',
                'Volume scaling'
            ]
        },
        position: { x: 50, y: 50 }
    },
    {
        id: 'sdr-execution',
        title: 'Execution',
        description: 'SDR Team',
        icon: Zap,
        details: {
            subtitle: 'Human Performance',
            points: [
                'Trained SDR teams',
                'Objection handling',
                'Discovery excellence'
            ]
        },
        position: { x: 85, y: 30 }
    },
    {
        id: 'revenue-pipeline',
        title: 'Revenue',
        description: 'Growth Ops',
        icon: BarChart3,
        details: {
            subtitle: 'Predictable Growth',
            points: [
                'Revenue reporting',
                'Sales cycle compression',
                'Retention mapping'
            ]
        },
        position: { x: 85, y: 70 }
    }
];

const CONNECTIONS = [
    { from: 'gtm-strategy', to: 'lead-gen' },
    { from: 'thought-leadership', to: 'lead-gen' },
    { from: 'lead-gen', to: 'sdr-execution' },
    { from: 'lead-gen', to: 'revenue-pipeline' }
];

const getManhattanPath = (from: { x: number, y: number }, to: { x: number, y: number }) => {
    const midX = (from.x + to.x) / 2;
    // We want a 90 degree "Z" or "L" shape
    return `M ${from.x} ${from.y} L ${midX} ${from.y} L ${midX} ${to.y} L ${to.x} ${to.y}`;
};

export const GrowthEngine: React.FC = () => {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-cycle for visual movement
    useEffect(() => {
        if (hoveredNode) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % NODES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [hoveredNode]);

    const activeNode = NODES[activeIndex];
    const displayNode = hoveredNode ? NODES.find(n => n.id === hoveredNode)! : activeNode;

    return (
        <section className="py-24 md:py-40 bg-black text-white relative overflow-hidden">
            {/* Professional Blueprint Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
                    }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Technical Header */}
                <div className="text-center mb-16 md:mb-24 w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center justify-center gap-4 mb-6"
                    >
                        <div className="h-px w-8 bg-[#FFC947]/30" />
                        <span className="text-[#FFC947] text-[10px] font-black uppercase tracking-[0.5em]">SYSTEM ARCHITECTURE</span>
                        <div className="h-px w-8 bg-[#FFC947]/30" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none"
                    >
                        Growth <span className="text-[#FFC947]">Pipeline</span>
                    </motion.h2>
                    <p className="text-white/40 font-medium text-lg md:text-xl max-w-2xl mx-auto">
                        Structured logic to process market data into revenue volume.
                    </p>
                </div>

                {/* The Architecture Canvas */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[400px] mb-24">
                    {/* SVG Connections Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <filter id="circuit-glow">
                                <feGaussianBlur stdDeviation="0.5" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        {CONNECTIONS.map((conn, idx) => {
                            const from = NODES.find(n => n.id === conn.from)!;
                            const to = NODES.find(n => n.id === conn.to)!;
                            const path = getManhattanPath(from.position, to.position);
                            const isActive = hoveredNode === conn.from || hoveredNode === conn.to || (activeNode.id === conn.from || activeNode.id === conn.to);

                            return (
                                <React.Fragment key={idx}>
                                    {/* Static Trace */}
                                    <motion.path
                                        d={path}
                                        fill="none"
                                        stroke={isActive ? 'rgba(255, 201, 71, 0.4)' : 'rgba(255,255,255,0.05)'}
                                        strokeWidth="0.2"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1, delay: idx * 0.1 }}
                                    />
                                    {/* Data Pulse */}
                                    <motion.path
                                        d={path}
                                        fill="none"
                                        stroke="#FFC947"
                                        strokeWidth="0.5"
                                        strokeLinecap="round"
                                        filter="url(#circuit-glow)"
                                        initial={{ pathLength: 0.05, pathOffset: 0 }}
                                        animate={{ pathOffset: [0, 1] }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: idx * 0.5
                                        }}
                                        style={{ opacity: isActive ? 1 : 0.2 }}
                                    />
                                </React.Fragment>
                            );
                        })}
                    </svg>

                    {/* Nodes Grid */}
                    {NODES.map((node, idx) => {
                        const isActive = (hoveredNode === node.id) || (!hoveredNode && activeNode.id === node.id);
                        const Icon = node.icon;
                        const isCenter = node.id === 'lead-gen';

                        return (
                            <div
                                key={node.id}
                                className="absolute"
                                style={{
                                    left: `${node.position.x}%`,
                                    top: `${node.position.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 20
                                }}
                            >
                                <motion.div
                                    onHoverStart={() => setHoveredNode(node.id)}
                                    onHoverEnd={() => setHoveredNode(null)}
                                    onClick={() => setActiveIndex(idx)}
                                    animate={{
                                        scale: isActive ? 1.05 : 1,
                                    }}
                                    className="relative cursor-pointer group"
                                >
                                    {/* Target Rings */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="absolute inset-[-20px] pointer-events-none"
                                            >
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                    className="absolute inset-0 border border-dashed border-[#FFC947]/20 rounded-full"
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* The Module Box */}
                                    <div className={`
                                        relative overflow-hidden transition-all duration-500
                                        ${isCenter ? 'w-24 h-24 md:w-36 md:h-36' : 'w-20 h-20 md:w-28 md:h-28'}
                                        ${isActive ? 'bg-[#FFC947]' : 'bg-[#111111]'}
                                        border ${isActive ? 'border-[#FFC947]' : 'border-white/10'}
                                        rounded-xl flex flex-col items-center justify-center p-2
                                    `}>
                                        <div className="absolute top-2 right-2 flex gap-0.5">
                                            <motion.div
                                                animate={{ opacity: [1, 0.3, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                                className={`w-1 h-1 rounded-full ${isActive ? 'bg-black' : 'bg-[#FFC947]'}`}
                                            />
                                        </div>

                                        <Icon className={`w-1/3 h-1/3 mb-2 transition-colors ${isActive ? 'text-black' : 'text-white/20'}`} />

                                        <span className={`text-[10px] md:text-xs font-black uppercase tracking-tighter leading-none text-center ${isActive ? 'text-black' : 'text-white/60'}`}>
                                            {node.title}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                {/* RELOCATED SYSTEM MONITOR PANEL (ZERO OVERLAP SOLUTION) */}
                <div className="w-full max-w-5xl mt-12 md:mt-0 px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={displayNode.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="bg-[#111111] border border-[#FFC947]/20 p-8 md:p-12 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-l-8 border-l-[#FFC947] relative overflow-hidden group/monitor"
                        >
                            {/* Technical Scanlines */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

                            <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
                                {/* Left: Status & Title */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-[#FFC947] rounded-full animate-ping absolute inset-0" />
                                            <div className="w-3 h-3 bg-[#FFC947] rounded-full relative shadow-[0_0_15px_#FFC947]" />
                                        </div>
                                        <div className="text-xs font-black text-[#FFC947] uppercase tracking-[0.4em]">
                                            INFRASTRUCTURE MONITOR // {displayNode.id.toUpperCase()}
                                        </div>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white leading-none">
                                        {displayNode.title}
                                    </h3>
                                    <p className="text-sm font-black text-[#FFC947]/60 uppercase tracking-widest max-w-md">
                                        {displayNode.details.subtitle} - Integrated Revenue Ops
                                    </p>
                                </div>

                                {/* Right: Capabilities List */}
                                <div className="flex-1 w-full">
                                    <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-6 pb-2 border-b border-white/5">
                                        Core Capabilities
                                    </div>
                                    <div className="grid grid-cols-1 gap-6">
                                        {displayNode.details.points.map((p, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * i }}
                                                className="flex items-center gap-6 group/item"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover/item:border-[#FFC947]/50 transition-colors">
                                                    <ArrowRight className="w-4 h-4 text-[#FFC947]" />
                                                </div>
                                                <span className="text-sm md:text-base font-bold text-white/80 group-hover/item:text-white transition-colors">{p}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Legend Panel - Bottom */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full pt-16 border-t border-white/5">
                    {NODES.map((node, idx) => {
                        const isActive = activeIndex === idx || hoveredNode === node.id;
                        return (
                            <div
                                key={node.id}
                                className={`transition-all duration-500 cursor-pointer ${isActive ? 'opacity-100' : 'opacity-20'}`}
                                onClick={() => setActiveIndex(idx)}
                            >
                                <div className={`h-1 w-8 mb-4 ${isActive ? 'bg-[#FFC947]' : 'bg-white/10'}`} />
                                <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest mb-2 whitespace-nowrap">{node.description}</h4>
                                <div className="text-[8px] md:text-[10px] font-medium text-white/40 leading-tight uppercase">
                                    {node.details.subtitle}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
