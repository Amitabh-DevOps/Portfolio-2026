"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillItem({ name, icon, color }: { name: string, icon: string, color?: string }) {
    return (
        <motion.div
            variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5 }}
            className="relative p-6 glass-morphism rounded-2xl flex flex-col items-center gap-4 hover:border-primary/30 transition-all group border-white/5 overflow-hidden"
        >
            {/* Brand Glow Backdrop */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{ backgroundColor: color ? `${color}15` : 'rgba(56, 189, 248, 0.05)' }}
            />

            <div className="relative w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 z-10">
                <Image
                    src={icon}
                    alt={name}
                    width={48}
                    height={48}
                    className="object-contain"
                    unoptimized
                />
            </div>
            <span className="relative text-xs font-bold text-slate-500 group-hover:text-white transition-colors z-10">{name}</span>
        </motion.div>
    );
}
