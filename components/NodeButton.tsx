import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NodeButtonProps {
    onClick?: () => void;
    label: string;
    sublabel?: string;
    icon?: LucideIcon;
    className?: string;
}

export const NodeButton: React.FC<NodeButtonProps> = ({
    onClick,
    label,
    icon: Icon,
    className = ""
}) => {
    return (
        <motion.div
            className={`relative group cursor-pointer ${className}`}
            onClick={onClick}
            whileHover="hover"
            initial="initial"
        >
            {/* Technical Rings */}
            <motion.div
                variants={{
                    initial: { rotate: 0, scale: 0.9, opacity: 0.2 },
                    hover: { rotate: 360, scale: 1.1, opacity: 0.8 }
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-12px] border border-dashed border-[#FFC947]/30 rounded-full pointer-events-none"
            />
            <motion.div
                variants={{
                    initial: { rotate: 0, scale: 0.95, opacity: 0.1 },
                    hover: { rotate: -360, scale: 1.2, opacity: 0.5 }
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-white/5 rounded-full pointer-events-none"
            />

            {/* The Node Circle */}
            <motion.div
                variants={{
                    initial: {
                        scale: 1,
                        borderColor: 'rgba(255,255,255,0.1)',
                        backgroundColor: 'rgba(10,10,10,0.8)',
                        boxShadow: '0 0 0 rgba(255, 201, 71, 0)'
                    },
                    hover: {
                        scale: 1.05,
                        borderColor: '#FFC947',
                        backgroundColor: 'rgba(255,201,71,0.1)',
                        boxShadow: '0 0 30px rgba(255, 201, 71, 0.2)'
                    }
                }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border flex flex-col items-center justify-center transition-all duration-700 backdrop-blur-md relative z-10"
            >
                {Icon && <Icon className="w-5 h-5 mb-2 text-[#FFC947]/60 group-hover:text-[#FFC947] transition-colors" />}
                <span className="text-[10px] md:text-sm font-black uppercase tracking-tight text-center px-4 leading-tight text-white group-hover:text-white transition-colors">
                    {label}
                </span>
            </motion.div>

            {/* Progress Ring Appearance */}
            <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] transform -rotate-90 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    fill="none"
                    stroke="#FFC947"
                    strokeWidth="1"
                    strokeDasharray="4, 4"
                    variants={{
                        initial: { pathLength: 0 },
                        hover: { pathLength: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </svg>
        </motion.div>
    );
};
