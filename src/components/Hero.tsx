"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Magnetic from "./Magnetic";

export default function Hero() {
    const [lastCommit, setLastCommit] = useState<string | null>(null);

    useEffect(() => {
        const fetchGithubActivity = async () => {
            try {
                const pat = process.env.NEXT_PUBLIC_GITHUB_PAT;
                const headers: HeadersInit = {};
                if (pat) {
                    headers['Authorization'] = `token ${pat}`;
                }

                const response = await fetch(`https://api.github.com/users/Amitabh-DevOps/events/public?t=${new Date().getTime()}`, {
                    headers,
                    cache: 'no-store'
                });
                const data = await response.json();
                const validEvent = data.find((event: any) => event.type === 'PushEvent' || event.type === 'CreateEvent');

                if (validEvent) {
                    const commitDate = new Date(validEvent.created_at);
                    const now = new Date();
                    const diffMs = now.getTime() - commitDate.getTime();
                    const diffMinutes = Math.floor(diffMs / (1000 * 60));
                    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

                    if (diffMinutes < 5) {
                        setLastCommit("Just Now");
                    } else if (diffMinutes < 60) {
                        setLastCommit(`${diffMinutes}m ago`);
                    } else if (diffHours < 24) {
                        setLastCommit(`${diffHours}h ago`);
                    } else {
                        const diffDays = Math.floor(diffHours / 24);
                        setLastCommit(`${diffDays}d ago`);
                    }
                }
            } catch (error) {
                console.error("Error fetching GitHub activity:", error);
                setLastCommit("Online");
            }
        };

        fetchGithubActivity();
        const interval = setInterval(fetchGithubActivity, 3600000); // Refresh every hour
        return () => clearInterval(interval);
    }, []);
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
            {/* Dynamic Background Glow */}
            <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="container max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Side: Content */}
                <div className="order-2 lg:order-1 space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">Available for Hire</span>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.9]"
                        >
                            Amitabh <br />
                            <span className="text-slate-500 font-extrabold italic">Soni.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-2xl text-slate-400 font-medium max-w-lg leading-relaxed"
                        >
                            DevOps Engineer & Cloud Architect building resilient, automated infrastructure for modern digital ecosystems.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-row flex-nowrap gap-3 md:gap-4"
                    >
                        <Magnetic>
                            <a href="#projects" className="px-5 py-3 text-sm md:px-8 md:py-4 md:text-base bg-white text-slate-950 font-bold rounded-full hover:bg-primary transition-all duration-300 flex items-center gap-2 group whitespace-nowrap">
                                View Work <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#contact" className="px-5 py-3 text-sm md:px-8 md:py-4 md:text-base glass-morphism rounded-full font-bold hover:bg-white/5 transition-all flex items-center gap-2 group border-white/10 whitespace-nowrap">
                                Get in Touch
                            </a>
                        </Magnetic>
                    </motion.div>

                    {/* Core Tech Stack Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex items-center gap-8 pt-8 border-t border-white/5"
                    >
                        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">Preferred Stack</p>
                        <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                            <Image src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" width={24} height={24} alt="Docker" />
                            <Image src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" width={24} height={24} alt="K8s" />
                            <Image src="https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" width={24} height={24} alt="Terraform" />
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" width={40} height={40} alt="AWS" className="object-contain" />
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative group z-[10000]">
                        <div className="absolute inset-0 bg-primary/20 rounded-[40px] blur-[60px] group-hover:blur-[80px] transition-all duration-500 -z-10" />
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[40px] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                            <Image
                                src="/img5.jpeg"
                                alt="Amitabh Soni"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                        </div>

                        {/* System Pulse Floating Badge (Relocated) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-morphism p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-xl border-white/10 flex items-center gap-2 md:gap-3"
                        >
                            <div className="relative flex h-2 w-2 md:h-3 md:w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-primary"></span>
                            </div>
                            <div>
                                <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-0.5 md:mb-1">System Pulse</p>
                                <p className="text-xs md:text-base font-black text-white italic tracking-tight leading-none whitespace-nowrap">
                                    {lastCommit || "..."}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
