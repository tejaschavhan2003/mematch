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
  { icon: Target, delay: 0, x: "5%", y: "15%" },
  { icon: Calendar, delay: 0.2, x: "80%", y: "10%" },
  { icon: Trophy, delay: 0.4, x: "70%", y: "85%" },
  { icon: Share2, delay: 0.6, x: "10%", y: "80%" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden py-10 md:py-20 px-4">
      {/* --- Background Glows --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary Glow - Using semantic primary/40 */}
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[250px] md:w-[500px] h-[500px] rounded-full bg-primary/40 blur-[80px] md:blur-[130px]" />

        {/* Secondary Glow */}
        <div className="absolute bottom-[20%] right-[-10%] w-[200px] md:w-[400px] h-[400px] rounded-full bg-primary/10 blur-[60px] md:blur-[100px]" />

        {/* Soft Fading Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      </div>

      {/* --- Floating Elements (Hidden on Mobile) --- */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute flex items-center justify-center w-14 h-14 rounded-2xl bg-card/40 backdrop-blur-md border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)]"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay + 0.5, type: "spring" }}
          >
            <item.icon className="w-7 h-7 text-primary" />
          </motion.div>
        ))}
      </div>

      {/* --- Content --- */}
      <div className="relative z-20 w-full max-w-4xl flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] mb-8"
        >
          <Flame className="w-4 h-4 text-primary-foreground animate-bounce" />
          <span className="text-[10px] md:text-xs font-black uppercase italic text-primary-foreground tracking-wider">
            Transform Your Consistency
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Set goals. <br />
          <span className="text-primary">
            Stay <br className="block sm:hidden" /> Consistent.
          </span>{" "}
          <br />
          Share wins.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base md:text-xl font-bold text-muted-foreground max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto mb-10 leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Breaking your transformation into daily discipline. Log in, check the
          box, and share the proof.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto h-16 px-10 text-xl font-black uppercase italic bg-foreground text-background hover:bg-primary hover:text-primary-foreground border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary)] transition-all active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            Start Journey
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-16 px-10 text-xl font-black uppercase italic border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none bg-background active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            Explore Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
