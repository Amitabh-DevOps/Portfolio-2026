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

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[20000] px-4 md:px-6 py-6 md:py-8 pointer-events-none">
            <div className="container max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">

                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2 md:gap-4">
                    <span className="text-2xl font-black tracking-tighter text-white">
                        Amitabh<span className="text-primary italic">.</span>
                    </span>
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
                                <Link href="https://drive.google.com/file/d/1sKX_HU1bZXQY0QLf1r8hUNrc2XWCEXUb/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="View Resume" className="text-slate-400 hover:text-primary transition-colors">
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
