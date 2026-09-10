"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { Github } from "lucide-react";

import { staggerContainer } from "@/lib/animations";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                <div className="space-y-4">
                    <span className="section-subtitle">Projects</span>
                    <h2 className="section-title">Featured Projects.</h2>
                    <p className="max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed">
                        Selected work across cloud infrastructure, secure delivery, containers, and platform observability.
                    </p>
                </div>
                <a href="https://github.com/Amitabh-DevOps" target="_blank" rel="noopener noreferrer" className="hidden md:flex px-5 py-3 rounded-lg border border-white/15 hover:bg-white/10 transition-all items-center gap-2 text-sm font-semibold text-slate-300">
                    Explore All <Github className="w-4 h-4" />
                </a>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <ProjectCard
                    number="01"
                    image="/Project01.png"
                    title="DevSecOps Ready Google Gemini Clone"
                    desc="Applied a production-focused DevSecOps workflow to a Gemini-style application, combining containerization, CI/CD, and Kubernetes delivery."
                    tags={["DevSecOps", "CI/CD", "Docker", "K8s"]}
                    link="https://github.com/Amitabh-DevOps/dev-gemini-clone/tree/DevOps"
                />
                <ProjectCard
                    number="02"
                    image="/Project02.png"
                    title="Multi-Environment IAC Project"
                    desc="Built reusable Terraform and Ansible patterns for consistent infrastructure delivery across development, staging, and production environments."
                    tags={["DevOps", "CI/CD", "Multi-Env", "Terraform"]}
                    link="https://github.com/Amitabh-DevOps/multi-env-lac-project"
                />
                <ProjectCard
                    number="03"
                    image="/Project03.png"
                    title="DevSecOps - Spring Boot Banking App"
                    desc="Created a secure delivery pipeline for a Spring Boot application using containerization, automated checks, and Kubernetes deployment practices."
                    tags={["DevSecOps", "CI/CD", "Docker", "K8s"]}
                    link="https://github.com/Amitabh-DevOps/DevOps-mega-project/tree/project"
                />
                <ProjectCard
                    number="04"
                    image="/Project04.png"
                    title="GitHub Actions - Infra to Deployment"
                    desc="Connected Terraform infrastructure provisioning with GitHub Actions application delivery for a repeatable path from source code to production."
                    tags={["Terraform", "GitHub-Actions", "CI/CD"]}
                    link="https://github.com/Amitabh-DevOps/online_shop/tree/github-action"
                />
                <ProjectCard
                    number="05"
                    image="/Project05.png"
                    title="SecureShip Dashboard on AWS ECS"
                    desc="Containerized a React and Vite dashboard with a multi-stage Docker build, pushed it to Amazon ECR, and deployed it on ECS behind a load balancer with health checks and automatic scaling."
                    tags={["React", "Docker", "Amazon ECR", "Amazon ECS"]}
                    link="https://github.com/Amitabh-DevOps/deploy-to-ecs"
                />
                <ProjectCard
                    number="06"
                    image="/Project06.jpg"
                    title="GitOps on AWS EKS with Monitoring"
                    desc="Provisioned an AWS EKS cluster with Terraform, deployed a Node.js application through Argo CD, and monitored the platform with Helm-managed Prometheus and Grafana."
                    tags={["AWS EKS", "Terraform", "Argo CD", "Prometheus & Grafana"]}
                    link="https://github.com/Amitabh-DevOps/GitOps-with-monitoring"
                />
            </motion.div>

            <div className="flex md:hidden justify-end mt-8">
                <a href="https://github.com/Amitabh-DevOps" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg border border-white/15 hover:bg-white/10 transition-all flex items-center gap-2 text-sm font-semibold text-slate-300">
                    Explore All <Github className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
}
