"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { fadeInUp } from "@/lib/animations";

interface ProjectCardProps {
    image: string;
    title: string;
    desc: string;
    tags: string[];
    link: string;
}

export default function ProjectCard({ image, title, desc, tags, link }: ProjectCardProps) {
    return (
        <motion.div
            variants={fadeInUp}
            className={`group glass-morphism p-4 md:p-5 rounded-[40px] border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden relative`}
        >
            <div className="relative aspect-video w-full rounded-[32px] overflow-hidden mb-6 bg-slate-950/50">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain group-hover:scale-105 transition-all duration-1500 grayscale group-hover:grayscale-0 filter drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 p-4 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white text-white hover:text-black z-20">
                    <ArrowUpRight className="w-5 h-5" />
                </a>
            </div>
            <div className="space-y-4 px-2 pb-2">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-base md:text-xl font-black text-white italic tracking-tight leading-tight group-hover:text-primary transition-colors">{title}</h3>
                </div>
                <p className="text-sm text-slate-400 font-medium line-clamp-3 leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
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
