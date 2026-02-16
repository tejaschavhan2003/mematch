"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { MilestoneCard } from "./MilestoneCard";
import { Loader2, Sparkles } from "lucide-react";

// (Keep the sampleMilestones array here or import from a constants file)
const sampleMilestones = [
  {
    id: 1,
    user: {
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      streak: 8,
    },
    goal: "500 Pushups in 7 Days",
    category: "Fitness",
    beforeImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    struggles:
      "Day 3 and 4 were brutal. My arms were so sore I could barely lift my coffee cup.",
    learnings:
      "Breaking it into sets of 20 throughout the day was the game changer.",
    likes: 234,
    comments: 42,
    daysCompleted: 7,
    totalDays: 7,
  },
  {
    id: 2,
    user: {
      name: "Marcus Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
      streak: 12,
    },
    goal: "Meditate 10 Minutes Every Day",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
    struggles:
      "My mind kept wandering. Some days I fell asleep instead of meditating.",
    learnings:
      "Mornings work best for me. Right after waking up, before checking my phone.",
    likes: 189,
    comments: 28,
    daysCompleted: 6,
    totalDays: 7,
  },
  {
    id: 3,
    user: {
      name: "Emily Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      streak: 5,
    },
    goal: "Read 2 Books This Week",
    category: "Learning",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
    struggles:
      "Finding time was tough with work deadlines. Almost gave up on day 5.",
    learnings: "Audiobooks during commute + 30 min before bed = magic formula!",
    likes: 156,
    comments: 35,
    daysCompleted: 7,
    totalDays: 7,
  },
  {
    id: 4,
    user: {
      name: "Alex Kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      streak: 3,
    },
    goal: "Run 35 Miles Total",
    category: "Fitness",
    beforeImage:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=400&fit=crop",
    struggles: "Weather was terrible on day 2 and 6. Had to run in the rain.",
    learnings:
      "There's no bad weather, only bad gear. Invested in rain jacket!",
    likes: 312,
    comments: 67,
    daysCompleted: 7,
    totalDays: 7,
  },
  {
    id: 5,
    user: {
      name: "Jordan Taylor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan",
      streak: 15,
    },
    goal: "Code for 2 Hours Daily",
    category: "Skills",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    struggles:
      "Imposter syndrome hit hard. Kept doubting if I was learning anything.",
    learnings:
      "Building small projects > watching tutorials. Ship something daily!",
    likes: 445,
    comments: 89,
    daysCompleted: 7,
    totalDays: 7,
  },
  {
    id: 6,
    user: {
      name: "Maya Patel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maya",
      streak: 7,
    },
    goal: "Write 1000 Words Daily",
    category: "Creativity",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop",
    struggles: "Writer's block on day 4. Stared at blank page for an hour.",
    learnings:
      "Just start writing anything. Edit later. The first draft can be garbage.",
    likes: 278,
    comments: 52,
    daysCompleted: 6,
    totalDays: 7,
  },
];

export default function MilestoneFeed() {
  const [milestones, setMilestones] = useState(sampleMilestones.slice(0, 3));
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(() => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const currentLength = milestones.length;
      const nextItems = sampleMilestones.slice(
        currentLength,
        currentLength + 2,
      );

      if (nextItems.length === 0) {
        setMilestones((prev) => [
          ...prev,
          ...sampleMilestones.map((m, i) => ({
            ...m,
            id: prev.length + i + 1,
          })),
        ]);
      } else {
        setMilestones((prev) => [...prev, ...nextItems]);
      }
      setLoading(false);
    }, 1000);
  }, [loading, milestones.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 0.1 },
    );
    const sentinel = document.getElementById("scroll-sentinel");
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <section className="w-full px-10 max-w-3xl mx-auto py-10">
      {/* Feed Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-black p-2 rounded-xl">
          <Sparkles className="text-yellow-400 w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-black uppercase italic leading-none">
            The Wall of Wins
          </h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Real Results, Real People
          </p>
        </div>
      </div>

      {/* Cards List */}
      <div className="space-y-2">
        {milestones.map((milestone, index) => (
          <MilestoneCard
            key={`${milestone.id}-${index}`}
            milestone={milestone}
            index={index}
          />
        ))}
      </div>

      {/* Sentinel / Loading */}
      <div
        id="scroll-sentinel"
        className="py-12 flex flex-col items-center justify-center gap-3"
      >
        {loading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="p-3 bg-yellow-400 rounded-full border-2 border-black"
          >
            <Loader2 className="w-6 h-6 text-black" />
          </motion.div>
        )}
        <p className="text-[10px] font-black uppercase text-slate-300 italic tracking-widest">
          {loading
            ? "Fetching more greatness..."
            : "Keep scrolling to see more"}
        </p>
      </div>
    </section>
  );
}
