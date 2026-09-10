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
                </div>
                <a href="https://github.com/Amitabh-DevOps" target="_blank" rel="noopener noreferrer" className="hidden md:flex px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all items-center gap-2 text-sm font-bold text-slate-300">
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
                    image="/Project01.png"
                    title="DevSecOps Ready Google Gemini Clone"
                    desc="DevSecOps project implementing all DevSecOps concepts for Production Deployment."
                    tags={["DevSecOps", "CI/CD", "Docker", "K8s"]}
                    link="https://github.com/Amitabh-DevOps/dev-gemini-clone/tree/DevOps"
                />
                <ProjectCard
                    image="/Project02.png"
                    title="Multi-Environment IAC Project"
                    desc="A comprehensive DevOps project implementing multi-environment deployment strategies with Terrafrom and Ansible."
                    tags={["DevOps", "CI/CD", "Multi-Env", "Terraform"]}
                    link="https://github.com/Amitabh-DevOps/multi-env-lac-project"
                />
                <ProjectCard
                    image="/Project03.png"
                    title="DevSecOps - Spring Boot Banking App"
                    desc="DevSecOps project implementing all DevSecOps principles, for Spring Boot Banking Application."
                    tags={["DevSecOps", "CI/CD", "Docker", "K8s"]}
                    link="https://github.com/Amitabh-DevOps/DevOps-mega-project/tree/project"
                />
                <ProjectCard
                    image="/Project04.png"
                    title="GitHub Actions - Infra to Deployment"
                    desc="GitHub Actions CI/CD from Infrastructure creation using Terraform to Deployment in Production."
                    tags={["Terraform", "GitHub-Actions", "CI/CD"]}
                    link="https://github.com/Amitabh-DevOps/online_shop/tree/github-action"
                />
                <ProjectCard
                    image="/Project05.png"
                    title="SecureShip Dashboard on AWS ECS"
                    desc="Containerized a React and Vite dashboard with a multi-stage Docker build, pushed it to Amazon ECR, and deployed it on ECS behind a load balancer with health checks and automatic scaling."
                    tags={["React", "Docker", "Amazon ECR", "Amazon ECS"]}
                    link="https://github.com/Amitabh-DevOps/deploy-to-ecs"
                />
                <ProjectCard
                    image="/Project06.jpg"
                    title="GitOps on AWS EKS with Monitoring"
                    desc="Provisioned an AWS EKS cluster with Terraform, deployed a Node.js application through Argo CD, and monitored the platform with Helm-managed Prometheus and Grafana."
                    tags={["AWS EKS", "Terraform", "Argo CD", "Prometheus & Grafana"]}
                    link="https://github.com/Amitabh-DevOps/GitOps-with-monitoring"
                />
            </motion.div>

            <div className="flex md:hidden justify-end mt-8">
                <a href="https://github.com/Amitabh-DevOps" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 text-sm font-bold text-slate-300">
                    Explore All <Github className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
}
