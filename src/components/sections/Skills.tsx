"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillItem from "@/components/ui/SkillItem";

import { staggerContainer } from "@/lib/animations";

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-32">
            <span className="section-subtitle">Technical Skills</span>
            <h2 className="section-title mt-4">Cloud &amp; DevOps Skills.</h2>

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
    );
}
