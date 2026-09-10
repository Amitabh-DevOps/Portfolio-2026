"use client";

import React, { useState } from "react";
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

const resumeUrl = "https://drive.google.com/file/d/1zf22ljBMrZecPluz7_T7uDzL2kJlp_Eg/view?usp=sharing";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[20000] px-4 md:px-6 py-6 md:py-8 pointer-events-none">
            <div className="container max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">

                {/* Logo */}
                <a href="#home" className="group flex items-center gap-2 md:gap-4">
                        <span className="text-xl font-semibold tracking-tight text-white">
                        Amitabh<span className="text-primary italic">.</span>
                    </span>
                </a>

                {/* Desktop Nav Pills */}
                <div className="hidden lg:flex items-center gap-1 glass-morphism p-1 rounded-lg border-white/10 bg-slate-950/70">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="w-px h-6 bg-white/10 mx-2" />
                    <div className="flex items-center gap-1 pr-2">
                        <Link href="https://github.com/Amitabh-DevOps" target="_blank" rel="noopener noreferrer" title="GitHub Profile" className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href={resumeUrl} target="_blank" rel="noopener noreferrer" title="View Resume" className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <FileText className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    className="lg:hidden p-3 glass-morphism rounded-lg border-white/10"
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
                        className="absolute top-20 left-4 right-4 lg:hidden glass-morphism p-6 rounded-3xl z-[20001] pointer-events-auto"
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-slate-300 hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="h-px bg-white/10 w-full" />
                            <div className="flex gap-4">
                                <Link href="https://github.com/Amitabh-DevOps" target="_blank" rel="noopener noreferrer" title="GitHub Profile" className="text-slate-400 hover:text-primary transition-colors">
                                    <Github className="w-5 h-5" />
                                </Link>
                                <Link href={resumeUrl} target="_blank" rel="noopener noreferrer" title="View Resume" className="text-slate-400 hover:text-primary transition-colors">
                                    <FileText className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
