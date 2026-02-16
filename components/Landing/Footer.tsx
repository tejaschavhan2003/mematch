"use client";

import React from "react";
import { Mail, Instagram, Github, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppFooter() {
  return (
    <footer className="bg-background text-foreground py-20 px-6 border-t-4 border-foreground/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* --- Left Column: Branding & Socials --- */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl border-2 border-foreground rotate-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Flame className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">
              ME<span className="underline decoration-primary">MATCH</span>
            </h2>
          </div>

          <h2 className="text-5xl md:text-6xl font-black uppercase italic leading-none tracking-tighter">
            Stay <br />
            <span className="text-primary underline decoration-foreground underline-offset-4">
              Disciplined.
            </span>
          </h2>

          <p className="text-muted-foreground font-bold text-lg max-w-sm leading-relaxed">
            MeMatch is for those tired of starting over. Build consistency,
            track your progress, and share the proof.
          </p>

          <div className="flex gap-4">
            {[
              { icon: Mail, href: "mailto:ctejas44@gmail.com" },
              {
                icon: Instagram,
                href: "https://instagram.com/orange_santra_hu",
              },
              { icon: Github, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                className="p-4 bg-card border-2 border-foreground rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <social.icon className="w-6 h-6 stroke-[2.5px]" />
              </a>
            ))}
          </div>
        </div>

        {/* --- Right Column: Neobrutalist Contact Card --- */}
        <div className="bg-primary p-8 md:p-12 rounded-[2.5rem] border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_var(--foreground)] text-primary-foreground relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4 uppercase italic leading-none">
              Let&apos;s talk
            </h3>
            <p className="font-black text-lg mb-8 opacity-90 leading-tight">
              Have suggestions or want to collab on MeMatch? I&apos;m always
              open to ideas.
            </p>
            <a href="mailto:ctejas44@gmail.com" className="block">
              <Button className="w-full h-16 bg-foreground text-background font-black uppercase italic text-xl rounded-2xl border-b-4 border-black/30 hover:bg-foreground/90 transition-all active:border-b-0 active:translate-y-1">
                Email Me Directly
              </Button>
            </a>
          </div>
          {/* Decorative background flame */}
          <Flame className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t-2 border-foreground/10 text-center">
        <p className="text-muted-foreground font-bold uppercase text-[10px] tracking-[0.2em]">
          © 2026 MeMatch — Built by{" "}
          <span className="text-foreground">Tejas Chavhan</span>
        </p>
      </div>
    </footer>
  );
}
