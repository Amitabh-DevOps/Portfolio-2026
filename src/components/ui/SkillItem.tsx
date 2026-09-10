"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { fadeInUp } from "@/lib/animations";

export default function SkillItem({ name, icon, color }: { name: string, icon: string, color?: string }) {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="relative p-4 bg-white/[0.03] border border-white/10 rounded-lg flex flex-col items-center gap-3 hover:bg-white/[0.06] hover:border-primary/40 transition-all group overflow-hidden"
        >
            {/* Brand Glow Backdrop */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
                style={{ backgroundColor: color ? `${color}15` : 'rgba(56, 189, 248, 0.05)' }}
            />

            <div className="relative w-9 h-9 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700 z-10">
                <Image
                    src={icon}
                    alt={name}
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>
            <span className="relative text-xs font-semibold text-slate-400 group-hover:text-white transition-colors duration-700 z-10">{name}</span>
        </motion.div>
    );
}
