"use client";

import React from "react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/lib/animations";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-32">
            <span className="section-subtitle">Journey</span>
            <h2 className="section-title mt-4">Professional Deployment.</h2>

            <div className="mt-20 max-w-4xl mx-auto">
                <motion.div
                    {...fadeInUp}
                    className="glass-morphism p-6 md:p-12 rounded-[40px] border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all duration-1500 ease-in-out"
                >
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/0 group-hover:bg-primary/5 blur-[120px] transition-all duration-1500 -z-10" />

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <div>
                            <h3 className="text-3xl font-black text-white italic tracking-tight group-hover:text-primary transition-colors duration-1500">DevOps Engineer</h3>
                            <p className="text-primary font-bold tracking-widest text-sm mt-1">TRAINWITHSHUBHAM</p>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                            <span className="px-5 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                Dec 2024 — Mar 2026
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <span className="hud-metric text-[10px] text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 uppercase tracking-widest">40% Efficiency Gain</span>
                                <span className="hud-metric text-[10px] text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 uppercase tracking-widest">60% Faster Ops</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Automated CI/CD pipelines for 5+ projects, reducing deployment time by 40%",
                            "Engineered IaC solutions using Terraform and Ansible for 60% faster provisioning",
                            "Implemented containerization with K8s, improving scalability by 35%",
                            "Developed observability dashboards with Prometheus and Grafana",
                            "Mentored 20+ learners on DevOps best practices and high-performance culture",
                            "Organized Online DevOps Hackathons"
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start text-slate-400 group-hover:text-slate-200 transition-colors duration-1500">
                                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-1500 flex-shrink-0 shadow-[0_0_10px_rgba(56,189,248,0)] group-hover:shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                                <p className="text-base md:text-lg leading-tight font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
