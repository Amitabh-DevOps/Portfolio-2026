"use client";

import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import SocialIcon from "@/components/ui/SocialIcon";
import { Linkedin, Github, Twitter, Youtube, BookText, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-32">
            <div className="relative bg-slate-950/45 p-5 md:p-14 rounded-2xl border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
                    <div className="space-y-6 md:space-y-10">
                        <span className="section-subtitle">Contact</span>
                        <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-none">Let&apos;s build <br /> <span className="text-primary">something reliable.</span></h2>
                        <p className="text-base md:text-xl text-slate-300 font-medium max-w-md">I&apos;m open to conversations about cloud infrastructure, platform engineering, and DevOps opportunities.</p>

                        <a href="mailto:amitabhdevops2004@gmail.com" className="inline-flex text-sm font-semibold text-primary hover:text-white transition-colors border-b border-primary/40 hover:border-white pb-1">
                            amitabhdevops2004@gmail.com
                        </a>

                        <div className="flex gap-4 flex-wrap">
                            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/amitabh-devops" label="LinkedIn Profile" />
                            <SocialIcon icon={<Github />} href="https://github.com/Amitabh-DevOps" label="GitHub Profile" />
                            <SocialIcon icon={<Twitter />} href="https://x.com/Amitabh_DevOps" label="X (Twitter) Profile" />
                            <SocialIcon icon={<Youtube />} href="https://www.youtube.com/@SoniAmitabh" label="YouTube Channel" />
                            <SocialIcon icon={<BookText />} href="https://blog.amitabh.cloud/" label="Hashnode Blog" />
                            <SocialIcon icon={<Mail />} href="mailto:amitabhdevops2004@gmail.com" label="Send Email" />
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
