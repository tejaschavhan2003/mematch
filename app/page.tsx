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
  Trophy,
  ArrowRight,
} from "lucide-react";
import { HeroSection } from "@/components/Landing/HeroSection";
import { HowItWorksSection } from "@/components/Landing/HowItWorks";
import { RulesSection } from "@/components/Landing/RulesSection";
import { ModeToggle } from "@/components/Layout/ModeToggle";
import { AppFooter } from "@/components/Landing/Footer";
import Link from "next/link";

const MeMatchLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-yellow-200">
      {/* --- Navigation --- */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 md:p-10 max-w-7xl mx-auto z-50 left-1/2 -translate-x-1/2">
        {/* --- Brutalist Logo --- */}
        <div className="text-xl md:text-2xl font-black tracking-tighter italic flex items-center group cursor-pointer select-none">
          <span className="transition-transform duration-200 group-hover:-rotate-6 text-black dark:text-white">
            ME
          </span>
          <span
            className="
          bg-yellow-400 text-black 
          px-3 py-1 ml-1 
          border-4 border-black 
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
          dark:shadow-[4px_4px_0px_0px_#FFD100] 
          group-hover:rotate-3 transition-transform duration-200
        "
          >
            MATCH
          </span>
        </div>

        {/* --- Nav Actions --- */}
        <div className="flex gap-1 md:gap-8 items-center">
          {/* Styled Mode Toggle Wrapper */}
          <div
            className="
          p-1 border-4 border-black dark:border-white 
          rounded-full hover:bg-yellow-400 dark:hover:bg-yellow-400 
          hover:text-black transition-colors duration-200
          text-black dark:text-white
        "
          >
            <ModeToggle />
          </div>

          {/* Brutalist Login Button - Swapped Link for <a> for preview compatibility */}
          <Link
            href={"sign-in"}
            className="
            relative
            font-black uppercase italic text-xs md:text-xl
            px-8 py-3
            bg-white dark:bg-white
            text-black
            border-4 border-black
            shadow-[6px_6px_0px_0px_#000]
            dark:shadow-[6px_6px_0px_0px_#FFD100]
            hover:shadow-none 
            hover:translate-x-1.5 
            hover:translate-y-1.5
            active:bg-yellow-400
            transition-all duration-100
            flex items-center justify-center
            cursor-pointer
          "
          >
            Login
          </Link>
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
