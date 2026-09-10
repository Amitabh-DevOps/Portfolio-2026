"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillItem from "@/components/ui/SkillItem";

import { staggerContainer } from "@/lib/animations";

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-32">
            <span className="section-subtitle">Capabilities</span>
            <h2 className="section-title mt-4">Infrastructure, delivery, and operations.</h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed">
                A practical toolkit for building secure cloud and on-premises environments, automating delivery, and keeping systems observable and reliable.
            </p>

                <div className="mt-14 grid gap-5 lg:grid-cols-2">
                    <div className="border border-white/10 rounded-2xl p-5 md:p-7 bg-white/[0.02]">
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <div>
                                <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-2">01 / Foundation</p>
                                <h3 className="text-lg font-semibold text-white">Cloud &amp; infrastructure</h3>
                            </div>
                            <span className="text-xs font-mono text-slate-600">BUILD</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6">Designing and managing reliable environments across cloud and on-premises systems.</p>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-3"
                    >
                        <SkillItem name="Linux" icon="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" color="#fcc624" />
                        <SkillItem name="AWS" icon="/aws-logo.svg" color="#ff9900" />
                        <SkillItem name="Docker" icon="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" color="#2496ed" />
                        <SkillItem name="Kubernetes" icon="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" color="#326ce5" />
                        <SkillItem name="Terraform" icon="https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" color="#7b42bc" />
                        <SkillItem name="Ansible" icon="https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg" color="#ee0000" />
                    </motion.div>
                </div>

                <div className="border border-white/10 rounded-2xl p-5 md:p-7 bg-white/[0.02]">
                    <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                            <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-2">02 / Operations</p>
                            <h3 className="text-lg font-semibold text-white">Delivery &amp; observability</h3>
                        </div>
                        <span className="text-xs font-mono text-slate-600">RUN</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">Automating releases, managing GitOps workflows, and making system health visible.</p>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-3"
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
