"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { fadeInUp } from "@/lib/animations";

export default function SkillItem({ name, icon, color }: { name: string, icon: string, color?: string }) {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => setIsActive((active) => !active);

    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.97 }}
            onClick={toggleActive}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleActive();
                }
            }}
            role="button"
            aria-pressed={isActive}
            aria-label={`${name} skill${isActive ? " active" : ""}`}
            tabIndex={0}
            className={`relative p-4 border rounded-lg flex flex-col items-center gap-3 transition-all group overflow-hidden ${isActive ? "bg-white/[0.06] border-primary/40" : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-primary/40 focus-visible:bg-white/[0.06] focus-visible:border-primary/40"}`}
        >
            {/* Brand Glow Backdrop */}
            <div
                className={`absolute inset-0 blur-2xl transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"}`}
                style={{ backgroundColor: color ? `${color}15` : 'rgba(56, 189, 248, 0.05)' }}
            />

            <div className={`relative w-9 h-9 flex items-center justify-center transition-all duration-700 z-10 ${isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0"}`}>
                <Image
                    src={icon}
                    alt={name}
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>
            <span className={`relative text-xs font-semibold transition-colors duration-700 z-10 ${isActive ? "text-white" : "text-slate-400 group-hover:text-white group-focus-visible:text-white"}`}>{name}</span>
        </motion.div>
    );
}
