"use client";

import { motion } from "framer-motion";
import {
  Target,
  CalendarCheck,
  CheckCircle2,
  Share2,
  Flame,
} from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Set Weekly Goal",
    description:
      "Choose your challenge. 500 pushups? 10 books? 30 hours of coding? You decide.",
  },
  {
    icon: CalendarCheck,
    title: "Get Daily Tasks",
    description:
      "We break it down into manageable daily chunks. Small steps, big results.",
  },
  {
    icon: CheckCircle2,
    title: "Show Up Daily",
    description:
      "Log in once a day to mark progress. Stick to the streak to unlock your post.",
  },
  {
    icon: Share2,
    title: "Share Your Win",
    description:
      "Complete your week? Share your story—struggles, learnings, and transformation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6 relative bg-background overflow-hidden">
      {/* --- Section Header --- */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary mb-4"
        >
          <Flame className="w-3 h-3 text-primary" />
          <span className="text-primary font-black uppercase italic text-[10px] tracking-widest">
            The Process
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Simple. Effective. <br />
          <span className="text-primary underline decoration-foreground underline-offset-4">
            Transformative.
          </span>
        </motion.h2>
      </div>

      {/* --- Steps Grid --- */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="flex flex-col h-full bg-card border-4 border-foreground rounded-[2rem] p-8 relative group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_var(--primary)] transition-all"
          >
            {/* Step Number Badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center text-xl font-black italic border-4 border-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              0{index + 1}
            </div>

            {/* Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-primary border-2 border-foreground flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <step.icon className="w-7 h-7 text-primary-foreground" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-black uppercase italic mb-3 tracking-tight">
              {step.title}
            </h3>
            <p className="text-muted-foreground font-bold text-sm leading-relaxed flex-grow">
              {step.description}
            </p>

            {/* Decorative arrow for desktop (except last item) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-10 translate-y-[-50%] z-[-1]">
                <span className="text-4xl font-black text-muted-foreground/20">
                  →
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* --- Background Elements --- */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/5 z-0 hidden lg:block" />
    </section>
  );
}
