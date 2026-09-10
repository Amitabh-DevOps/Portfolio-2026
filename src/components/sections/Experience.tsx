"use client";

import React from "react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/lib/animations";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-32">
            <span className="section-subtitle">Experience</span>
            <h2 className="section-title mt-4">Where I have contributed.</h2>

            <div className="mt-16 max-w-5xl mx-auto">
                <motion.div
                    {...fadeInUp}
                    className="relative border-l border-primary/40 pl-6 md:pl-10 ml-2 md:ml-4"
                >
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(125,211,252,0.8)]" />

                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 pb-8 border-b border-white/10">
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary border border-primary/30 px-2.5 py-1 rounded-md">Internship</span>
                                <span className="text-xs font-medium text-slate-500">Jul 2025 - Jan 2026</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">DevOps Engineering Intern</h3>
                            <p className="text-slate-400 font-semibold tracking-wide text-sm mt-2">TrainWithShubham</p>
                        </div>
                        <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                            <span className="hud-metric text-[10px] text-primary bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 uppercase tracking-widest">40% faster delivery</span>
                            <span className="hud-metric text-[10px] text-primary bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 uppercase tracking-widest">60% faster provisioning</span>
                        </div>
                    </div>

                    <div className="pt-8">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-5">Selected contributions</p>
                        <div className="grid gap-4 md:grid-cols-2">
                        {[
                            "Automated CI/CD pipelines for 5+ projects, reducing deployment time by 40%",
                            "Engineered IaC solutions using Terraform and Ansible for 60% faster provisioning",
                            "Implemented containerization with K8s, improving scalability by 35%",
                            "Developed observability dashboards with Prometheus and Grafana",
                            "Mentored 20+ learners on DevOps best practices and high-performance culture",
                            "Organized Online DevOps Hackathons"
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3 items-start text-slate-300 bg-white/[0.03] border border-white/10 rounded-lg p-4">
                                <span className="text-primary font-mono text-xs mt-1">0{i + 1}</span>
                                <p className="text-sm md:text-base leading-relaxed font-medium">{item}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
