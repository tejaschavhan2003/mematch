"use client";

import React, { useState } from "react";
import MilestoneFeed from "@/components/Landing/MilestoneFeed";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  TrendingUp,
  Flame,
  Clock,
  Brain,
  Dumbbell,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Responsive Layout wrapper
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground pb-20 transition-colors duration-300">
    {children}
  </div>
);

const categories = [
  { name: "All", icon: null },
  { name: "Physical", icon: <Dumbbell className="w-4 h-4" /> },
  { name: "Mental", icon: <Brain className="w-4 h-4" /> },
  { name: "Fitness", icon: null },
  { name: "Learning", icon: null },
];

const filters = [
  { name: "Trending", icon: TrendingUp },
  { name: "Hot", icon: Flame },
  { name: "Recent", icon: Clock },
];

const ExplorePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFilter, setActiveFilter] = useState("Trending");

  return (
    <MainLayout>
      {/* Responsive Container: max-w-md on mobile, up to 2xl on desktop */}
      <div className="py-6 px-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black italic uppercase leading-none mb-2">
            Explore <br />
            <span className="text-yellow-500 underline decoration-foreground decoration-4">
              Wins.
            </span>
          </h1>
          <p className="text-muted-foreground font-bold text-sm md:text-base uppercase tracking-tight">
            See who else is staying consistent.
          </p>
        </motion.div>

        {/* --- Search Box (Neobrutalist & Dark Mode Ready) --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-foreground transition-colors" />
            <Input
              placeholder="Search goals or users..."
              className="pl-12 py-7 text-lg font-bold bg-card border-2 border-foreground rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(250,204,21,0.4)] focus-visible:ring-0 focus-visible:translate-x-0.5 focus-visible:translate-y-0.5 focus-visible:shadow-none transition-all"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-yellow-400 hover:text-black rounded-xl"
            >
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* --- Categories (Scrollable) --- */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 overflow-x-auto pb-4 mb-2 no-scrollbar"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-black uppercase italic transition-all border-2 ${
                activeCategory === category.name
                  ? "bg-yellow-400 border-foreground text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]"
                  : "bg-card border-muted text-muted-foreground hover:border-foreground"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* --- Filter Tabs --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-6 mb-8 mt-2 px-2 overflow-x-auto no-scrollbar"
        >
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors whitespace-nowrap ${
                activeFilter === filter.name
                  ? "text-foreground underline decoration-2 underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <filter.icon className="w-3.5 h-3.5" />
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* --- Feed Section --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-black uppercase text-sm text-muted-foreground tracking-tighter whitespace-nowrap">
              Community Feed
            </h2>
            <div className="h-px flex-1 bg-muted ml-4" />
          </div>

          {/* Responsive Grid for Feed: 1 column on mobile, 2 on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MilestoneFeed />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ExplorePage;
