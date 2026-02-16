"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Calendar,
  Trophy,
  Share2,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingIcons = [
  { icon: Target, delay: 0, x: "10%", y: "20%" },
  { icon: Calendar, delay: 0.2, x: "85%", y: "15%" },
  { icon: Trophy, delay: 0.4, x: "75%", y: "80%" },
  { icon: Share2, delay: 0.6, x: "15%", y: "75%" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-30 md:pt-60 pb-10 md:pb-30 px-4 bg-background">
      {/* --- STEP 1: INFINITE ANIMATED BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 1. Animated Dot Grid (Slow Drift) */}
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [-20, 0, -20],
            y: [-20, 0, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[-10%] opacity-[0.15] dark:opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* 2. Pulsing Primary Glow (The "Aura") */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/30 blur-[120px] rounded-full"
        />

        {/* 3. Floating Secondary Orb */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full"
        />
      </div>

      {/* --- STEP 2: FLOATING UI ELEMENTS --- */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute flex items-center justify-center w-16 h-16 rounded-2xl bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)]"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0], // Infinite bobbing
            }}
            transition={{
              delay: item.delay,
              y: { repeat: Infinity, duration: 4 + index, ease: "easeInOut" },
            }}
          >
            <item.icon className="w-8 h-8 text-primary" />
          </motion.div>
        ))}
      </div>

      {/* --- STEP 3: MAIN CONTENT --- */}
      <div className="relative z-20 w-full max-w-5xl flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary border-2 border-foreground shadow-[4px_4px_0px_0px_#000] mb-10"
        >
          <Flame className="w-4 h-4 text-primary-foreground animate-pulse" />
          <span className="text-xs font-black uppercase italic text-primary-foreground tracking-widest">
            Transform Your Consistency
          </span>
        </motion.div>

        {/* The Mega Heading */}
        <motion.h1
          className="text-6xl sm:text-8xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Set goals. <br />
          <span className="text-primary drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            Stay Consistent.
          </span>{" "}
          <br />
          Share wins.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-2xl font-bold text-muted-foreground max-w-2xl mx-auto mb-12 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Break your transformation into daily discipline.{" "}
          <br className="hidden md:block" />
          Log in, check the box, and share the proof.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-4">
          <Button
            size="lg"
            className="h-20 px-12 text-2xl font-black uppercase italic bg-foreground text-background border-4 border-foreground shadow-[8px_8px_0px_0px_var(--primary)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
          >
            Start Journey
            <ArrowRight className="ml-3 w-8 h-8" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-20 px-12 text-2xl font-black uppercase italic border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-background active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
          >
            Explore Posts
          </Button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
