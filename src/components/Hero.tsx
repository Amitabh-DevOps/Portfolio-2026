"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Magnetic from "./Magnetic";

interface GithubEvent {
    type?: string;
    created_at?: string;
}

function isRelevantGithubEvent(event: unknown): event is GithubEvent {
    if (typeof event !== "object" || event === null) {
        return false;
    }

    const candidate = event as GithubEvent;
    return ["PushEvent", "CreateEvent", "PullRequestEvent"].includes(candidate.type ?? "");
}

export default function Hero() {
    const [lastCommit, setLastCommit] = useState<string | null>(null);

    useEffect(() => {
        const fetchGithubActivity = async () => {
            try {
                // Using public events as they are most reliable for CORS.
                // Note: GitHub has an internal delay of 2-5 minutes for events to appear in this feed.
                const timestamp = new Date().getTime();
                const response = await fetch(`https://api.github.com/users/Amitabh-DevOps/events/public?t=${timestamp}`, {
                    cache: 'no-store'
                });

                if (!response.ok) throw new Error("API Error");

                const data: unknown = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    const validEvent = data.find(isRelevantGithubEvent);

                    if (validEvent?.created_at) {
                        const commitDate = new Date(validEvent.created_at);
                        const now = new Date();
                        const diffMs = now.getTime() - commitDate.getTime();
                        const diffMinutes = Math.floor(diffMs / (1000 * 60));
                        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

                        if (diffMinutes < 1) {
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
                }
            } catch (error) {
                console.error("Pulse error:", error);
                setLastCommit("Online");
            }
        };

        fetchGithubActivity();
        const interval = setInterval(fetchGithubActivity, 60000); // Back to 1 minute to avoid rate limits since we removed PAT from headers
        return () => clearInterval(interval);
    }, []);
    return (
        <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
            {/* Dynamic Background Glow */}
            <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="container max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">

                {/* Left Side: Content */}
                <div className="order-2 lg:order-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 border-l-2 border-primary pl-3"
                    >
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.18em]">Cloud &amp; DevOps Engineer</span>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-[-0.06em] text-white leading-[0.88]"
                        >
                            Infrastructure <br />
                            <span className="text-primary">that ships.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-xl text-slate-300 font-medium max-w-xl leading-relaxed"
                        >
                            I build secure, scalable delivery systems with AWS, Kubernetes, and Infrastructure as Code, helping teams move from manual operations to reliable releases.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-3 md:gap-4"
                    >
                        <Magnetic>
                            <a href="#projects" className="px-5 py-3 text-sm md:px-7 md:py-4 md:text-base bg-primary text-slate-950 font-bold rounded-lg hover:bg-white transition-all duration-300 flex items-center gap-2 group whitespace-nowrap">
                                View Work <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#contact" className="px-5 py-3 text-sm md:px-7 md:py-4 md:text-base border border-white/20 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2 group whitespace-nowrap">
                                Get in Touch
                            </a>
                        </Magnetic>
                    </motion.div>

                    {/* Core Tech Stack Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-wrap items-center gap-6 pt-7 border-t border-white/10"
                    >
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Works with</p>
                        <div className="flex items-center gap-5 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
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
                        <div className="absolute inset-8 bg-primary/20 rounded-full blur-[70px] group-hover:blur-[90px] transition-all duration-1000 -z-10" />
                        <div className="relative w-72 h-80 md:w-[26rem] md:h-[34rem] rounded-[2rem] overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
                            <Image
                                src="/profile-pic.jpeg"
                                alt="Amitabh Soni"
                                fill
                                sizes="(max-width: 1024px) 288px, 384px"
                                unoptimized
                                className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-in-out"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                        </div>

                        {/* System Pulse Floating Badge (Relocated) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-8 glass-morphism p-3 md:p-4 rounded-xl shadow-xl border-white/10 flex items-center gap-2 md:gap-3"
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
