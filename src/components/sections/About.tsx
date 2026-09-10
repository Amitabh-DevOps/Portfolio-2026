"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

export default function About() {
    return (
        <section id="about" className="scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5">
                    <span className="section-subtitle">About me</span>
                    <h2 className="section-title mt-4">Building systems <br /> people can trust.</h2>
                </div>
                <div className="lg:col-span-7 space-y-8 text-base md:text-xl text-slate-400 font-medium leading-relaxed">
                    <motion.p {...fadeInUp}>
                        I&apos;m <span className="text-white">Amitabh Soni</span>, an engineer who turns complex infrastructure into secure, repeatable systems that teams can depend on. My work connects thoughtful automation with practical business outcomes.
                    </motion.p>
                    <motion.p {...fadeInUp}>
                        As an <span className="text-primary italic">AWS Community Builder</span> in the Containers category, I learn in public, share practical guides, and build hands-on projects around cloud-native delivery.
                    </motion.p>

                    <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
                        <div>
                            <h4 className="text-4xl font-black text-white italic tracking-tighter">5K+</h4>
                            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mt-1">LinkedIn Network</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-black text-white italic tracking-tighter">700+</h4>
                            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mt-1">Followers on X.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
