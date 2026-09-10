"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { fadeInUp } from "@/lib/animations";

interface ProjectCardProps {
    number: string;
    image: string;
    title: string;
    desc: string;
    tags: string[];
    link: string;
}

export default function ProjectCard({ number, image, title, desc, tags, link }: ProjectCardProps) {
    return (
        <motion.div
            variants={fadeInUp}
            className="group glass-morphism p-3 md:p-4 rounded-2xl border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden relative"
        >
            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-5 bg-slate-950/70">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700 grayscale-[0.35] group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-slate-950/75 border border-white/15 text-[10px] font-mono text-primary z-20">{number}</span>
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} repository`} className="absolute top-3 right-3 p-3 bg-slate-950/75 border border-white/15 rounded-lg opacity-0 translate-y-1 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto focus-visible:opacity-100 focus-visible:translate-y-0 focus-visible:pointer-events-auto hover:bg-primary hover:text-slate-950 hover:border-primary text-white z-20">
                    <ArrowUpRight className="w-5 h-5" />
                </a>
            </div>
            <div className="space-y-4 px-2 pb-2">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-base md:text-xl font-semibold text-white tracking-tight leading-tight group-hover:text-primary transition-colors">{title}</h3>
                </div>
                <p className="text-sm text-slate-400 font-medium line-clamp-3 leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-widest group-hover:border-primary/20 transition-all">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
