import React from "react";

interface SocialIconProps {
    icon: React.ReactNode;
    href: string;
    label: string;
}

export default function SocialIcon({ icon, href, label }: SocialIconProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="p-5 glass-morphism rounded-full border-white/5 text-slate-500 hover:text-white hover:border-primary/40 transition-all duration-1000"
        >
            {icon}
        </a>
    );
}
