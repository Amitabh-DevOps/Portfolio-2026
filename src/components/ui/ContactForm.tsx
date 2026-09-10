"use client";

import React from "react";

export default function ContactForm() {
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);
        const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

        if (!endpoint) {
            console.error("Formspree endpoint missing");
            setStatus("error");
            return;
        }

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-center p-10 bg-white/5 rounded-[40px] border border-white/10">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Signal Received.</h3>
                <p className="text-slate-400">Thank you for connecting. I&apos;ll deploy a response shortly.</p>
                <button onClick={() => setStatus("idle")} className="text-sm font-bold text-primary uppercase tracking-widest hover:text-white transition-colors">Send Another</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <FloatingInput name="name" label="Your Name" placeholder="John Doe" required />
                <FloatingInput name="email" label="Email Address" placeholder="john@example.com" type="email" required />
            </div>
            <FloatingInput name="subject" label="Subject" placeholder="Project Discussion" required />
            <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-4">Message</label>
                <textarea name="message" required className="w-full bg-white/5 border border-white/5 rounded-[24px] p-4 md:p-6 h-32 md:h-40 outline-none focus:border-primary/20 transition-all text-slate-200" placeholder="How can I help you?"></textarea>
            </div>
            <button disabled={status === "submitting"} className="w-full py-5 bg-white text-slate-950 font-black uppercase tracking-[0.4em] text-xs rounded-full hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {status === "submitting" ? "Transmitting..." : "Send Signal"}
            </button>
            {status === "error" && (
                <p className="text-red-400 text-xs font-bold text-center uppercase tracking-widest">Transmission Failed. Please try email.</p>
            )}
        </form>
    );
}

function FloatingInput({ label, placeholder, name, type = "text", required }: { label: string, placeholder: string, name?: string, type?: string, required?: boolean }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-4">{label}</label>
            <input
                type={type}
                name={name}
                required={required}
                className="w-full bg-white/5 border border-white/5 rounded-full px-6 py-3 md:px-8 md:py-4 outline-none focus:border-primary/20 transition-all text-slate-200"
                placeholder={placeholder}
            />
        </div>
    );
}
