"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, FileText, Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
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
        <nav className="fixed top-0 left-0 right-0 z-[20000] px-6 py-6 md:py-8 pointer-events-none">
            <div className="container max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">

                {/* Logo */}
                <Link href="/" className="group flex items-center gap-4">
                    <span className="text-2xl font-black tracking-tighter text-white">
                        Amitabh<span className="text-primary italic">.</span>
                    </span>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">System Pulse</span>
                            {lastCommit && (
                                <span className="text-[7px] font-bold text-primary italic uppercase tracking-tighter mt-0.5">{lastCommit}</span>
                            )}
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav Pills */}
                <div className="hidden lg:flex items-center gap-1 glass-morphism p-1 rounded-full border-white/5 bg-black/40">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="px-5 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="w-px h-6 bg-white/10 mx-2" />
                    <div className="flex items-center gap-1 pr-2">
                        <Link href="https://github.com/Amitabh-DevOps" target="_blank" rel="noopener noreferrer" title="GitHub Profile" className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="https://drive.google.com/file/d/1sKX_HU1bZXQY0QLf1r8hUNrc2XWCEXUb/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="View Resume" className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <FileText className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-3 glass-morphism rounded-full border-white/5"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-6 right-6 lg:hidden glass-morphism p-8 rounded-3xl z-[20001] pointer-events-auto"
                    >
                        <div className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-bold text-slate-300 hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="h-px bg-white/10 w-full" />
                            <div className="flex gap-4">
                                <Link href="https://github.com/Amitabh-DevOps" target="_blank" rel="noopener noreferrer" title="GitHub Profile" className="text-slate-400 hover:text-primary transition-colors">
                                    <Github className="w-6 h-6" />
                                </Link>
                                <Link href="https://drive.google.com/file/d/1sKX_HU1bZXQY0QLf1r8hUNrc2XWCEXUb/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="View Resume" className="text-slate-400 hover:text-primary transition-colors">
                                    <FileText className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
