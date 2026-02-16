"use client";

import { motion } from "framer-motion";
import { Check, X, AlertTriangle, Sparkles, Flame } from "lucide-react";

const rules = [
  {
    type: "must",
    icon: Check,
    title: "Log in daily",
    description:
      "Check in once a day to mark your progress. That's all we ask.",
    color: "text-green-500",
    shadowColor: "shadow-green-500/20",
  },
  {
    type: "fail",
    icon: X,
    title: "Miss a day?",
    description: "It counts as failed for that day. But your week isn't over!",
    color: "text-destructive",
    shadowColor: "shadow-destructive/20",
  },
  {
    type: "warning",
    icon: AlertTriangle,
    title: "Finishing early",
    description:
      "Done ahead of schedule? Cool! But no extra rewards—just satisfaction.",
    color: "text-orange-500",
    shadowColor: "shadow-orange-500/20",
  },
  {
    type: "reward",
    icon: Sparkles,
    title: "Complete the week",
    description:
      "Finish all 7 days (even with some fails) and unlock your milestone post!",
    color: "text-primary",
    shadowColor: "shadow-primary/20",
  },
];

export function RulesSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Background Glows (Theme Compatible) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary mb-4">
            <Flame className="w-3 h-3 text-primary" />
            <span className="text-primary font-black uppercase italic text-[10px] tracking-widest">
              The Code of Conduct
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter">
            Simple Accountability. <br />
            <span className="text-primary underline decoration-foreground underline-offset-4">
              Real Results.
            </span>
          </h2>
        </motion.div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="p-6 bg-card border-4 border-foreground rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary)] group transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <rule.icon className="w-6 h-6 stroke-[3px]" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase italic mb-1 tracking-tight">
                    {rule.title}
                  </h3>
                  <p className="text-muted-foreground font-bold text-sm leading-snug">
                    {rule.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground font-black uppercase italic text-sm mb-6 tracking-widest">
            It&apos;s not about being perfect. It&apos;s about showing up.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-16 px-10 bg-primary text-primary-foreground border-4 border-foreground rounded-2xl font-black uppercase italic text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            Start Your First Week
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
