"use client";

import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import SocialIcon from "@/components/ui/SocialIcon";
import { Linkedin, Github, Twitter, Youtube, BookText, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-32">
            <div className="relative glass-morphism p-5 md:p-20 rounded-[40px] md:rounded-[60px] border-white/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
                    <div className="space-y-6 md:space-y-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-none uppercase">Let's <br /> <span className="text-slate-600">Connect.</span></h2>
                        <p className="text-base md:text-xl text-slate-400 font-medium max-w-sm">Ready to build high-performance infrastructure? I'm always open to new challenges.</p>

                        <div className="flex gap-4 flex-wrap">
                            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/amitabh-devops" label="LinkedIn Profile" />
                            <SocialIcon icon={<Github />} href="https://github.com/Amitabh-DevOps" label="GitHub Profile" />
                            <SocialIcon icon={<Twitter />} href="https://x.com/Amitabh_DevOps" label="X (Twitter) Profile" />
                            <SocialIcon icon={<Youtube />} href="https://www.youtube.com/@SoniAmitabh" label="YouTube Channel" />
                            <SocialIcon icon={<BookText />} href="https://blog.amitabh.cloud/" label="Hashnode Blog" />
                            <SocialIcon icon={<Mail />} href="mailto:amitabhdevops2024@gmail.com" label="Send Email" />
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
