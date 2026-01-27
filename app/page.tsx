"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Share2,
  Target,
  Calendar,
  Mail,
  Github,
  Instagram,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { HeroSection } from "@/components/Home/HeroSection";
import { HowItWorksSection } from "@/components/Home/HowItWorks";
import { RulesSection } from "@/components/Home/RulesSection";
import { ModeToggle } from "@/components/Layout/ModeToggle";
import { AppFooter } from "@/components/Home/Footer";

const MeMatchLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-yellow-200">
      {/* --- Navigation --- */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter italic">
          ME<span className="bg-yellow-400 px-1">MATCH</span>
        </div>

        <div className="flex gap-5">
          <ModeToggle />
          <Button
            variant="ghost"
            className="font-bold border-2 border-black dark:border-primary hover:bg-yellow-400 dark:hover:bg-white"
          >
            Login
          </Button>
        </div>
      </nav>
      <HeroSection />
      <HowItWorksSection />
      <RulesSection />
      <AppFooter />
    </div>
  );
};

export default MeMatchLanding;
