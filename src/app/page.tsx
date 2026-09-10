"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Static import for LCP candidate
// Hero is already imported statically

// Lazy load sections
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: true });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-slate-200 selection:bg-primary/20">
      <Navbar />
      <Hero />

      <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-40 pb-40">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <footer className="border-t border-white/5 py-20 bg-background/50">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <span className="text-2xl font-black italic tracking-tighter text-white">Amitabh.</span>
          <p className="text-slate-600 font-bold text-sm tracking-widest uppercase italic">Built with passion for DevOps & Automation // ©2026</p>
        </div>
      </footer>
    </main>
  );
}
