"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillItem from "@/components/SkillItem";
import CustomCursor from "@/components/CustomCursor";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronRight,
  ArrowUpRight,
  Twitter,
  Youtube,
  BookText
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  viewport: { once: true }
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-slate-200 selection:bg-primary/20">
      <CustomCursor />
      <Navbar />
      <Hero />

      <div className="container max-w-6xl mx-auto px-6 space-y-40 pb-40">

        {/* About Section */}
        <section id="about" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="section-subtitle">Biography</span>
              <h2 className="section-title mt-4">Architecting <br /> Efficiency.</h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-xl text-slate-400 font-medium leading-relaxed">
              <motion.p {...fadeInUp}>
                As a <span className="text-white">DevOps Engineer</span>, I focus on the intersection of code and infrastructure. My mission is to transform manual friction into seamless, automated delivery pipelines.
              </motion.p>
              <motion.p {...fadeInUp}>
                Currently exploring the depth of <span className="text-primary italic">Cloud Native Ecosystems</span>, I specialize in building high-availability systems that evolve alongside the business.
              </motion.p>

              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/5">
                <div>
                  <h4 className="text-4xl font-black text-white italic tracking-tighter">4.3K+</h4>
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mt-1">LinkedIn Network</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-white italic tracking-tighter">500+</h4>
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mt-1">Followers on X.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-32">
          <span className="section-subtitle text-center block">Journey</span>
          <h2 className="section-title text-center mt-4">Professional Deployment.</h2>

          <div className="mt-20 max-w-4xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="glass-morphism p-10 md:p-12 rounded-[40px] border-white/5 relative overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                  <h3 className="text-3xl font-black text-white italic tracking-tight">DevOps Engineer</h3>
                  <p className="text-primary font-bold tracking-widest text-sm mt-1">TRAINWITHSHUBHAM</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-5 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Dec 2024 — Present
                  </span>
                  <div className="flex gap-2">
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
                  "Mentored 20+ learners on DevOps best practices and high-performance culture"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start text-slate-400 group-hover:text-slate-300 transition-colors">
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                    <p className="text-lg leading-tight font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32">
          <span className="section-subtitle">Subsystems</span>
          <h2 className="section-title mt-4">Technical Arsenal.</h2>

          <div className="mt-16 space-y-20">
            <div>
              <h3 className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] mb-8 border-l-2 border-primary pl-4">Cloud & Infrastructure</h3>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                <SkillItem name="Linux" icon="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" color="#fcc624" />
                <SkillItem name="AWS" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" color="#ff9900" />
                <SkillItem name="Docker" icon="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" color="#2496ed" />
                <SkillItem name="Kubernetes" icon="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" color="#326ce5" />
                <SkillItem name="Terraform" icon="https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" color="#7b42bc" />
                <SkillItem name="Ansible" icon="https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg" color="#ee0000" />
              </motion.div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] mb-8 border-l-2 border-primary pl-4">Automation & Monitoring</h3>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                <SkillItem name="Jenkins" icon="https://www.jenkins.io/images/logos/jenkins/jenkins.svg" color="#d24939" />
                <SkillItem name="Git" icon="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" color="#f05032" />
                <SkillItem name="GitHub Actions" icon="https://avatars.githubusercontent.com/u/44036562?s=200&v=4" color="#2088ff" />
                <SkillItem name="Prometheus" icon="https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg" color="#e64419" />
                <SkillItem name="Grafana" icon="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" color="#f46800" />
                <SkillItem name="ArgoCD" icon="https://avatars.githubusercontent.com/u/30269780?s=200&v=4" color="#ef7b4d" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <span className="section-subtitle">Modules</span>
              <h2 className="section-title">Selected Works.</h2>
            </div>
            <a href="https://github.com/Amitabh-DevOps" target="_blank" className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-bold text-slate-300">
              Explore All <Github className="w-4 h-4" />
            </a>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ProjectCard
              image="/Project01.jpg"
              title="DevSecOps Ready Google Gemini Clone"
              desc="DevSecOps project implementing all DevSecOps concepts for Production Deployment."
              tags={["DevSecOps", "CI/CD", "Docker", "K8s"]}
              link="https://github.com/Amitabh-DevOps/dev-gemini-clone/tree/DevOps"
            />
            <ProjectCard
              image="/Project02.jpg"
              title="Multi-Environment IAC Project"
              desc="A comprehensive DevOps project implementing multi-environment deployment strategies with Terrafrom and Ansible."
              tags={["DevOps", "CI/CD", "Multi-Env", "Terraform"]}
              link="https://github.com/Amitabh-DevOps/multi-env-lac-project"
            />
            <ProjectCard
              image="/Project03.jpg"
              title="DevSecOps - Spring Boot Banking App"
              desc="DevSecOps project implementing all DevSecOps principles, for Spring Boot Banking Application."
              tags={["DevSecOps", "CI/CD", "Docker", "K8s"]}
              link="https://github.com/Amitabh-DevOps/DevOps-mega-project/tree/project"
            />
            <ProjectCard
              image="/Project04.jpg"
              title="GitHub Actions - Infra to Deployment"
              desc="GitHub Actions CI/CD from Infrastructure creation using Terraform to Deployment in Production."
              tags={["Terraform", "GitHub-Actions", "CI/CD"]}
              link="https://github.com/Amitabh-DevOps/online_shop/tree/github-action"
            />
            <ProjectCard
              image="/Project05.jpg"
              title="Django Notes App CI/CD"
              desc="Declarative CI/CD pipeline for a Django notes application with automated testing and deployment."
              tags={["Django", "Jenkins", "Docker"]}
              link="https://github.com/Amitabh-DevOps/Project-04-Django-notes-app-declarative-cidd"
            />
            <ProjectCard
              image="/Project06.png"
              title="Spring Boot Banking App"
              desc="Automated CI/CD pipeline for a Spring Boot banking application using Jenkins, Docker, and GitHub integration."
              tags={["Spring Boot", "Jenkins", "Docker"]}
              link="https://trainwithshubham.blog/automate-cicd-spring-boot-banking-app-jenkins-docker-github/"
            />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <div className="relative glass-morphism p-12 md:p-20 rounded-[60px] border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <h2 className="text-6xl font-black text-white italic tracking-tighter leading-none uppercase">Let's <br /> <span className="text-slate-600">Connect.</span></h2>
                <p className="text-xl text-slate-400 font-medium max-w-sm">Ready to build high-performance infrastructure? I'm always open to new challenges.</p>

                <div className="flex gap-4 flex-wrap">
                  <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/amitabh-devops" />
                  <SocialIcon icon={<Github />} href="https://github.com/Amitabh-DevOps" />
                  <SocialIcon icon={<Twitter />} href="https://x.com/Amitabh_DevOps" />
                  <SocialIcon icon={<Youtube />} href="https://www.youtube.com/@Amitabh004" />
                  <SocialIcon icon={<BookText />} href="https://amitabhdevops.hashnode.dev/" />
                  <SocialIcon icon={<Mail />} href="mailto:amitabhsoni04@gmail.com" />
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput label="Your Name" placeholder="John Doe" />
                  <FloatingInput label="Email Address" placeholder="john@example.com" />
                </div>
                <FloatingInput label="Subject" placeholder="Project Discussion" />
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-4">Message</label>
                  <textarea className="w-full bg-white/5 border border-white/5 rounded-[24px] p-6 h-40 outline-none focus:border-primary/20 transition-all text-slate-200" placeholder="How can I help you?"></textarea>
                </div>
                <button className="w-full py-5 bg-white text-slate-950 font-black uppercase tracking-[0.4em] text-xs rounded-full hover:bg-primary transition-all duration-300">
                  Send Signal
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/5 py-20 bg-background/50">
        <div className="container mx-auto px-6 text-center space-y-6">
          <span className="text-2xl font-black italic tracking-tighter text-white">Amitabh.</span>
          <p className="text-slate-600 font-bold text-sm tracking-widest uppercase italic">Built with passion for DevOps & Automation // ©2026</p>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({ image, title, desc, tags, link }: { image: string, title: string, desc: string, tags: string[], link: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group glass-morphism p-6 rounded-[40px] border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden relative`}
    >
      <div className="relative aspect-video w-full rounded-[32px] overflow-hidden mb-8 bg-slate-950/50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0 filter drop-shadow-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <a href={link} target="_blank" className="absolute top-4 right-4 p-4 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white text-white hover:text-black z-20">
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
      <div className="space-y-4 px-2 pb-2">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-black text-white italic tracking-tight leading-tight group-hover:text-primary transition-colors">{title}</h3>
        </div>
        <p className="text-sm text-slate-400 font-medium line-clamp-3 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-widest group-hover:border-primary/20 transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FloatingInput({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-4">{label}</label>
      <input
        type="text"
        className="w-full bg-white/5 border border-white/5 rounded-full px-8 py-4 outline-none focus:border-primary/20 transition-all text-slate-200"
        placeholder={placeholder}
      />
    </div>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a href={href} target="_blank" className="p-5 glass-morphism rounded-full border-white/5 text-slate-500 hover:text-white hover:border-primary/40 transition-all duration-300">
      {/* @ts-ignore */}
      {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement, { size: 24 }) : icon}
    </a>
  );
}
